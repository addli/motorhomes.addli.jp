import Place from "../../Entity/Place"

export default interface PlaceRepository{
     loadPlace : ( handler:(places:Place[],error?:Error) => void ) => void
}
    