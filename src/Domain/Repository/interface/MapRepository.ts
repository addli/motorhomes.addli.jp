
import Location from "../../Entity/Location"

export default interface MapRepository {
    load: (handler: (view: HTMLElement, error?: Error) => void ) => void
    isLoaded: () => boolean
    refresh: () => void
    setMarkers: ( locations: Location[] ) => void
    setMarkerClickHandler: ( hanlder: ( location: Location ) => void ) => void
    setInfoWindowContent: (content: HTMLElement) => void
    fitBounds: () => void
}
