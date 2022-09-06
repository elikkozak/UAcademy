const PageModule = function(){
    class User{
        fullName:string
        city:string
        state:string
        picture:string
        friendsArray:string[]
        private NUM_OF_FRIENDS = 6
        constructor(fullName = "",city = "",state = "",picture = "",friendsArray = [] ){
            this.fullName = fullName;
            this.city = city;
            this.state = state;
            this.picture = picture;
            this.friendsArray = friendsArray;

        }
        async generateUser(){
            let result = await $.get(`https://randomuser.me/api/?results=${1+this.NUM_OF_FRIENDS}`)
            let randomProfileObj = result.results[0];
            this.fullName = `${randomProfileObj.name.first} ${randomProfileObj.name.last}`;        
            this.city = randomProfileObj.location.city
            this.state = randomProfileObj.location.state
            this.picture = randomProfileObj.picture.large
            this.friendsArray = result.results.splice(0,1).filter((obj:any) => obj.name.first + " " + obj.name.last)
        }
    }
    class Pokemon{
        name:string
        picture:string
        constructor(name = "",picture = ""){
            this.name = name
            this.picture = picture
        }
         generateRandomNumber(num:number):number { return Math.floor(Math.random() * num)};

        async generatePokemon(){
            let pokemon = await $.get(`https://pokeapi.co/api/v2/pokemon/${this.generateRandomNumber(250)}`)
            this.name = pokemon.name
            this.picture = pokemon.sprites.front_default
            
        }
    }

    class Quote{
        quote:string
        constructor(quote = ''){
            this.quote = quote
        }
        async generateQuote(){
            let result = await $.get(`https://api.kanye.rest/`)
            this.quote = result.quote

        }   
    }

    class Bacon{
        baconIpsum:string
        constructor(baconIpsum = ''){
            this.baconIpsum = baconIpsum
        }
        async generateBacon(){
            let result = await $.get(
                "https://baconipsum.com/api/?type=meat-and-filler"
              );
              this.baconIpsum = result[0]
        }
    }
}