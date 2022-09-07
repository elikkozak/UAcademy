"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PageModule {
    constructor() {
        this.user = new User();
        this.pokemon = new Pokemon();
        this.quote = new Quote();
        this.bacon = new Bacon();
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.user.generateUser();
            yield this.pokemon.generatePokemon();
            yield this.quote.generateQuote();
            yield this.bacon.generateBacon();
            return this;
        });
    }
}
class User {
    constructor(fullName = "", city = "", state = "", picture = "", friendsArray = []) {
        this.NUM_OF_FRIENDS = 6;
        this.fullName = fullName;
        this.city = city;
        this.state = state;
        this.picture = picture;
        this.friendsArray = friendsArray;
    }
    generateUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield $.get(`https://randomuser.me/api/?results=${1 + this.NUM_OF_FRIENDS}`);
            let randomProfileObj = result.results[0];
            this.fullName = `${randomProfileObj.name.first} ${randomProfileObj.name.last}`;
            this.city = randomProfileObj.location.city;
            this.state = randomProfileObj.location.state;
            this.picture = randomProfileObj.picture.large;
            this.friendsArray = result.results.slice(1).map((obj) => obj.name.first + " " + obj.name.last);
        });
    }
}
class Pokemon {
    constructor(name = "", picture = "") {
        this.name = name;
        this.picture = picture;
    }
    generateRandomNumber(num) { return Math.floor(Math.random() * num); }
    ;
    generatePokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            let pokemon = yield $.get(`https://pokeapi.co/api/v2/pokemon/${this.generateRandomNumber(250)}`);
            this.name = pokemon.name;
            this.picture = pokemon.sprites.front_default;
        });
    }
}
class Quote {
    constructor(quote = '') {
        this.quote = quote;
    }
    generateQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield $.get(`https://api.kanye.rest/`);
            this.quote = result.quote;
        });
    }
}
class Bacon {
    constructor(baconIpsum = '') {
        this.baconIpsum = baconIpsum;
    }
    generateBacon() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield $.get("https://baconipsum.com/api/?type=meat-and-filler");
            this.baconIpsum = result[0];
        });
    }
}
