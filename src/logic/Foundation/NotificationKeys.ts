/**
 * 通知キー
 */
export default class NotificationKeys{

    /** コンテンツのメインタイトルが変わった時に通知 */
    public static contentTitleChange = "contentTitleChange"

    /** 既読数が再計算された時に通知 */
    public static recalculatedUnreadCount = "recalculatedUnreadCount"

    /** ナビゲーションバーに左ボタンを表示させたい時に通知 スタイル変更には未対応*/
    public static showNavigationBarLeftButton = "showNavigationBarLeftButton"

    /** ナビゲーションバーに右ボタンを表示させたい時に通知 */
    public static showNavigationBarRightButton = "showNavigationBarRightButton"

    /** 通信状態が変わった時に通知 */
    public static networkActiveStateChange = "networkActiveStateChange"

}