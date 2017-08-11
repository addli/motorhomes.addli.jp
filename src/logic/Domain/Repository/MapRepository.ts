import Record from "../Entity/Record"
import $ from 'jquery'
import Settings from '../../Foundation/Settings'

export interface MapRepository{
    /**
     * 地図の読み込み開始
     * @param handler 結果ハンドラ。非同期で実行される。ただしviewがキャッシュ済みの時は同期的に実行される。
     */
    load : (handler:(view:HTMLElement,error?:Error) => void ) => void

}

export default class MapImplRepository implements MapRepository{

    private view?:HTMLElement
    private map?:google.maps.Map
    private setting = Settings.shared().valueForKey("map")

    public load = (handler:(view?:HTMLElement,error?:Error) => void ) => {
        if ( this.view ){
            handler( this.view, undefined );return
        }
        $.ajax({
            type    : 'GET',
            url     : this.setting.url,
            data    : {
                key  : this.setting.apiKey
            },
            dataType: 'jsonp',
            jsonp   : 'callback'
        })
        .done( () => { // Imported 'google'
            var view = document.createElement("div")
            view.setAttribute("style","width:100%;height:100%")
            this.map = new google.maps.Map( view, { 
                zoom: this.setting.zoom,
                mapTypeControl: false,
                streetViewControl: false,
                center:new google.maps.LatLng(
                    this.setting.center.latitude,
                    this.setting.center.longitude
                 )
            })
            this.view = view
            handler( view, undefined )
        })
        .fail( (XMLHttpRequest, textStatus, errorThrown) => {
            handler( undefined, new Error(errorThrown) )
        })
    }

}