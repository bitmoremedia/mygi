import React from 'react'

import { Row, Col } from '../common/Grid'
import { Container, Heading } from './styled-components'

const Header = () =>
  <Container>
    <Row>
      <Col xs={12}>
        <Heading>MyGi Data Tool</Heading>
      </Col>
    </Row>
  </Container>

export default Header
