import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import MovieDescription from "./components/MovieDescription";
import ReactCurvedText from "react-curved-text";

const NO_BALANCE = 0;
const UNRENT_FEE = 3;
const RENT_FEE = -3;

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 0,
          isRented: false,
          title: "Tarzan",
          year: 1999,
          img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
          descrShort:
            "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
        },
        {
          id: 1,
          isRented: false,
          title: "The Lion King",
          img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
          year: 1994,
          descrShort:
            "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
        },
        {
          id: 2,
          isRented: false,
          title: "Beauty and the Beast",
          year: 1991,
          img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
          descrShort:
            "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
        },
        {
          id: 3,
          isRented: false,
          title: "The Sword in the Stone",
          year: 1963,
          img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
          descrShort:
            "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
        },
        {
          id: 4,
          isRented: false,
          title: "Beauty and the Beast",
          year: 2016,
          img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
          descrShort:
            "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
        },
      ],
      users: [
        {
          id: 0,
          name: "Elik",
          balance: 9,
          avatar:
            "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
        },
        {
          id: 1,
          name: "Ohad",
          balance: 9,
          avatar:
            "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
        },
        {
          id: 2,
          name: "Shalev",
          balance: 9,
          avatar:
            "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
        },
        {
          id: 3,
          name: "Dekel",
          balance: 9,
          avatar:
            "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
        },
      ],
      currUser: null,
      showCatalog: false,
    };
  }
  changeCurrUser = (newUserId) => {
    if (typeof newUserId === "object") {
      newUserId = null;
    }
    this.setState({
      currUser: newUserId,
    });
  };
  toggleShowCatalog = () => {
    this.setState({
      showCatalog: !this.state.showCatalog,
    });
  };

  toggleMovieRent = (movieId) => {
    let newMoviesObj = [...this.state.movies];
    let chosenMovie = newMoviesObj[movieId];
    chosenMovie.isRented = !chosenMovie.isRented;

    let feeToAddToBalance = chosenMovie.isRented ? UNRENT_FEE : RENT_FEE;

    let allUsers = [...this.state.users];
    let currUser = allUsers[this.state.currUser];
    if (currUser.balance - feeToAddToBalance < NO_BALANCE) {
      alert("Out of budget, please add more money or return some movies");
      return;
    }
    currUser.balance -= feeToAddToBalance;

    this.setState({
      users: allUsers,
      movies: newMoviesObj,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <p id="logo">
            <ReactCurvedText
              width={100}
              height={100}
              cx="40"
              cy="30"
              rx={77}
              ry={30}
              startOffset={60}
              reversed={true}
              text="REFLIX"
              textProps={{
                style: {
                  fontFamily: "Bebas Neue",
                  fontSize: "30",
                  fill: "red",
                },
              }}
              tspanProps={{ dy: "25" }}
            />
          </p>
          <div id="main-links">
            <Link
              to="/"
              onClick={function () {
                this.changeCurrUser();
                this.toggleShowCatalog();
              }}
            >
              <span>Home</span>
            </Link>
            {this.state.showCatalog ? (
              <Link to="/catalog" onClick={this.toggleShowCatalog}>
                <span>Catalog</span>
              </Link>
            ) : null}
          </div>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                users={this.state.users}
                changeCurrUser={this.changeCurrUser}
              />
            )}
          />
          <Route
            exact
            path="/catalog"
            render={() => (
              <Catalog
                movies={this.state.movies}
                toggleMovieRent={this.toggleMovieRent}
                toggleShowCatalog={this.toggleShowCatalog}
                user={this.state.users[this.state.currUser]}
              />
            )}
          />

          <Route
            exact
            path="/movies/:id"
            render={({ match }) => (
              <div>
                <MovieDescription movie={this.state.movies[match.params.id]} />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
