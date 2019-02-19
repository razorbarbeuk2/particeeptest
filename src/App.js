import React, { Component } from 'react';
import Header from './Header/Header';
import Wrapper from './Wrapper/Wrapper';
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

  initElement = () => {
    const { elements, loading } = this.state;
    return (loading) ? <Loading /> : <Header items={elements} />;
  }

  render() {
    const { elements } = this.state;
    return (
      <div className="App">
        {this.initElement()}
        <Wrapper items={elements} />
      </div>
    );
  }
}