import NotificationKeys from "../../Foundation/NotificationKeys"
import NotificationCenter from "../../Infrastructure/NotificationCenter"

export default class TopUseCase {

    public setNavigationBarLeftButtonSettingHanlder = (handler: (item: any) => void) => {
        NotificationCenter.shared().addObserver( NotificationKeys.showNavigationBarLeftButton, handler)
    }
}
