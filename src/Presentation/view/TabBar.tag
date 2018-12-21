<tabbar>

<script>
var self = this

self.activeIndex = 0
self.menus = []

// public method
// ──────────────────
self.setMenus = function( menus ){
    self.menus = menus
    self.update()
}

self.setActiveIndex = function( index ){
    self.activeIndex = index
    self.update()
}

</script>

<footer>
    <div class="tab-bar">
        <div class="items">
            <virtual each={ menu,i in menus }>
                <a href={ "#/" + menu.identifier } class={ i == activeIndex ? "active" : "" }>
                    <span class={ "glyphicon " + menu.glyphicon }></span>
                    <label>{ menu.title }</label>
                </a>
            </virtual>
        </div>
    </div>
</footer>

</tabbar>