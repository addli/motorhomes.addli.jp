<licenseviewcontroller>

<div class="viewcontroller-view">
    <button onclick={ onClickBackButton }>back</button>
    <div class="container">
        <section class="widget">
            <h1>license</h1>
        </section>
    </div>
</div>

<script>
var self = this

// ui action
// ──────────────────
self.onClickBackButton = function(){
    self.opts.nav.pop()
}

</script>

</licenseviewcontroller>