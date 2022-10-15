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
            if (!("err" in result ))
                renderer.renderPage(result)      
            else{
                renderer.renderError(result)
            }      
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

const toTitleCase = (phrase:string) => {
    return phrase
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

$(".players-cards").on("click",".player-card",async function (e) {
    if(e.target && e.target.parentElement.className ==="player-card" && !e.target.className.includes("fa")  ){
        const playerName:string = e.target.parentElement.children[0].textContent.toLowerCase()

        
        const [f_name,l_name] = playerName.split(" ")
        dataModuleGetter.getStatsData(f_name,l_name).then(
            (result:any)=>{
                if (!("err" in result )){
                    result["name"] = toTitleCase(playerName)
                    result["img"] = e.target.parentElement.children[2].src
                    renderer.renderLightBox(result) 
            }
                else{
                    renderer.renderLightBoxError()
                }       
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
            renderer.renderDreamTeamPage(result)            
        }
)})

$(".players-cards").on("click",".add-to-dream-team-btn",async function (e) {
    if(e.target && e.target.parentElement.className ==="player-card" && e.target.className.includes("plus")){
        const playerName:string = e.target.parentElement.children[0].textContent
        const playerPos:string = e.target.parentElement.children[1].textContent
        const playerImg:string = e.target.parentElement.children[2].src
        const playerJersey:string = e.target.parentElement.children[3].textContent
        const playerObj = {"name":playerName,"pos":playerPos,"img":playerImg,"jersey":playerJersey}
        
        dataModuleGetter.addPlayerToDreamTeam(playerObj)
        renderer.renderAddPlayer(e.target)             
             
        
    }

})

$(".players-cards").on("click",".remove-from-dream-team-btn",async function (e) {
    if(e.target && e.target.parentElement.className ==="player-card" && e.target.className.includes("minus")){
        const playerName:string = e.target.parentElement.children[0].textContent.toLowerCase()

        const playerObj = {"name":playerName}
        
        dataModuleGetter.removePlayerFromDreamTeam(playerObj)
        renderer.renderRemovePlayer(e.target)             
             
        
    }

})