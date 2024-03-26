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

  //generating the initial UI based on the initial state
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        {/*Input field for searching monsters*/}
        <input
          type="search"
          className="search"
          placeholder="Search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
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
