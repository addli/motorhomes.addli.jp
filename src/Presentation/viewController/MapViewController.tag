import "../view/InfoWindowView.tag"

<mapviewcontroller>

<div id="motorhome-map" />
<infowindowview />

<script>
import { DIContainer }  from "../../Foundation/inversify.config"
import InjectionType    from "../../Foundation/InjectionType"
import MapUseCase       from "../../Domain/UseCase/MapUseCase"

var self = this
var useCase = new MapUseCase( 
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
    if( !useCase.isLoaded() ){
        self.loadMap()
    }
}

// private functions
// ──────────────────
self.loadMap = function(){
    useCase.load( function(view,error){
        if(error){ 
            console.log( "error=" + error.message )
            return
        }
        // Display map on view
        document.getElementById("motorhome-map").appendChild(view)
        useCase.setInfoWindowContent( self.tags.infowindowview.domContent() )
        reloadPlace()
    })
}

function reloadPlace(){
    useCase.loadPlace( function( places,error ){
        if(error){ 
            console.log( "error=" + error.message )
            return
        }

        // Put place of motorhome builder on map.
        useCase.putPlaces( places )
        useCase.setMarkerClickHandler( function( place ){
            self.tags.infowindowview.setPlace( place )
        })
         
        useCase.fitBounds()
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