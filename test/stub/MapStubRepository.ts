import Location from "../../src/logic/Domain/Entity/Location"

import { injectable } from "inversify"
import MapRepository from "../../src/logic/Domain/Repository/interface/MapRepository"
import "reflect-metadata"

@injectable()
export default class MapStubRepository implements MapRepository{

    load = (handler:(view:HTMLElement,error?:Error) => void ) => {

    }
    isLoaded = () => {
        return true
    }
    refresh = () => {

    }
    setMarkers = ( locations:Location[] ) => {

    }
    setMarkerClickHandler = ( hanlder:( location:Location ) => void ) => {

    }
    setInfoWindowContent = (content:HTMLElement) => {

    }
    fitBounds = () => {

    }
}