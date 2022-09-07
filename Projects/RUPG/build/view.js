"use strict";
class Renderer {
    renderPage(dataModule) {
        this.cleanRendering();
        this.renderProfile(dataModule.user);
        this.renderFriends(dataModule.user.friendsArray);
        this.renderPokemon(dataModule.pokemon);
        this.renderBacon(dataModule.bacon);
        this.renderQuote(dataModule.quote);
    }
    renderQuote(quote) {
        const container = ".quote-container";
        const templateId = "#quote-template";
        this.handleBarHelper(templateId, quote, container);
    }
    renderBacon(bacon) {
        const container = ".meat-container";
        const templateId = "#meat-template";
        this.handleBarHelper(templateId, bacon, container);
    }
    renderPokemon(pokemon) {
        const container = ".pokemon-container";
        const templateId = "#pokemon-template";
        this.handleBarHelper(templateId, pokemon, container);
    }
    renderFriends(friends) {
        const container = ".friends-container";
        const templateId = "#friends-template";
        this.handleBarHelper(templateId, friends, container);
    }
    renderProfile(user) {
        const container = ".user-container";
        const templateId = "#user-template";
        this.handleBarHelper(templateId, user, container);
    }
    handleBarHelper(templateId, data, container) {
        const source = $(`${templateId}`).html();
        const template = Handlebars.compile(source);
        const newHTML = template((Array.isArray(data)) ? { data } : data);
        // append our new html to the page
        $(`${container}`).append(newHTML);
    }
    cleanRendering() {
        $(".user-container").empty();
        $(".quote-container").empty();
        $(".pokemon-container").empty();
        $(".meat-container").empty();
        $(".friends-container").empty();
    }
}
