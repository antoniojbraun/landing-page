import React from 'react'
import './Testimonials.css'

function Testimonials() {
  return (
    <div className='container d-flex flex-column align-items-center'>
        <h2>O que falam por ai de nosso trabalho :) </h2>
        <div className="row mt-4 mb-4">
            <div className="col">
                <div className="card p-2 card-testimonials">
                    <img src="/imgs/img-avatar.png" className='w-25 align-self-center' alt="" /> 
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit temporibus reprehenderit harum, repellat eligendi recusandae dignissimos eum itaque laudantium totam, quos quis? A accusantium soluta cumque rerum culpa iure.</p>
                    
                </div>
            </div>
            <div className="col">
                <div className="card p-2 card-testimonials">
                    <img src="/imgs/img-avatar.png" className='w-25 align-self-center' alt="" /> 
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit temporibus reprehenderit harum, repellat eligendi recusandae dignissimos eum itaque laudantium totam, quos quis? A accusantium soluta cumque rerum culpa iure.</p>
                    
                </div>
            </div>
            <div className="col">
                <div className="card p-2 card-testimonials">
                    <img src="/imgs/img-avatar.png" className='w-25 align-self-center' alt="" /> 
                    <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit temporibus reprehenderit harum, repellat eligendi recusandae dignissimos eum itaque laudantium totam, quos quis? A accusantium soluta cumque rerum culpa iure.</p>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonials
