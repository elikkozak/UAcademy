(function (){
    const userGenerateBtn = $("#generate-usr-btn")
    const dataModule = new PageModule()
    const viewModule = new Renderer()
    userGenerateBtn.on("click",async function () {
        dataModule.generate().then(
            (result)=>{

                // console.log(result.user.friendsArray)
                viewModule.renderPage(result)
            }
        )
      
    })
})()