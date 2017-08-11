import 'riot-tab/dist/TabBarController.tag'
import './mapviewcontroller.tag'
import './aboutviewcontroller.tag'

<rootviewcontroller>

<header>
    <div class="navigation-bar">
        <div class="left">
            <div class="item">
                <span class="glyphicon glyphicon-chevron-left"></span>
            </div>
        </div>
        <div class="title">
            moterhomes
        </div>
        <div class="right">
            <div class="item">
                <span class="glyphicon glyphicon-map-marker"></span>
            </div>
        </div>
    </div>
</header>

<div class="headered footered" style="width: 100%;">
    <tabbarcontroller tabs={ [
        { tagName : "mapviewcontroller", opts : {} },
        { tagName : "aboutviewcontroller", opts : {} }
    ] } />
</div>

<footer>
    <div class="tab-bar">
        <div class="items">
            <a href="#/map" class="active">
                <span class="glyphicon glyphicon-map-marker"></span>
                <label>Map</label>
            </a>
            <a href="#/settings">
                <span class="glyphicon glyphicon-cog"></span>
                <label>About</label>
            </a>
        </div>
    </div>
</footer>

</rootviewcontroller>
