import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    updateFilterCallback: undefined,
    currentFilter: ""
  }

  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} />
      <FilteredFruitList filter={props.currentFilter} />
    </div>
  )
}

export default FruitBasket;
