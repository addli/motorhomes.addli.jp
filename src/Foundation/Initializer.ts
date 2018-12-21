import riot from "riot"
import i18next from "i18next"
import moment from "moment"

import Settings from "../Infrastructure/Settings"    
import Analytics from "../Infrastructure/Analytics"

// import riot tags
import "../Presentation/application.tag"

export default class Initializer{

    constructor(){
    }

    initialize = () => {

        var requestSettings = fetch("assets/json/settings.json")
        .then( (res) => { return res.json() })
        .then( (json) =>{
            Settings.shared().set( json )
        })
        .catch(function(error) {
            console.log('Request setings is failed', error.message)
            throw error
        })

        var lang = ((window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language).substr(0,2) == "ja" ? "ja" : "en"
        var requestLocalizedString = fetch("assets/json/i18n/"+ lang +"/localize.json")
        .then( (res) => { return res.json() })
        .then( (json) => {
            var resources = {}
            resources[lang] = { translation: json }
            i18next.init({
                lng: lang,
                debug: false,
                resources: resources,
                interpolation: {
                    format: function(value, format, lng) {
                        if (format === "uppercase") return value.toUpperCase();
                        if (value instanceof Date) return moment(value).format(format);
                        return value;
                    }
                }
            }, function( error, translation ) {
                if( error ){
                    console.log(error);
                    return
                }
            });
        })
        .catch((error) => {
            console.log("Request localize file is failed.", error.message)
            throw error
        })

        Promise.all([requestSettings, requestLocalizedString])
        .then( ()=>{
            // Start Analytics 
            Analytics.shared().start( Settings.shared().valueForKey("analytics").trackingID )
            Analytics.shared().send("pageview")
            // Start Application
            riot.mount("application")
        })
        .catch((error) => {
            console.log("Initialize is faild.", error.message)
        })
    }
}