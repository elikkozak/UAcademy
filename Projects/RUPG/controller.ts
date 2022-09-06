(function (){
    const userGenerateBtn = $("#generate-usr-btn")
    const dataModule = new PageModule()
    userGenerateBtn.on("click",async function () {
        dataModule.generate()
    })
})()