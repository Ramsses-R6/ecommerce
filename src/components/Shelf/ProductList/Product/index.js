import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaShippingFast } from 'react-icons/fa';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({ product, handleAddProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);

  let productPromoPrice;

  if (!!product.promoPrice) {
    const promoPrice = product.promoPrice;
    let formattedPromoPrice = formatPrice(promoPrice, product.currencyId);

    productPromoPrice = (
      <div className="promo">
        <b>
          {product.currencyFormat}
          {formattedPromoPrice}
        </b>
      </div>
    );
  }

  return (
    <div
      className="shelf-item"
      onClick={() => handleAddProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper"><FaShippingFast /></div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className={`val${!!product.promoPrice ? '--promo' : ''}`}>
          <b>{product.currencyFormat}{formattedPrice}</b>
        </div>
        {productPromoPrice}
      </div>
      <div className="shelf-item__buy-btn">Agregar al carrito</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
