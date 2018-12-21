import Location from "./Location"

export default class Place{
    title : string
    type : string
    postalCode : string
    address : string
    tel : string
    url : string
    location : Location

    constructor( 
        title : string,
        type : string,
        postalCode : string,
        address : string,
        tel : string,
        url : string,
        location : Location){
        this.title  = title
        this.type   = type
        this.postalCode = postalCode
        this.address =  address
        this.tel    = tel
        this.url    = url
        this.location = location
    }
}
