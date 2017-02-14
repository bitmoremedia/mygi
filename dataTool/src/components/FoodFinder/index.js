import React from 'react';

import { Container } from './styles';

const FoodFinder = ({ foodList, dataSources, findFoodId }) => {
  console.log({ foodList, dataSources, findFoodId });
  return (
    <Container>
      <h1>Find: {findFoodId}</h1>
    </Container>
  );
};

export default FoodFinder;
