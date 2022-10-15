"use strict";
class viewModule {
    renderAddPlayer(element) {
        element.removeAttribute("class");
        element.classList.add('remove-from-dream-team-btn');
        element.classList.add('fa');
        element.classList.add('fa-minus');
    }
    renderRemovePlayer(element) {
        element.removeAttribute("class");
        element.classList.add('add-to-dream-team-btn');
        element.classList.add('fa');
        element.classList.add('fa-plus');
    }
    renderPage(data) {
        $("#error-message").empty();
        $(".players-cards").empty();
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ data });
        $(".players-cards").append(newHTML);
    }
    renderError(errorObj) {
        $("#error-message").html("ERROR NO DATA FOR THIS INPUT");
    }
    renderDreamTeamPage(data) {
        $("#error-message").empty();
        $(".players-cards").empty();
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ data });
        $(".players-cards").append(newHTML);
        for (let i = 0; i < $(".player-card").children(".add-to-dream-team-btn").length; i++) {
            this.renderAddPlayer($(".player-card").children(".add-to-dream-team-btn")[i]);
        }
    }
    renderLightBox(data) {
        $("#lightBox").addClass("active");
        const source = $("#statistics-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        $("#lightBox").children().remove();
        $("#lightBox").append(newHTML);
    }
    renderLightBoxError() {
        $("#lightBox").addClass("active");
        const newHTML = $(document.createElement('img'));
        newHTML.attr('src', "https://pbs.twimg.com/media/DDPKLHNVwAA87D5.jpg");
        $("#lightBox").children().remove();
        $("#lightBox").append(newHTML);
    }
}
