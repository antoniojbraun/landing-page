import React from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LeadPage() {
  // LeftSide
  const headLineCtaStyle = {
    fontSize: "50px",
    textAlign: "center",
    padding: "30px 0px",
    color: "#2C88D9",
    fontWeight: "700",
  };

  const checkedBoxIconStyle = {
    width: "25px",
    margin: "0px 5px",
  };

  const layoutTextCheckedBoxStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    verticalAlign: "middle",
    height: "30px",
    marginTop: "5px",
  };

  // RighSide
  const containerStyle = {
    backgroundColor: "#F2F5F7",
    padding: "100px",
    height: "100vh",
  };

  const cardStyle = {
    backgroundColor: "#CED8E0",
    padding: "40px",
  };

  const cardTitleStyle = {
    textAlign: "center",
    fontSize: "30px",
  };

  const cardTextStyle = {
    fontSize: "20px",
    fontWeight: "400",
  };

  const formCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputCardStyle = {
    width: "300px",
  };

  const cardTextBottom = {
    marginTop: "30px",
    fontSize: "18px",
    padding: "0px 30px",
    textAlign: "left",
  };

  const buttonSubmit = { backgroundColor: "#6557F5", alignSelf: "center" };
  return (
    <Container fluid style={containerStyle}>
      <Row>
        <Col>
          <h1 style={headLineCtaStyle}>
            Aprenda a fazer alguma coisa de um jeito simples e rápido!
          </h1>
          <h5 style={{ marginBottom: "30px", fontWeight: "700" }}>
            Ao ter acesso ao nosso ebook grátis, você irá aprender:
          </h5>
          <div style={layoutTextCheckedBoxStyle}>
            <Image
              src="/imgs/icon-checked-box.svg"
              style={checkedBoxIconStyle}
              rounded
            />
            <p>
              <strong>Alguma coisa muito top!</strong>
            </p>
          </div>
          <div style={layoutTextCheckedBoxStyle}>
            <Image
              src="/imgs/icon-checked-box.svg"
              style={checkedBoxIconStyle}
              rounded
            />
            <p>
              <strong>Outra coisa exclusiva!</strong>
            </p>
          </div>
          <div style={layoutTextCheckedBoxStyle}>
            <Image
              src="/imgs/icon-checked-box.svg"
              style={checkedBoxIconStyle}
              rounded
            />
            <p>
              <strong>Um conhecimento super secreto!</strong>
            </p>
          </div>
          <div style={layoutTextCheckedBoxStyle}>
            <Image
              src="/imgs/icon-checked-box.svg"
              style={checkedBoxIconStyle}
              rounded
            />
            <p>
              <strong>Um segredo que você só verá aqui!</strong>
            </p>
          </div>
        </Col>
        <Col>
          <Card style={cardStyle}>
            <Card.Title style={cardTitleStyle}>
              Receba seu e-book grátis!
            </Card.Title>
            <Card.Text style={cardTextStyle}>
              Preencha com seus dados abaixo para receber seu ebook
              instantaneamente!
            </Card.Text>
            <Form style={formCardStyle}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  style={inputCardStyle}
                  type="text"
                  placeholder="Digite seu Nome!"
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  style={inputCardStyle}
                  type="email"
                  placeholder="Digite seu Email!"
                />
              </Form.Group>
              <Button style={cardTextStyle}>Acessar Grátis!</Button>
            </Form>
            <Card.Text style={cardTextBottom}>
              Ao clicar em Receber grátis, você declara que concorda com nossos
              termos e serviços.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LeadPage;
