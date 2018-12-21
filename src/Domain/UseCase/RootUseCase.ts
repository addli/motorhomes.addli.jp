import NotificationKeys from "../../Foundation/NotificationKeys"
import NotificationCenter from "../../Infrastructure/NotificationCenter"

export default class RootUseCase{

    public setNavigationBarLeftButtonSettingHanlder = (handler:(item:any) => void) =>{
        NotificationCenter.shared().addObserver( NotificationKeys.showNavigationBarLeftButton,handler)
    }
}