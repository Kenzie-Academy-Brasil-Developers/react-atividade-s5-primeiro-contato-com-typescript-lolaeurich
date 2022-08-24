//Esse componente irá receber as props "name, age, hobby" e retornar um Card com essas informações renderizadas.


export interface User {
    name: string
    age: number
    hobby: string
  }

  //Agora é com você! Faça a interface que será usada no componente, "name" e o "hobby" podem ser tipados 
  //como string, já a "age" com o type number.
  
  const Card = ({ name, age, hobby }: User) => {
    return (
      <div>
        <div className="Ul">
          <p>Nome: {name}</p>
          <p>Idade: {age}</p>
          <p>Hobby: {hobby}</p>
        </div>
      </div>
    );
  };
  
  export default Card