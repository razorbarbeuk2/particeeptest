import React, { Component } from 'react'
import Select from 'react-select';
// import { movies$ as Data } from './Data'

export default class Header extends Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    if(this.props !== nextProps)
      return true;
  }

  render() {
    const { filter, changeFilter, options } = this.props;
    return (
      <header>
        <h1>Particeep Test</h1>
        <div className='select-container' >
          <Select value={options} onChange={changeFilter} options={filter} isMulti />
        </div>
      </header>
    )
  }
}
