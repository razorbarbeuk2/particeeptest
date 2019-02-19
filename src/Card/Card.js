import React, { Component } from 'react'
import './Card.style.scss';

const Button = props => {
  return (
    <ul className="card__button">
      <li className="card__button__likes"></li>
      <li className="card__button__likes-counter"></li>
    </ul>
  )
}

export default class Card extends Component {

  render() {
    const { item } = this.props;
    const categoryClass = classNames('card__category',{
      'card__category-comedy':item.category.value('Comedy'),
      
    })
    return (
        <div className="card">
          <div className="card__content">
              <h2 className="card__title">{item.title}</h2>
              <p className={'card__category' + this.typeCategory()}>{item.category}</p>
              <Button islike />
              <Button isdislike />
          </div>
        </div>
    )
  }
}