<mapviewcontroller>

<div id="motorhome-map" />

<script>
var self = this
import MapService from "../../logic/Service/MapService"

self.service = new MapService();  // rename export default class name 

self.on('mount', function(){
    self.service.loadMap( function(view,error){
        if(error){ 
            console.log( "error=" + error.message );return
        }
        document.getElementById("motorhome-map").appendChild(view)
    })
})


self.onClickTabButton = function(){
    self.opts.tab.setSelectedIndex(1)
}
</script>

<style>
#motorhome-map{
    width: 100%;
    height: 100%;
    background-color: #ffdddd;
}
</style>

</mapviewcontroller>