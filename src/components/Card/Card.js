import React, { Component } from "react";
import Button from "./Button";
import ButtonType from "./ButtonType";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: props.item.likes,
      dislikes: props.item.dislikes
    };
  }

  typeCategory = () => {
    const { item } = this.props;
    switch (item.category) {
      case "Comedy":
        return "card__category-comedy";
      case "Animation":
        return "card__category-animation";
      case "Thriller":
        return "card__category-thriller";
      case "Drame":
        return "card__category-drame";
      default:
        return "card__category-none";
    }
  };

  handlelikes = () => {
    const { likes } = this.state;
    this.setState({ likes: likes + 1 });
  };

  handledislikes = () => {
    const { dislikes } = this.state;
    this.setState({ dislikes: dislikes + 1 });
  };

  render() {
    const { item, deleteItem } = this.props;
    const { likes, dislikes } = this.state;
    return (
      <div className="card">
        <div className="card__content">
          <h2 className="card__title">{item.title}</h2>
          <p className={`card__category ${this.typeCategory()}`}>
            {item.category}
          </p>
          <div className="card__button-content">
            <Button isLike count={likes} onClick={this.handlelikes} />
            <Button isDislike count={dislikes} onClick={this.handledislikes} />
          </div>
          <div className="card__button-trash" onClick={deleteItem}>
            <ButtonType trash />
          </div>
        </div>
      </div>
    );
  }
}
