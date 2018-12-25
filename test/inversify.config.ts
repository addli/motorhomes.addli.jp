import { Container } from "inversify";

import InjectionType from "../src/Foundation/InjectionType"

import MapStubRepository from "./stub/MapStubRepository"
import PlaceStubRepository from "./stub/PlaceStubRepository"

var DIContainer = new Container();
DIContainer.bind<MapStubRepository>(InjectionType.MapRepository).to(MapStubRepository)
DIContainer.bind<PlaceStubRepository>(InjectionType.PlaceRepository).to(PlaceStubRepository)

export { DIContainer }