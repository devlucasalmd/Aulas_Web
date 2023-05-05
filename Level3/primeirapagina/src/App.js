import * as React from "react"
import * as ReactDOM from "react-dom"


function App() {
  const name = "Lucas" // Normalmente vem de algum lugar (Banco de Dados)
  const newName = name.toUpperCase()


  function sum(a, b){
    var a,b;
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">  
        <p>Olá Mundo</p> // Precisa estar dentro de um Fragmento
        <p>Olá {name}</p>
        <p>Soma: {sum(2,2)}</p>
        <img src={url} alt="IMagem"/> //url dinamica
    </div>
  );
}

export default App;
