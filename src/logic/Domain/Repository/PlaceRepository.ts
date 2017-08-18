import Place from "../Entity/Place"
import Location from "../Entity/Location"

export interface PlaceRepository{

    loadPlace : ( handler:(places:Place[],error?:Error) => void ) => void

}

export default class PlaseImplRepository implements PlaceRepository{

    public loadPlace = ( handler:(places:Place[],error?:Error) => void ) => {

        fetch("assets/json/places.json")
        .then( (response) => {
            return response.json()
        })
        .then( (json) =>{
            if( json instanceof Array ){
                var places = json.map((o) => { 
                    return new Place(o["title"],o["type"],o["postalCode"],o["address"],o["tel"],o["url"],
                    new Location(o["location"].latitude,o["location"].longitude) )
                })
                handler( places, undefined )
                return
            }
            handler( undefined, new Error("Places file broken.") )
        })
        .catch( (exception) => {
            handler( undefined, exception )
        })
    }
}
