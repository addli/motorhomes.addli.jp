import "../view/InfoWindowView.tag"

<mapviewcontroller>

<div id="motorhome-map" />
<infowindowview />

<script>
import { DIContainer }  from "../../logic/Foundation/inversify.config"
import InjectionType    from "../../logic/Foundation/InjectionType"
import MapService       from "../../logic/Service/MapService"

var self = this
var service = new MapService( 
    DIContainer.get(InjectionType.MapRepository),
    DIContainer.get(InjectionType.PlaceRepository),
 );

// riot lifecycle
// ──────────────────
self.on('mount', function(){
})

// ui action
// ──────────────────
self.onClickTabButton = function(){
    self.opts.tab.setSelectedIndex(1)
}

// tabbar controller lifecycle
// ──────────────────
self.didSelect = function(){
    if( !service.isLoaded() ){
        self.loadMap()
    }
}

// private functions
// ──────────────────
self.loadMap = function(){
    service.load( function(view,error){
        if(error){ 
            console.log( "error=" + error.message )
            return
        }
        // Display map on view
        document.getElementById("motorhome-map").appendChild(view)
        service.setInfoWindowContent( self.tags.infowindowview.domContent() )
        reloadPlace()
    })
}

function reloadPlace(){
    service.loadPlace( function( places,error ){
        if(error){ 
            console.log( "error=" + error.message )
            return
        }

        // Put place of motorhome builder on map.
        service.putPlaces( places )
        service.setMarkerClickHandler( function( place ){
            self.tags.infowindowview.setPlace( place )
        })
         
        service.fitBounds()
    })
}

</script>

<style>
#motorhome-map{
    width: 100%;
    height: 100%;
    background-color: lightgray;
}
</style>

</mapviewcontroller>