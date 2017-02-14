import React from 'react';

import { Container } from './styles';

const FoodFinder = ({ foodList, dataSources, findFoodId, type }) => {
  console.log({ foodList, dataSources, findFoodId, type });
  return (
    <Container>
      <h1>Find: {findFoodId}</h1>
    </Container>
  );
};

export default FoodFinder;
