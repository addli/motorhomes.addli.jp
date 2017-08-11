/**
 * アプリケーション設定
 */
export default class Settings{

    private static _instance:Settings
    constructor() {
        if(Settings._instance){
            throw new Error("must use the shared().")
        }
        Settings._instance = this;
    }

    public static shared = () => {
        if( Settings._instance === undefined ) {
            Settings._instance = new Settings();
        }
        return Settings._instance;
    }

    private settings:Object
    public set = ( settings:Object ) =>{
        this.settings = settings
    }
    public valueForKey = ( key:string ) => {
        if( this.settings == null ){
            throw new Error("Must be set.")
        }
        return this.settings[key]
    }
}
