const getTeamButton = $("#get-team-btn")
const filterTeamButton = $("#filter-team-btn")
const getDreamTeamButton = $("#get-dream-team-btn")
const lightBox = $("#lightBox")
 

let getYearInput = $("#input-year").get(0) as HTMLInputElement
const getTeamInput = $("#input-team").get(0) as HTMLInputElement
const dataModuleGetter = new dataModule()
const renderer = new viewModule()

getTeamButton.on("click",async function () {
    dataModuleGetter.getData(getTeamInput.value,getYearInput.value).then(
        (result:any)=>{
            renderer.renderPage(result)            
        }
    )

})

filterTeamButton.on("click",async function () {
    dataModuleGetter.getFilteredData().then(
        (result:any)=>{
            renderer.renderPage(result)            
        }
    )

})

$(".players-cards").on("click",".player-card",async function (e) {
    if(e.target && e.target.parentElement.className ==="player-card"){
        const playerName:string = e.target.parentElement.children[0].textContent.toLowerCase()

        
        const [l_name,f_name] = playerName.split(" ")
        dataModuleGetter.getStatsData(f_name,l_name).then(
            (result:any)=>{
                result["img"] = e.target.parentElement.children[2].src
                renderer.renderLightBox(result)            
            }
        )
    }

})

$("body").on("click","#lightBox",function(e){
    if(e.target !== e.currentTarget) return
    lightBox.removeClass('active')
})

getDreamTeamButton.on("click",async function(){
    dataModuleGetter.getDreamTeam().then(
        (result:any)=>{
            renderer.renderPage(result)            
        }
)})