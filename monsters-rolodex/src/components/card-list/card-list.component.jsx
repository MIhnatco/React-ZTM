import { Component } from "react";
import Monster from "../monster-card/monster-card.component";

import "./card-list.styles.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {/*Displaying monsters*/}
        {monsters.map((monster) => {
          /*Individual monster component */
          return <Monster monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
