import MapRepository from "../Domain/Repository/MapRepository"

export default class MapService{

    private mapRepo : MapRepository = new MapRepository()

    /**
    * 地図の読み込みを指示する
    * @param handler 結果ハンドラ。読み込みが成功した場合地図機能を持つ<div>エレメントが渡される
    */
    public loadMap = ( handler:(view:HTMLElement,error?:Error) => void) => {
        this.mapRepo.load( handler )
    }
}