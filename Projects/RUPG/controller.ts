(function (){
    const userGenerateBtn = $("#generate-usr-btn")
    const saveUserBtn = $("#save-usr-btn")
    const loadUserBtn = $("#load-usr-btn")
    const dataModule = new PageModule()
    const viewModule = new Renderer()
    let isGeneratedUser = false
    let isSavedUser = false

    Handlebars.registerHelper('toProperCase', function (str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      });
   
    userGenerateBtn.on("click",async function () {
        dataModule.generate().then(
            (result)=>{
                viewModule.renderPage(result)
                isGeneratedUser = true
                
            }
        )
    
    })

    saveUserBtn.on("click",function () {
        if(isGeneratedUser){
            localStorage.savedUser =JSON.stringify(dataModule)
            isSavedUser = true
        }
        
    })

    loadUserBtn.on("click",function () {
        if(isSavedUser){
            viewModule.renderPage(JSON.parse(localStorage.savedUser))
        }
        
    })
})()