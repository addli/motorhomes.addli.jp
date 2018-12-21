<navigationbar>

<header>
    <div class="navigation-bar">
        <div class="left">
            <div class="item" if={ leftBarItem } onclick={ onClickLeftBarItem }>
                <span class={ "glyphicon " + leftBarItem.glyphicon }></span>
            </div>
        </div>
        <div class="title">
            motorhomes
        </div>
        <div class="right">
            <div class="item" if={ rightBarItem } onclick={ onClickRightBarItem }>
                <span class={ "glyphicon " + rightBarItem.glyphicon }></span>
            </div>
        </div>
    </div>
</header>

<script>
var self = this

self.leftBarItem = null
self.rightBarItem = null

// public method
// ──────────────────
self.setLeftBarItem = function( item ){
    self.leftBarItem = item
    self.update()
}

self.setRightBarItem = function( item ){
    self.rightBarItem = item
    self.update()
}

// ui action
// ──────────────────
self.onClickLeftBarItem = function(){
    self.leftBarItem.handler()
}

self.onClickRightBarItem = function(){
    self.rightBarItem.handler()
}

</script>
</navigationbar>