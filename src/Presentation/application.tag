import "./viewController/TopViewController.tag"
import "./viewController/ErrorViewController.tag"

<application>

<script>
import ApplicationUseCase from "../Domain/UseCase/ApplicationUseCase"

var self = this
var useCase = new ApplicationUseCase()

this.on('mount', function() {
    useCase.initialize( function( error ){
        if (error != null){
            riot.mount( "rootviewcontroller", "errorviewcontroller", { "error": error })
            return
        }
        riot.mount( "rootviewcontroller", "topviewcontroller" )
    })
})
</script>

<rootviewcontroller />

</application>