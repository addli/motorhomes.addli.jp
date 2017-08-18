import $ from "jquery"
import Settings from "../../Foundation/Settings"

import Place from "../Entity/Place"
import Location from "../Entity/Location"

export interface MapRepository{
    /**
     * 地図の読み込み開始
     * @param handler 結果ハンドラ。非同期で実行される。ただしviewがキャッシュ済みの時は同期的に実行される。
     */
    load : (handler:(view:HTMLElement,error?:Error) => void ) => void

    isLoaded : () => boolean

    /**
     * 再描画
     */
    refresh : () => void

    //
    // Marker
    //
    setMarkers: ( locations:Location[] ) => void

    setMarkerClickHandler : ( hanlder:( location:Location ) => void ) => void

    // 
    // InfoWindow
    //
    /**
     * InfoWindow上に表示するHTMLを渡す
     * @param content InfoWindow上に表示するHTML
     */
    setInfoWindowContent : (content:HTMLElement) => void

    fitBounds : () => void
}

export default class MapImplRepository implements MapRepository{

    private view?:HTMLElement
    private map?:google.maps.Map
    private setting = Settings.shared().valueForKey("map")
    private markers:google.maps.Marker[] = []

    public load = (handler:(view?:HTMLElement,error?:Error) => void ) => {
        if ( this.view ){
            handler( this.view, undefined )
            return
        }

        $.ajax({
            type    : "GET",
            url     : this.setting.url,
            data    : {
                key  : this.setting.apiKey
            },
            dataType: "jsonp",
            jsonp   : "callback"
        })
        .done( () => { // Imported "google"
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

    public isLoaded = () => {
        return ( this.map )
    }

    public refresh = () => {
        if( this.map ){ google.maps.event.trigger( this.map, "resize")}
    }

    public setMarkers = ( locations:Location[] ) => {

        locations.forEach( (location) => {
            var marker = new google.maps.Marker({
                position: {lat: location.latitude, lng: location.longitude }
            })
            marker.addListener("click", () => {
                if( this.externalMarkerClickHandler ){
                    this.externalMarkerClickHandler( location )
                }
                if( this.infoWindow ){
                    this.infoWindow.open( this.map, marker )
                }
            })
            // put marker on map
            marker.setMap( this.map )
            this.markers.push( marker )
        })
    }

    private externalMarkerClickHandler?:( marker:Location ) => void

    /**
     * マーカークリックハンドラを設定
     * notice: ハンドラが実行された後にInfoWindowを開く処理が実行される
     */
    public setMarkerClickHandler = ( hanlder:( location:Location ) => void ) => {
        this.externalMarkerClickHandler = hanlder
    }

    private infoWindow?:google.maps.InfoWindow
    public setInfoWindowContent = (content:HTMLElement) =>{
        content.style.display = "inherit"
        if( this.infoWindow == null ){
            this.infoWindow = new google.maps.InfoWindow({
                maxWidth: 250
            })
        }
        this.infoWindow.setContent(content)
    }

    public fitBounds = () => {
        if( this.markers.length > 0 ){
            var bounds = new google.maps.LatLngBounds();
            this.markers.forEach(marker => {
                bounds.extend(marker.getPosition());
            });
            this.map.fitBounds(bounds)
        }
    }
}