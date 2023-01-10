import React from 'react'
import "./Steps.css"
import { AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

export const Steps = ({currentStep}) => {
  return (
    <div className='steps'>
        <div className="step active">
            <AiOutlineUser/>
            <p>Identificação</p>
        </div>
        <div className={`step ${currentStep >= 1 ?"active": ""}`}>{/*se o usuairo clicou em avançar 
        e mudar para a proxima parte do formulario irá mostrar essa div*/ }
            <AiOutlineStar/>
            <p>Avaliação</p>
        </div>
        <div className={`step ${currentStep >= 2 ?"active": ""}`}>
            <FiSend/>
            <p>Envio</p>
        </div>
       
    </div>
  )
}