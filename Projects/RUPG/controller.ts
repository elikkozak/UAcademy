(function (){
    const userGenerateBtn = $("#generate-usr-btn")
    const dataModule = new PageModule()
    const viewModule = new Renderer()

    Handlebars.registerHelper('toProperCase', function (str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      });
   
    userGenerateBtn.on("click",async function () {
        dataModule.generate().then(
            (result)=>{
                viewModule.renderPage(result)
            }
        )
    
    })
})()