import NotificationCenter from "../Foundation/NotificationCenter"
import NotificationKeys from "../Foundation/NotificationKeys"

export default class RootService{

    public setNavigationBarLeftButtonSettingHanlder = (handler:(item:any) => void) =>{
        NotificationCenter.shared().addObserver( NotificationKeys.showNavigationBarLeftButton,handler)
    }
}