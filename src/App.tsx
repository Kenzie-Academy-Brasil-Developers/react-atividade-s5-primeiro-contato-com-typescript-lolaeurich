import { SetStateAction, useEffect, useState } from "react"
import "./App.css"

//IMPORTANDO OS COMPONENTES:
import Card, { User } from "./components/Card/Card"
import Input from "./components/Input/Input"



//Por ser um formulário simples, iremos utilizar o useState aqui para pegar os dados do input. 
//Crie um useState para cada input.
//E não esqueça de criar um useState responsável por armazenar em um array os objetos com os dados do user.
function App() {

  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [hobby, setHobby] = useState<string>("")


  //Para o useState que armazenará os objetos em um array, iremos utilizar aqui no 
  //App.js a mesma interface do componente Card 
  const [users, setUsers] = useState<User[]>([])

  //Não esqueça de criar sua função de handleClick para tratar os dados antes de atualizar o state users. 
  const handleClick = (name: string, age: number, hobby: string) => {
    setUsers((arm) => {
      return [...arm, { name, age, hobby }]
    })
  }

  useEffect(() => {}, [name, age, hobby])

  return (
    <div className="App">
      <>
        <Input className="Input"
          label="Nome"
          placeholder="digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input className="Input"
          label="Age"
          type="number"
          placeholder="digite sua idade"
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <Input className="Input"
          label="Hobby"
          placeholder="digite seu Hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
        <button className="Button" onClick={() => handleClick(name, age, hobby)}>Enviar</button>

        <div className="DivDaDiv">
        {users?.map((elem) => {
          return (
            <Card
              key={elem.name}
              name={elem.name}
              age={elem.age}
              hobby={elem.hobby}
            />
          )
        })}
        </div>
      </>
    </div>
  );
}

export default App