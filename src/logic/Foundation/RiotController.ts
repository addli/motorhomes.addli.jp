import riot from 'riot'

export default class RiotController{
    constructor(){
    }

    mount = () => {
        riot.mount('application')
    }
}