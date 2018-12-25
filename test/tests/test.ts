import { expect } from "chai"
import { DIContainer } from "../inversify.config"

import MapService from "../../src/Domain/UseCase/MapUseCase"
import InjectionType    from "../../src/Foundation/InjectionType"

describe("MapService", () => {
    it("isLoaded return true", () => {
        let service = new MapService(
            DIContainer.get(InjectionType.MapRepository),
            DIContainer.get(InjectionType.PlaceRepository),
         )
        expect(service.isLoaded()).to.equal(true)
    })
})
