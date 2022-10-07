"use strict";
class viewModule {
    renderPage(data) {
        $(".players-cards").empty();
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ data });
        // append our new html to the page
        $(".players-cards").append(newHTML);
    }
    renderLightBox(data) {
        const lightBox = document.getElementById('lightBox');
        // document.body.append(lightBox)
        if (!lightBox)
            return;
        lightBox === null || lightBox === void 0 ? void 0 : lightBox.classList.add('active');
        // const playerStats = document.createElement('div')
        // playerStats.id = 'statistics-card'
        const source = $("#statistics-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        // playerStats.append(newHTML)
        // append our new html to the page
        // $(".players-cards").append(newHTML);
        // // img.src = imgSrc
        // while(lightBox?.firstChild){
        //     lightBox.removeChild(lightBox.firstChild)
        // }
        $("#lightBox").append(newHTML);
        // lightBox?.append(newHTML)
    }
}
