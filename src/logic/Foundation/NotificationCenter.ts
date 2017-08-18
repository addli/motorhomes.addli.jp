
import observable from "riot-observable"
import riot from "riot"

/**
 * 通知センター。Observerパターンによりクラス間の情報通知を行う。riot.observableを使用して実現されている。
 */
export default class NotificationCenter {

    /**
     * NotificationCenter のインスタンス
     */
    private static _instance:NotificationCenter

    /**
     * オブザーバー
     */
    private observer:any = {}

    /**
     * new でのインスタンス作成を抑止している
     */
    constructor() {
        if(NotificationCenter._instance){
            throw new Error("must use the shared().")
        }
        NotificationCenter._instance = this;
        riot.observable(this.observer)
    }

    /**
     * NotificationCenterのシングルトンインスタンスを返す
     * @return NotificationCenterのインスタンス
     */
    public static shared = () => {
        if( NotificationCenter._instance === undefined ) {
            NotificationCenter._instance = new NotificationCenter();
        }
        return NotificationCenter._instance;
    }

    /**
     * 通知の待受を開始する
     * @param key 待ち受ける通知キー
     * @param func 通知が来た際に呼び出されるファンクション
     */
    public addObserver = (key:String,func:Function) => {
        this.observer.on(key, func)
    }

    /**
     * 通知の待受を終了
     * @param key 待ち受けを終了する通知キー
     */
    public removeObserver = ( key:string ) => {
        this.observer.off(key)
    }

    /**
     * 通知を送信する
     * @param key 通知キー
     * @param param 通知を待ち受けるファンクションに対し渡す引数
     */
    public post = ( key:String, param:any ) => {
        this.observer.trigger(key,param)
    }
}