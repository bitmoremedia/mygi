import React from 'react';

import { Grid, Row, Col } from '../common/Grid';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>MyGi Data Tool</h1>            
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Header;
