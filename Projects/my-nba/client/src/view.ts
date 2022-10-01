class viewModule{
    renderPage(data:object[]){
        $(".players-cards").empty()
        const source = $("#player-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        // append our new html to the page
        $(".players-cards").append(newHTML);
    }
}