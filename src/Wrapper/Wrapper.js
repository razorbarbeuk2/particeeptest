import React from 'react';
import Card from '../Card/Card';
import './Wrapper.style.scss';

const Wrapper = props => {
  const { items } = props;
  return (
    <div className="wrapper" >
      {items.map((t, index) => <Card item={t} key={index} />)}
    </div>
  );
}

export default Wrapper;
