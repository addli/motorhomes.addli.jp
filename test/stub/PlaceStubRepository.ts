import Place from "../../src/Domain/Entity/Place"

import { injectable } from "inversify"
import PlaceRepository from "../../src/Domain/Repository/interface/PlaceRepository"
import "reflect-metadata"

@injectable()
export default class PlaceStubRepository implements PlaceRepository {
    public loadPlace: ( handler: (places: Place[], error?: Error) => void ) => void
}
