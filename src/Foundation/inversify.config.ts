import { Container } from "inversify"

import InjectionType from "./InjectionType"

import MapImplRepository from "../Domain/Repository/MapImplRepository"
import PlaceImplRepository from "../Domain/Repository/PlaceImplRepository"

let DIContainer = new Container()
DIContainer.bind<MapImplRepository>(InjectionType.MapRepository).to(MapImplRepository)
DIContainer.bind<PlaceImplRepository>(InjectionType.PlaceRepository).to(PlaceImplRepository)

export { DIContainer }
