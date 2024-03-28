import { Component } from "react";
import "./monster-card.styles.css";
class Monster extends Component {
  render() {
    const { name, email, id } = this.props.monster;

    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`${name}`}
        />
        <h2 className="monster-name">{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Monster;
