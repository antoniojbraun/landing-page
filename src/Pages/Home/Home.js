import React from 'react'
import Benefits from '../../Components/Benefits/Benefits'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Headline from '../../Components/Headline/Headline'
import Testimonials from '../../Components/Testimonials/Testimonials'
import './Home.css'

function Home() {
  return (
    <div>
      <Header />
      <Headline />
      <Benefits />
      <Testimonials />
      <div className="container-fluid container-second-argument p-4 mt-3">
        <div className="container d-flex flex-column align-items-center">
            <h1 className='display-3 text-center fw-semibold p-4'>Aqui pode ir mais uma argumentação de venda contendo <span className='bg-warning'>mais dados ou valor</span> para o cliente.</h1>
            <h5 className='pb-4 text-center'>Aqui pode ir um outro texto secundário para acrescentar mais valor ainda para seu produto, gerando mais confiança em você, aumentando as chanves do seu cliente querer comprar seu produto.</h5>
            <button className='btn btn-primary mb-4'>Garantir minha vaga!</button>
        </div>
      </div>
     <div className="container-cta">
        <div className="backGround-1"></div>
        <div className="backGround-2"></div>
        <div className="divCardCta d-flex flex-column align-items-center">
            <h2 className='text-center'>
                <s>R$ 49,90</s> <mark>R$ 7,90</mark>
            </h2>
            <p className='text-center'>85% de desconto só HOJE!</p>
            <button className='btn btn-success btn-lg'>Comprar</button>
        </div>
     </div>
    <Footer />
    </div>

  )
}

export default Home
