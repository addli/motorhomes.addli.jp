import MapRepository from "../Repository/interface/MapRepository"
import PlaceRepository from "../Repository/interface/PlaceRepository"

import Place from "../Entity/Place"
import Location from "../Entity/Location"

export default class MapUseCase {

    private mapRepo: MapRepository
    private placeRepo: PlaceRepository

    private places?: Place[]

    constructor(mapRepo: MapRepository, placeRepo: PlaceRepository) {
        this.mapRepo = mapRepo
        this.placeRepo = placeRepo
    }

    public load = ( handler: ( view: HTMLElement, error?: Error ) => void) => {
        this.mapRepo.load( handler )
    }

    public isLoaded = () => {
        return this.mapRepo.isLoaded()
    }

    public loadPlace = ( handler: ( places: Place[], error?: Error ) => void ) => {
        this.placeRepo.loadPlace( handler )
    }
    public putPlaces = ( places: Place[] ) => {
        this.places = places
        this.mapRepo.setMarkers( places.map( (place) => { return place.location }) )
    }

    public setMarkerClickHandler = ( handler: ( place: Place ) => void ) => {
        this.mapRepo.setMarkerClickHandler( ( location: Location ) => {
            let place: Place = undefined
            if ( this.places ) {
                let filterd = this.places.filter( (place) => {
                    return place.location.isEqual( location )
                })
                if (filterd.length) { place = filterd[0] }
            }
            handler( place )
        })
    }

    public setInfoWindowContent = (content: HTMLElement) => {
        this.mapRepo.setInfoWindowContent( content )
    }

    public fitBounds = () => {
        this.mapRepo.fitBounds()
    }

    public refresh = () => {
        this.mapRepo.refresh()
    }
}
