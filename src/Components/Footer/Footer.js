import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='container-fluid footer d-flex flex-column align-items-center'>
      <div className="d-flex justify-content-center">
            <div className="col p-5">
                <h4>#Links úteis</h4>
                <h6 className=''>Link 1</h6>
                <h6>Link 2</h6>
                <h6>Link 3</h6>
            </div>
            <div className="col p-5">
                <h4>#Links úteis</h4>
                <h6>Link 1</h6>
                <h6>Link 2</h6>
                <h6>Link 3</h6>
            </div>
            <div className="col p-5">
                <h4>#Links úteis</h4>
                <h6>Link 1</h6>
                <h6>Link 2</h6>
                <h6>Link 3</h6>
            </div>

      </div>
      <div className="row">
            <h1>
                MeuSite.com.br - Todos os direitos reservados!
            </h1>
        </div>
    </footer>
  )
}
 
export default Footer