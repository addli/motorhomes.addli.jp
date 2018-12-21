<InfoWindowView>

<script>
var self = this

self.place = {}

// public method
// ──────────────────
self.domContent = function(){
    return document.getElementById("info-window-content")
}

self.setPlace = function( place ){
    self.place = place
    self.update()
}

</script>

<style>
#info-window-content{
    min-width: 200px;
    position : relative;
    display  : none;
    overflow : hidden;
    font-size: 16px;
}
.hidden-container{
    display  : none;
    overflow : hidden;
}
</style>

<!-- InfoWindow -->
<div id="info-window-content">
    <div class="hidden-container">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    { place.title }
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    { place.address }
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    { place.url }
                </div>
            </div>
        </div>
    </div>
</div>

</InfoWindowView>