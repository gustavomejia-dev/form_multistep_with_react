import { useState } from "react";
export function useForm(steps){
   const [currentStep, setCurretStep] = useState(0)//salva o state
   function changeStep(i, e) {
    if(e) e.preventDefault();//checa se o parametro(e) está default 
    if(i<0 || i >= steps.length) return/*se o btn for clicado e o i for menor que 0 ou i maior ou igual que o tamanho 
    da lista de components não faz nada*/
    setCurretStep(i)

   }
   return {
        currentStep,
        currenComponent: steps[currentStep],//objeto de componentes
        changeStep,
        islastStep: currentStep + 1  === steps.length ? true: false,// checa se está no ultimo elemento do array de componentes
        isFirstStep: currentStep === 0 ? true: false //verifica se está no primeiro indice do array
    }

}