class Renderer {
     renderPage(dataModule:PageModule) {
        $(".container").empty()
        this.renderProfile()
        this.renderFriends()
        this.renderPokemon()
        this.renderBacon()
        this.renderQuote()
    }
    renderQuote() {
        const container = ".quote-container"
        const templateId = "#quote-template"
        throw new Error("Method not implemented.")
    }
    renderBacon() {
        const container = ".meat-container"
        const templateId = "#meat-template"
        throw new Error("Method not implemented.")
    }
    renderPokemon() {
        const container = ".pokemon-container"
        const templateId = "#pokemon-template"
        throw new Error("Method not implemented.")
    }
    renderFriends() {
        const container = ".friends-container"
        const templateId = "#friends-template"
        throw new Error("Method not implemented.")
    }
    renderProfile() {
        const container = ".user-container"
        const templateId = "#user-template"
        throw new Error("Method not implemented.")
    }

    handleBarHelper(templateId:string, data: User | Pokemon | Quote | Bacon ,container:string){
        const source = $(`${templateId}`).html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        // append our new html to the page
        console.log(newHTML);
        $(`${container}`).append(newHTML);
    }
    


}