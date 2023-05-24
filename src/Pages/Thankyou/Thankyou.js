import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Thankyou() {
  return (
    <Container style={{ padding: "50px 200px" }} fluid>
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <h1 style={{ fontSize: "70px", color: "#207868", margin: "30px" }}>
            Parabéns por sua decisão
          </h1>
          <h6 style={{ fontSize: "22px", textAlign: "center", margin: "15px" }}>
            Um <mark>email foi enviado</mark> para sua caixa de entrada com a
            confirmação de seu interesse, juntamente com um link para baixar{" "}
            <mark>seu ebook grátis!</mark>
          </h6>
          <img
            src="/imgs/icon-email.png"
            alt="Email"
            style={{ width: "130px", textAlign: "center", margin: "20px" }}
          />
          <h6 style={{ fontSize: "22px", textAlign: "center", margin: "15px" }}>
            Cheque sua <mark>caixa de emails</mark> para receber seu ebook!
          </h6>
          <h6
            style={{
              fontSize: "22px",
              textAlign: "center",
              color: "red",
              margin: "15px",
            }}>
            Adicione nosso email conatto@meusite.com.br em sua lista de contatos
            para garantir que você receba todas as nossas comunicações!
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Thankyou;
