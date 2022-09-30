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