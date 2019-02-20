import React, { Component } from 'react'
import Select from 'react-select';
// import { movies$ as Data } from './Data'

export default class Header extends Component {
  state = {
    filter: [],
    selectedOption: [],
  }

  componentDidMount = () => {
    const { items } = this.props;
    let filter = [...new Set(items.map(d => d.category))].map(category => {
      return { value: category.toLowerCase(), label: category }
    });
    return this.setState({ filter });
  }

  handleSelectedOption = (selectedOption) => this.setState({ selectedOption });

  render() {
    const { selectedOption, filter } = this.state;
    return (
      <header>
        <h1>Particeep Test</h1>
        <div className='select-container' >
          <Select value={selectedOption} onChange={this.handleSelectedOption} options={filter} isMulti />
        </div>
      </header>
    )
  }
}
