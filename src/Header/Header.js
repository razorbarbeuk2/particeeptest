import React, { Component } from 'react'
import Select from 'react-select';
import './Header.style.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default class Header extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => this.setState({ selectedOption });

  render() {
    const { selectedOption } = this.state;
    const { arrayFilter } = this.props;
    console.log('Array: ', arrayFilter);
    return (
      <header>
        <h1>Particeep Test</h1>
        <div className='select-container' >
          <Select value={selectedOption} onChange={this.handleChange} options={options} isMulti />
        </div>
      </header>
    )
  }
}
