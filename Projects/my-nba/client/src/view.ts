class viewModule{
    renderPage(data:object[]){
        $(".players-cards").empty()
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        // append our new html to the page
        $(".players-cards").append(newHTML);
    }

    renderLightBox(imgSrc:string){
        const lightBox  = document.getElementById('lightBox')
        // lightBox.id = 'lightBox'
        // document.body.append(lightBox)
        lightBox?.classList.add('active')
        if (!lightBox) return
        const img = document.createElement('img')
        img.src = imgSrc
        while(lightBox?.firstChild){
            lightBox.removeChild(lightBox.firstChild)
        }
        lightBox?.appendChild(img)
    }
}