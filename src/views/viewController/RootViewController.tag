import "riot-tab/dist/TabBarController.tag"
import "riot-nav/dist/NavigationController.tag"
import "./MapViewController.tag"
import "./AboutViewController.tag"

import "../view/NavigationBar.tag"
import "../view/TabBar.tag"

<rootviewcontroller>

<navigationbar />

<div class="headered footered" style="width: 100%;">
    <tabbarcontroller tabs={ [
        { tagName : "mapviewcontroller" }, 
        {
          tagName : "navigationcontroller",
          opts : {
            root : "aboutviewcontroller" 
          }
        }
    ] } />
</div>

<tabbar />

<script>
import RootService from "../../logic/Service/RootService"
import route from "riot-route"
import i18next from "i18next"

var self = this
var service = new RootService()

// riot lifecycle
// ──────────────────
this.on("mount", function(){

    var menus = [
        {
            identifier : "map",
            tag : "mapviewcontroller",
            title : i18next.t("Map"),
            glyphicon : "glyphicon-map-marker"
        },
        {
            identifier : "about",
            tag : "aboutviewcontroller",
            title : i18next.t("About"),
            glyphicon : "glyphicon-cog"
        }
    ]

    // set notification handler
    service.setNavigationBarLeftButtonSettingHanlder( function( item ){
        self.tags.navigationbar.setLeftBarItem( item )
    })

    self.tags.tabbar.setMenus( menus )

    route.start()
    menus.forEach( function( menu ){
        route( "/" + menu.identifier, function() {
            console.log(menu)
            // Switch tab index
            self.tags.tabbarcontroller.setSelectedIndex( menus.indexOf(menu) )
            // Set active tab
            self.tags.tabbar.setActiveIndex( menus.indexOf(menu) )
        })
    })
    // 404
    route( function() {
        // Show 404 Not Found 
    })

    // in launch
    if( location.hash ) {
        var filterd = menus.filter( function( menu ){
            return menu.identifier === location.hash.substr(2)
        })
        if( filterd.length > 0 ){
            var menu = filterd[0]
            setTimeout(function(){
                self.tags.tabbarcontroller.setSelectedIndex( menus.indexOf(menu) )
                self.tags.tabbar.setActiveIndex( menus.indexOf(menu) )

                if ( menu.identifier == "map" ){
                    self.tags.tabbarcontroller.viewTags()[self.tags.tabbarcontroller.selectedIndex()].loadMap()
                }
            },5)

        }
    }else{
        // https://www.softel.co.jp/blogs/tech/archives/4069
        setTimeout(function(){
            self.tags.tabbarcontroller.viewTags()[self.tags.tabbarcontroller.selectedIndex()].loadMap()
        },5)
    }
    
})
</script>

</rootviewcontroller>
