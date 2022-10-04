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
    renderLightBox(imgSrc) {
        const lightBox = document.createElement('div');
        lightBox.id = 'lightBox';
        document.body.append(lightBox);
        lightBox.classList.add('active');
        const img = document.createElement('img');
        img.src = imgSrc;
        lightBox.appendChild(img);
    }
}
