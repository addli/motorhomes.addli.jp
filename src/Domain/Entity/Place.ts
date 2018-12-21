import Location from "./Location"

export default class Place {
    public title: string
    public type: string
    public postalCode: string
    public address: string
    public tel: string
    public url: string
    public location: Location

    constructor(
        title: string,
        type: string,
        postalCode: string,
        address: string,
        tel: string,
        url: string,
        location: Location) {
        this.title  = title
        this.type   = type
        this.postalCode = postalCode
        this.address =  address
        this.tel    = tel
        this.url    = url
        this.location = location
    }
}
