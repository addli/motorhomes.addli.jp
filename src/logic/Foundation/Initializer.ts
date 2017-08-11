import riot from 'riot'

import Settings from './Settings'

export default class Initializer{
    constructor(){
    }

    initialize = () => {
        fetch('assets/json/settings.json')
        .then( (response) => {
            return response.json()
        })
        .then( (json) =>{
            Settings.shared().set( json )
            riot.mount('application')
        })
        .catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}