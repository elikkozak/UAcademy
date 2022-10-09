class viewModule{
    renderPage(data:object[]){
        $(".players-cards").empty()
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        $(".players-cards").append(newHTML);
    }

    renderLightBox(data:any){
        $("#lightBox").addClass("active")
        const source = $("#statistics-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        $("#lightBox").children().remove()
        $("#lightBox").append(newHTML)
    }

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
}