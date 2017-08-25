import { expect } from 'chai';
import { DIContainer } from "../inversify.config"

import MapService from "../../src/logic//Service/MapService"
import InjectionType    from "../../src/logic/Foundation/InjectionType"

describe('MapService', () => {
    it('isLoaded return true', () => {
        var service = new MapService( 
            DIContainer.get(InjectionType.MapRepository),
            DIContainer.get(InjectionType.PlaceRepository),
         )
        expect(service.isLoaded()).to.equal(true)
    });
});
