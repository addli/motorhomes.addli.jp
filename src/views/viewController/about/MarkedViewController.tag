<markedviewcontroller>

<div class="viewcontroller-view scrollable">
    <div class="container">
        <section class="widget">
            <div id="marked-document" />
        </section>
    </div>
</div>

<script>
import marked from "marked"
import NotificationCenter from "../../../logic/Foundation/NotificationCenter"
import NotificationKeys from "../../../logic/Foundation/NotificationKeys"

var self = this

// riot lifecycle
// ──────────────────
self.on("mount", function(){
    var div = document.getElementById("marked-document")

    var lang = ((window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language).substr(0,2) == "ja" ? "ja" : "en";
    fetch("assets/markdown/" + lang + "/about-this-app.md")
    .then( (res) => { return res.text() })
    .then( (text) => {
        div.innerHTML = marked(text);
    })
    .catch((error) => {
        div.innerHTML = marked("# Sorry. Document not found.")
    })
})

// nav controller lifecycle
// ──────────────────
self.didAppear = function(){
    showBackButton()
}
self.willDisappear = function(){
    hideBackButton()
}

// tab controller lifecycle
// ──────────────────
self.didSelect = function(){
    showBackButton()
}
self.didDeselect = function(){
    hideBackButton()
}

// private function
// ──────────────────
function showBackButton(){
    NotificationCenter.shared().post( NotificationKeys.showNavigationBarLeftButton, {
        glyphicon : "glyphicon-chevron-left",
        handler : function(){
            self.opts.nav.pop()
        }
    } )
}
function hideBackButton(){
    NotificationCenter.shared().post( NotificationKeys.showNavigationBarLeftButton, null)
}

</script>

</markedviewcontroller>