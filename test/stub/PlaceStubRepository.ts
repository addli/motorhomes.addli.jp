import Place from "../../src/logic/Domain/Entity/Place"

import { injectable } from "inversify"
import PlaceRepository from "../../src/logic/Domain/Repository/interface/PlaceRepository"
import "reflect-metadata"

@injectable()
export default class PlaceStubRepository implements PlaceRepository{
    loadPlace : ( handler:(places:Place[],error?:Error) => void ) => void
}