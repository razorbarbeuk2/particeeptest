import React, { Component } from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading";
import { movies$ as Data } from "./Data";
import "./App.scss";

export default class App extends Component {
  state = {
    loading: true,
    elements: [],
    optionFilter: [],
    optionNumber: [
      { value: 4, label: "4" },
      { value: 8, label: "8" },
      { value: 12, label: "12" }
    ],
    selectedFilter: [],
    selectedNumber: [],
    activePage: 1,
    elementPerPage: 6,
    nbrElement: 0
  };

  componentDidMount() {
    Data.then(t => this.setState({ elements: t }))
      .then(() => this.nbrElement(this.state.elements))
      .then(() => this.mapFilter())
      .then(() => this.updatePage())
      .then(() => this.setState({ loading: false }));
  }

  //Mappage des filtres dynamique
  mapFilter = () => {
    const { elements } = this.state;
    let optionFilter = [...new Set(elements.map(d => d.category))].map(
      category => {
        return { value: category.toLowerCase(), label: category };
      }
    );
    return this.setState({ optionFilter });
  };

  //Mappage des filtres par rapport à l'object Element
  mapFilterItem = () => {
    const { elements, selectedFilter } = this.state;
    return selectedFilter.length
      ? elements.filter(d => selectedFilter.find(f => f.label === d.category))
      : elements;
  };

  //Mappage du nombre de card à afficher par rapport à l'object Element
  mapFilterNumber = () => {
    const { selectedNumber, elementPerPage } = this.state;
    return selectedNumber.value
      ? this.setState({ elementPerPage: selectedNumber.value })
      : elementPerPage;
  };

  //Delete Element
  deleteItem = id => {
    const { elements } = this.state;
    elements.splice(id - 1, 1);
    return this.setState({ elements }, () => new Promise((resolve, reject) => this.mapFilter())).then(this.updatePage());
  };

  //Initialisation du nombre d'element par page
  initElementPerPage = elements => {
    const { activePage, elementPerPage } = this.state;
    this.nbrElement(elements);
    const indexOfLastElement = activePage * elementPerPage;
    const indexOfFirstElement = indexOfLastElement - elementPerPage;
    const currentElement = elements.slice(indexOfFirstElement, indexOfLastElement);
    return this.setState({ currentElement });
  };

  //Selecteur Number
  changeNumber = option => this.setState({ selectedNumber: option }, () => this.updatePage());

  //Selecteur Filter
  changeFilter = option => this.setState({ selectedFilter: [...option] }, () => this.updatePage());

  //Changement de page
  handlePageChange = page => this.setState({ activePage: page }, () => this.updatePage());

  //Fonction générique pour update la page
  updatePage = () =>
    new Promise((resolve, reject) => this.mapFilterItem())
      .then(this.mapFilterNumber())
      .then(t => this.initElementPerPage(t));

  //Fonction générique pour calculer le nombre d'éléments
  nbrElement = elements => this.setState({ nbrElement: elements.length });

  render() {
    const {
      loading,
      optionFilter,
      optionNumber,
      selectedFilter,
      selectedNumber,
      activePage,
      currentElement,
      elementPerPage,
      nbrElement
    } = this.state;

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="App">
          <Header
            optionFilter={optionFilter}
            optionNumber={optionNumber}
            selectedFilter={selectedFilter}
            selectedNumber={selectedNumber}
            changeFilter={d => this.changeFilter(d)}
            changeNumber={d => this.changeNumber(d)}
          />
          <div className="wrapper">
            {currentElement.map((t, index) => (
              <Card
                item={t}
                key={index}
                deleteItem={() => this.deleteItem(t.id)}
              />
            ))}
          </div>
          <Footer
            activePage={activePage}
            nbrElement={nbrElement}
            handlePageChange={page => this.handlePageChange(page)}
            numberPerPage={elementPerPage}
          />
        </div>
      );
    }
  }
}
