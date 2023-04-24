import React from "react";
import { HeaderTrainerContainer } from "./style";
import { Col, Container, Row } from "react-bootstrap";

const HeaderTrainer = () => {
  return (
    <HeaderTrainerContainer fluid>
      <Container fluid="md">
        <Row>
          <Col>Прогресс:</Col>
          <Col xs="auto">100/100</Col>
        </Row>
      </Container>
    </HeaderTrainerContainer>
  );
};

export default HeaderTrainer;
