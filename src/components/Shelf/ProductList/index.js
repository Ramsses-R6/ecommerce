import React from 'react';

import Product from './Product';
import NotResults from '../../NotResults';

const ProductList = ({ products, handleAddProduct }) => {
  if (!products.length) {
    return (
      <NotResults text='SIN RESULTADOS' />
    );
  }
  return products.map(p => {
    return <Product product={p} key={p.id} handleAddProduct={handleAddProduct} />;
  });
};

export default ProductList;
