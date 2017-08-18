export default class Analytics{

    /**
     * Analytics のインスタンス
     */
    private static _instance:Analytics

    // private _analytics:any

    /**
     * new でのインスタンス作成を抑止している
     */
    constructor() {
        if(Analytics._instance){
            throw new Error("must use the shared().")
        }
        Analytics._instance = this;

        ((i,s,o,g,r,a,m) => {
            i["GoogleAnalyticsObject"]=r
            i[r]    = i[r] || function(){ (i[r].q = i[r].q || []).push(arguments) },
            i[r].l  = 1 * new Date()
            a       = s.createElement(o)
            m       = s.getElementsByTagName(o)[0]
            a.async = 1
            a.src   = g
            m.parentNode.insertBefore(a,m)
        })( window,document,"script","https://www.google-analytics.com/analytics.js","ga")
    }

    /**
     * Analyticsのシングルトンインスタンスを返す
     * @return Analyticsのインスタンス
     */
    public static shared = () => {
        if( Analytics._instance === undefined ) {
            Analytics._instance = new Analytics()
        }
        return Analytics._instance;
    }

    /**
     * アナリティックスの開始
     * @param title 送信するイベントのタイトル
     */
    public start = ( trackingID:string ) => {
        ga("create", trackingID, "auto")
    }

    /**
     * ログを送信する
     * @param title 送信するイベントのタイトル
     */
    public send = ( title:string ) => {
        ga("send", title )
    }
}