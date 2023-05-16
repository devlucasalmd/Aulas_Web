import Botao from './layout/Botao';
import Form from './components/Form';
import { useState } from 'react';

function App(){
  const [variavel, functionParaMudarValorDaVariavel] = useState("Valor Inicial");
  
  const [logado, setLogado] = useState(false);

  const Logar = () => {
    setLogado(true);
  }

  const Deslogar = () => {
    setLogado(false);
  }


  return (
    <>
      <Form/>
      {
        logado ? <p> Logado </p> : <p>Deslogado</p>
      }

      {/* chamando o botao 2x e enviando os children como atributos  */}
      
      <Botao tarefa={Logar} classe="botao purple">Entrar</Botao>
      <Botao tarefa={Deslogar} classe="botao blue">Sair</Botao>
    </>
  );
}

export default App;
