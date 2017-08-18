import "./about/MarkedViewController.tag"
import "./about/LicenseViewController.tag"

<aboutviewcontroller>

<div class="viewcontroller-view">
    <div class="container">
        <section class="widget" onclick={ onClickTermButton }>
            { localize("About this app") }
        </section>
        <section class="widget" onclick={ onClickLicenseButton }>
            { localize("Open Source Licenses") }
        </section>
    </div>
</div>

<script>
import i18next from "i18next"

var self = this

// ui action
// ──────────────────
self.onClickTermButton = function(){
    self.opts.nav.push("markedviewcontroller")
}
self.onClickCorpButton = function(){
    self.opts.nav.push("markedviewcontroller")
}
self.onClickLicenseButton = function(){
    self.opts.nav.push("licenseviewcontroller")
} 

self.localize = function( key ){
    return i18next.t( key )
}
</script>

<style>
.widget{
    cursor: pointer;
}

</style>

</aboutviewcontroller>