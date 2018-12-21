<markedviewcontroller>

<script>
import marked from "marked"
import NotificationKeys from "../../Foundation/NotificationKeys"
import NotificationCenter from "../../Infrastructure/NotificationCenter"

var self = this

// riot lifecycle
// ──────────────────
self.on("mount", function(){
    var div = document.getElementById("marked-document")

    var lang = ((window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language).substr(0,2) == "ja" ? "ja" : "en";
    fetch("assets/markdown/" + lang + "/" + self.opts.file )
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

<div class="viewcontroller-view scrollable">
    <div class="container">
        <section class="widget">
            <div id="marked-document" />
        </section>
    </div>
</div>

</markedviewcontroller>