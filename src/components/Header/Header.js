import React, { Component } from "react";
import Select from "react-select";

export default class Header extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props !== nextProps) return true;
  };

  render() {
    const {
      changeFilter,
      optionFilter,
      optionNumber,
      selectedFilter,
      selectedNumber,
      changeNumber
    } = this.props;
    return (
      <header>
        <h1>Particeep Test</h1>
        <div className="select-container">
          <Select
            value={selectedNumber}
            onChange={changeNumber}
            options={optionNumber}
          />
          <Select
            value={selectedFilter}
            onChange={changeFilter}
            options={optionFilter}
            isMulti
          />
        </div>
      </header>
    );
  }
}
