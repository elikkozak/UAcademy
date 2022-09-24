"use strict";
class viewModule {
    renderPage(data) {
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ data });
        // append our new html to the page
        $(".players-cards").append(newHTML);
    }
}
