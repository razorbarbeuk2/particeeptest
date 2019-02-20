import React, { Component } from 'react';
import Header from './Header/Header';
import Card from './Card/Card';
import { movies$ as Data } from './Data'
import './App.scss';

const Loading = () => {
  return (
    <div>
      <h1>LOADING...</h1>
    </div>
  )
}

export default class App extends Component {
  state = {
    loading: true,
    elements: []
  }

  componentDidMount() {
    Data.then(t => this.setState({ elements: t }, () => this.setState({ loading: false })));
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if(this.state !== nextState)
      return true;
  }

  initElement = () => {
    const { elements, loading } = this.state;
    return (loading) ? <Loading /> : <Header items={elements} />;
  }

  deleteItem = index => {
    const { elements } = this.state;
    elements.splice(1, index);
    this.setState({ elements, })
  }

  render() {
    const { elements } = this.state;
    return (
      <div className="App">
        {this.initElement()}
        <div className="wrapper" >
          {elements.map((t, index) => <Card item={t} key={index} deleteItem={() => this.deleteItem(index)} />)}
        </div>
      </div>
    );
  }
}