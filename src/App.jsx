//components
import{ GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi';
import { useState } from 'react'
import { UserForm } from './components/UserForm'
import { ReviewForm } from './components/ReviewForm'
import { Thanks } from './components/Thanks'
import './App.css'
//hooks
import { useForm } from './hooks/useForm'
import { Steps } from './components/Steps';

function App() {
  const formTemplate = {
    name:"",
    email:"",
    review:"",
    comment: "",
  }
  const [data, setData] = useState(formTemplate)
  const updateFieldHandler = (key, value) =>{
    setData((prev)=>{
      return {...prev, [key]: value};
    });
  };

  
  
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
     <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, 
     <Thanks data={data} updateFieldHandler={updateFieldHandler}/>
  ]//array dos componentes do formulario que irão ser mostrados
  const { currentStep, currenComponent, changeStep, islastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className='app'>
      <div className='header'>
        <h2>Deixe sua Avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulario 
          abaixo para avaliar o produto
        </p>
      
      </div>
      <div className='form-container'>
        <Steps currentStep={currentStep}/>{/*mostra em que parte do formulario está (Userform
         ReviewForm, Thanks) */ }
        <form onSubmit={(e)=>changeStep(currentStep+1,e)}>
          <div className="input-cintainer">{currenComponent}</div>
          <div className="actions">
            {!isFirstStep && (<button type='button'onClick={()=>changeStep(currentStep -1)}>
              <GrFormPrevious/>
              <span>Voltar</span></button>/* verifica se está no primeiro indice, se for o botão não aparece */
              )}
            
            {!islastStep ? (<button type='submit'><span>Avançar</span><GrFormNext/></button>)
            :(<button type='button'><span>Enviar</span><FiSend/></button>)}{/* logica que muda o btn depois que o indice for 
            maior ou igual ao array de componentes */ }
          </div>

        </form>
      </div>

    </div>
 
  )
}

export default App
