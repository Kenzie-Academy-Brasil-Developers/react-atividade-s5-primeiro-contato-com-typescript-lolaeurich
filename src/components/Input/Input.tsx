
//Utilizando o conceito de herança que já conhecemos, iremos herdar as propriedades já existentes no elemento
//input do html. Para isso, iremos importar do react o InputHTMLAttributes, também utilizaremos o operador 
//Generics (<MeuTipo>) para a tipagem.

import { InputHTMLAttributes } from "react"


//label com ?, nesse caso, significa que é algo opcional, pode ou não ter.
//o placeholder, por sua vez, é obrigatório.
//o ...rest são o restante das propriedades relacionadas ao Input.
//o <HTMLInputElement> é o operador Generic citado acima.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  label?: string
}

//o retorno é uma div com o Input e a label, caso ela exista.
//abaixo, tipamos o INPUT.
const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <div>
      {label}
      <input type="text" placeholder={placeholder} {...rest} />
    </div>
  )
}

export default Input