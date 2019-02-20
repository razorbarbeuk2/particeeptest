import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Card from './Card/Card';
import { movies$ as Data } from './Data';

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
    elements: [],
    filter: [],
    selectedOption: [],
    activePage: 1,
    elementPerPage: 2,
    nbrElement: 0,
  }

  componentDidMount() {
    Data.then(t => this.setState({ elements: t }))
      .then(() => this.nbrElement(this.state.elements))
      .then(() => this.initElementPerPage(this.state.elements))
      .then(() => this.mapFilter())
      .then(() => this.setState({ loading: false }))
  }

  mapFilter = () => {
    const { elements } = this.state;
    let filter = [...new Set(elements.map(d => d.category))].map(category => {
      return { value: category.toLowerCase(), label: category }
    });
    return this.setState({ filter, });
  }

  changeFilter = d => this.setState({ selectedOption: d }, () => {
    return new Promise((res, rej) => res(this.mapFilterItem())).then(t => this.initElementPerPage(t));
  })

  mapFilterItem = () => {
    const { elements ,selectedOption } = this.state;
    return (selectedOption.length) ? elements.filter(d => selectedOption.find(f => f.label === d.category)) : elements;
  }

  deleteItem = index => {
    const { elements } = this.state;
    elements.splice(index, 1);
    return this.setState({ elements }, 
      () => this.setState({ filter: this.mapFilter() })
    )
  }

  initElementPerPage = elements => {
    const { activePage, elementPerPage } = this.state;
    this.nbrElement(elements);
    const indexOfLastElement = activePage * elementPerPage;
    const indexOfFirstElement = indexOfLastElement - elementPerPage;
    const currentElement = elements.slice(indexOfFirstElement, indexOfLastElement);
    return this.setState({ currentElement, });
  }

  handlePageChange = page => this.setState({ activePage: page }, 
    () => new Promise((resolve, reject) => resolve(this.mapFilterItem()))
      .then(t => this.initElementPerPage(t))
  );

  nbrElement = elements => this.setState({ nbrElement: elements.length })

  render() {
    const { filter, loading, selectedOption, activePage, currentElement, elementPerPage, nbrElement } = this.state;

    if(loading){
      return (
        <Loading />
      )
    } else {
      return (
        <div className="App">
          <Header filter={filter} changeFilter={d => this.changeFilter(d)} options={selectedOption} />
          <div className="wrapper" >
            {currentElement.map((t, index) => <Card item={t} key={index} deleteItem={() => this.deleteItem(index)} />)}
          </div>
          <Footer activePage={activePage} nbrElement={nbrElement} handlePageChange={page => this.handlePageChange(page)} numberPerPage={elementPerPage} />
        </div>
      );
    }
  }
}