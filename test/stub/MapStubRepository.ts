import Location from "../../src/Domain/Entity/Location"

import { injectable } from "inversify"
import MapRepository from "../../src/Domain/Repository/interface/MapRepository"
import "reflect-metadata"

@injectable()
export default class MapStubRepository implements MapRepository {

    public load = (handler: (view: HTMLElement, error?: Error) => void ) => {

    }

    public isLoaded = () => {
        return true
    }

    public refresh = () => {

    }

    public setMarkers = ( locations: Location[] ) => {

    }

    public setMarkerClickHandler = ( hanlder: ( location: Location ) => void ) => {

    }

    public setInfoWindowContent = (content: HTMLElement) => {

    }
    public fitBounds = () => {

    }
}
