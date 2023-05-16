import * as React from "react"
import * as ReactDOM from "react-dom"
import HelloWorld from "./components/HelloWorld" //importando o componente
import Soma from "./components/Soma"
import Exemplos from "./components/Exemplos";

function App() {

  return (
    <>
        <HelloWorld/>
        <Soma a={2} b={2}/>
        <Exemplos/>
    </>
  );
}

export default App;
