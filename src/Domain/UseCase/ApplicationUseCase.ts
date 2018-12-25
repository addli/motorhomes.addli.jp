import i18next from "i18next"
import moment from "moment"

import Settings from "../../Infrastructure/Settings"
import Analytics from "../../Infrastructure/Analytics"

export default class ApplicationUseCase {

    public initialize = ( completion: (error?: Error) => void ) => {

        // Download application settings.
        let requestSettings = fetch("assets/json/settings.json")
        .then( (res) => { return res.json() })
        .then( (json) => {
            Settings.shared().set( json )
        })
        .catch(function(error) {
            throw error
        })

        // Download loacalize strings.
        let lang = ((window.navigator.languages && window.navigator.languages[0]) ||
                     window.navigator.language).substr(0, 2) === "ja" ? "ja" : "en"
        let requestLocalizedString = fetch("assets/json/i18n/" + lang + "/localize.json")
        .then( (res) => { return res.json() })
        .then( (json) => {
            let resources = {}
            resources[lang] = { translation: json }
            i18next.init({
                lng: lang,
                debug: false,
                resources: resources,
                interpolation: {
                    format: function(value, format, lng) {
                        if (format === "uppercase") { return value.toUpperCase() }
                        if (value instanceof Date) { return moment(value).format(format) }
                        return value
                    }
                }
            }, function( error, translation ) {
                throw error
            })
        })
        .catch((error) => {
            throw error
        })

        // Request of parallel.
        Promise.all([requestSettings, requestLocalizedString])
        .then( () => {
            // Start Analytics
            Analytics.shared().start( Settings.shared().valueForKey("analytics").trackingID )
            Analytics.shared().send("pageview")
            // No error
            completion(null)
        })
        .catch((error) => {
            // Has error
            completion(error)
        })
    }
}
