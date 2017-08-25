import MapRepository from "../Domain/Repository/interface/MapRepository"
import PlaceRepository from "../Domain/Repository/interface/PlaceRepository"

import Place from "../Domain/Entity/Place"
import Location from "../Domain/Entity/Location"

export default class MapService{

    private mapRepo:MapRepository;
    private placeRepo:PlaceRepository;

    constructor(mapRepo: MapRepository, placeRepo: PlaceRepository){
        this.mapRepo = mapRepo
        this.placeRepo = placeRepo
    }

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
}