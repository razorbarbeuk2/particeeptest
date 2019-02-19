import React, { Component } from 'react';
import Header from './Header/Header';
import { movies$ as Data } from './Data'
import './App.scss';

const Wrapper = props => {
  return (
    <div>
  
    </div>
  );
}

class App extends Component {
  state = {
    filter: null
  }

  componentDidMount() {
    Data.then(t => this.insertDataFilter(t)).then(d => this.setState({ filter: d }))
  }

  insertDataFilter = (t) => {
    let array = [...new Set(t.map(d => d.category))].map(category => {
      return { value: category.toLowerCase(), label: category }
    });
    return array;
  }

  render() {
    const { filter } = this.state;
    
    

    return (
      <div className="App">

        <Header arrayFilter={filter} />
        <Wrapper />
      </div>
    );
  }
}

export default App;
