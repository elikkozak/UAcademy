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
        const lightBox = document.getElementById('lightBox');
        // lightBox.id = 'lightBox'
        // document.body.append(lightBox)
        lightBox === null || lightBox === void 0 ? void 0 : lightBox.classList.add('active');
        if (!lightBox)
            return;
        const img = document.createElement('img');
        img.src = imgSrc;
        while (lightBox === null || lightBox === void 0 ? void 0 : lightBox.firstChild) {
            lightBox.removeChild(lightBox.firstChild);
        }
        lightBox === null || lightBox === void 0 ? void 0 : lightBox.appendChild(img);
    }
}
