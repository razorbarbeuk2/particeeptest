import React from 'react';
import Pagination from "react-js-pagination";

const Footer = props => {
  const { handlePageChange, activePage, numberPerPage, nbrElement } = props
  return (
    <div className="footer">
      <Pagination 
          activePage={activePage}
          itemsCountPerPage={numberPerPage}
          totalItemsCount={nbrElement}
          onChange={handlePageChange}
      />
    </div>
  )
}

export default Footer;
