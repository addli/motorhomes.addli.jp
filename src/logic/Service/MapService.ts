import MapRepository from "../Domain/Repository/MapRepository"
import PlaceRepository from "../Domain/Repository/PlaceRepository"

import Place from "../Domain/Entity/Place"
import Location from "../Domain/Entity/Location"

export default class MapService{

    private mapRepo : MapRepository = new MapRepository()
    private placeRepo : PlaceRepository = new PlaceRepository()
    /**
    * 地図の読み込みを指示する
    * @param handler 結果ハンドラ。読み込みが成功した場合地図機能を持つ<div>エレメントが渡される
    */
    public load = ( handler:( view:HTMLElement,error?:Error ) => void) => {
        this.mapRepo.load( handler )
    }

    public isLoaded = () => {
        return this.mapRepo.isLoaded()
    }

    public loadPlace = ( handler:( places:Place[],error?:Error ) => void ) => {
        this.placeRepo.loadPlace( handler )
    }

    private places?:Place[]
    public putPlaces = ( places:Place[] ) => {
        this.places = places
        this.mapRepo.setMarkers( places.map( (place) => { return place.location }) )
    }
    
    public setMarkerClickHandler = ( handler:( place:Place ) => void ) => {
        this.mapRepo.setMarkerClickHandler( ( location:Location ) => {
            var place:Place = undefined
            if( this.places ){
                var filterd = this.places.filter( (place) => {
                    return place.location.isEqual( location )
                })
                if(filterd.length) place = filterd[0]
            }
            handler( place )
        })
    }

    public setInfoWindowContent = (content:HTMLElement) =>{
        this.mapRepo.setInfoWindowContent( content )
    }

    public fitBounds = () => {
        this.mapRepo.fitBounds()
    }

    public refresh = () => {
        this.mapRepo.refresh()
    }
    // public openInfoWindow = ( location:Location ) => {
    //     this.mapRepo.openInfoWindow( location )
    // }
}