import "./App.css";
import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  //Initial state is set up
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  //lifecycle method
  componentDidMount() {
    //fetching user data and update state
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  //input's value for searching item
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    // Update the state with the value entered in the search field.
    this.setState(() => {
      return { searchField };
    });
  };

  //generating the initial UI based on the initial state
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        {/*search-box component */}
        <SearchBox
          className="monster-search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
        />

        {/*card-list component */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
