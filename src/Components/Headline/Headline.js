import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import './Headline.css'

function Headline() {
  return (
   <Container className='d-flex flex-column align-items-center'>
    <Row className='mt-4 mb-4'>
        <div className='headlineDiv'>
            <h1 className='text-center'><mark>HEADLINE que vai fazer</mark> seu cliente querer ler o restante da sua página!</h1>
        </div>
    </Row>
    <Row className='mt-2 mb-2' >
        <div className='secondLineDiv'>
            <p className='text-center'>
                Aqui vai um texto secondário para manter a atenção na página. Seria o segundo texto mais importante dessa
                seção, lembrando que temos apenas 5s para capturar a atenção do visitante.
            </p>
        </div>
    </Row>
    <Row  className='mt-2 mb-2'>
        <Button className='btn-lg' style={{width: '500px',height: '70px'}}>Garantir meu curso agora!</Button>
    </Row>
   </Container>
  )
}

export default Headline
