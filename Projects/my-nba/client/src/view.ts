class viewModule{
    renderAddPlayer(element:HTMLElement){
        element.removeAttribute("class")
        element.classList.add('remove-from-dream-team-btn')
        element.classList.add('fa')
        element.classList.add('fa-minus')
    }

    renderRemovePlayer(element:HTMLElement){
        element.removeAttribute("class")
        element.classList.add('add-to-dream-team-btn')
        element.classList.add('fa')
        element.classList.add('fa-plus')
    }
    renderPage(data:object[]){
        $("#error-message").empty()
        $(".players-cards").empty()
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        $(".players-cards").append(newHTML);
    }

    renderError(errorObj:object){
        $("#error-message").html("ERROR NO DATA FOR THIS INPUT")
    }


    renderDreamTeamPage(data:object[]){
        $("#error-message").empty()

        $(".players-cards").empty()
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        $(".players-cards").append(newHTML);
        for (let i = 0 ; i < $(".player-card").children(".add-to-dream-team-btn").length;i++){
            this.renderAddPlayer( $(".player-card").children(".add-to-dream-team-btn")[i])
        }

    }

    renderLightBox(data:any){
        $("#lightBox").addClass("active")
        const source = $("#statistics-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        $("#lightBox").children().remove()
        $("#lightBox").append(newHTML)
    }

}