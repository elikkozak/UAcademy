const getTeamButton = $("#get-team-btn")
const filterTeamButton = $("#filter-team-btn")

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
    if(e.target && (e.target.className ==="player-card" || e.target.parentElement?.className ==="player-card")){
        let playerCardElem = e.target.parentElement
        let imageElem = playerCardElem?.querySelector("img")
        
        let imgSrc = imageElem?.src || ""
        renderer.renderLightBox(imgSrc)
    }

})

$("body").on("click","#lightBox",function(e){
    if(e.target !== e.currentTarget) return
    document.getElementById("lightBox")?.classList.remove('active')
})