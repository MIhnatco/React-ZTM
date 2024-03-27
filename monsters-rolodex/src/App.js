import "./App.css";
import { Component } from "react";

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
        {/*Input field for searching monsters*/}
        <input
          type="search"
          className="search"
          placeholder="Search monsters"
          onChange={onSearchChange}
        />

        {/*Displaying monsters*/}
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
