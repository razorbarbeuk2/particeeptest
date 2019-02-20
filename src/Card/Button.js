import React, { Component } from 'react';
import ButtonType from './ButtonType';
import './Card.style.scss';

export default class Button extends Component {

  buttonClass = () => {
    const { isLike } = this.props;
    return (isLike) ? 'card__button-likes' : 'card__button-dislikes';
  }

  render() {
    const{ count, onClick } = this.props;
    return (
        <ul className="card__button-container">
            <li>
              <div className={`card__button ${this.buttonClass()}`} onClick={onClick}>
                  <ButtonType {...this.props} />
              </div>
            </li>
            <li>
              <span className={`${this.buttonClass()}-counter`}>
                {count}
              </span>
            </li>
        </ul>
    )
  }
}
