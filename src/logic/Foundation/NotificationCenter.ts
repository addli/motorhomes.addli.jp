
import observable from "riot-observable"
import riot from "riot"

/**
 * Notification Center
 */
export default class NotificationCenter {

    private static _instance:NotificationCenter
    private observer:any = {}

    constructor() {
        if(NotificationCenter._instance){
            throw new Error("must use the shared().")
        }
        NotificationCenter._instance = this;
        riot.observable(this.observer)
    }

    public static shared = () => {
        if( NotificationCenter._instance === undefined ) {
            NotificationCenter._instance = new NotificationCenter();
        }
        return NotificationCenter._instance;
    }

    public addObserver = (key:String,func:Function) => {
        this.observer.on(key, func)
    }

    public removeObserver = ( key:string ) => {
        this.observer.off(key)
    }

    public post = ( key:String, param:any ) => {
        this.observer.trigger(key,param)
    }
}