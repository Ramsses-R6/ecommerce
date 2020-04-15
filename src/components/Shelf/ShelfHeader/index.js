import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort';

const ShelfHeader = props => {
  const plural = props.productsLength > 1 ? 's' : '';
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} Producto{plural} encontrado{plural}.</span>
      </small>
      <Sort />
    </div>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
