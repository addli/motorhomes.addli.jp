import "./MarkedViewController.tag"

<aboutviewcontroller>

<script>
import i18next from "i18next"

var self = this

// ui action
// ──────────────────
self.onClickTermButton = function(){
    self.opts.nav.push("markedviewcontroller", { "file" : "about-this-app.md" })
}

self.onClickLicenseButton = function(){
    self.opts.nav.push("markedviewcontroller", { "file" : "licenses.md" })
} 

self.onClickSectionOfGithub = function(){
    window.open('https://github.com/addli/motorhomes.addli.jp','_blank')
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

<div class="viewcontroller-view">
    <div class="container">
        <section class="widget" onclick={ onClickTermButton }>
            { localize("About this app") }
        </section>

        <section class="widget" onclick={ onClickLicenseButton }>
            { localize("Open Source Licenses") }
        </section>

        <section class="widget" onclick={ onClickSectionOfGithub }>
            { localize("Go to Github") }
        </section>
    </div>
</div>

</aboutviewcontroller>