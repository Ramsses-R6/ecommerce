import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSort } from '../../../services/sort/actions';
import Selectbox from '../../Selectbox';

const sortBy = [
  { value: '', label: 'Seleccionar' },
  { value: 'lowestprice', label: 'Mas bajo al mas alto' },
  { value: 'highestprice', label: 'Mas alto al mas bajo' }
];

const Sort = ({ updateSort, sort }) => (
  <div className="sort">
    Ordenar por
    <Selectbox options={sortBy} handleOnChange={value => updateSort(value)} />
  </div>
);

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
