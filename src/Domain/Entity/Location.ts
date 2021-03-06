export default class Location {
    public latitude: number
    public longitude: number

    constructor(
        latitude: number,
        longitude: number ) {
        this.latitude  = latitude
        this.longitude = longitude
    }

    public isEqual = (other: Location) => {
        return ( this.latitude === other.latitude) &&
               ( this.longitude === other.longitude )
    }
}
