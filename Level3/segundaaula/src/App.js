import Pessoas from './components/Pessoas';
import PessoasSemProps from './components/PessoasSemProps';
import SayMyName from './components/SayMyName';

function App(){
  const nome = "Maria"

  return (
    <>
      <SayMyName nome="Lucas"/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <br/>
      <Pessoas nome="Lucas" idade="20" profissao="Jogador"/>
      <br/>
      <Pessoas nome="Matheus" idade="25" profissao="Enfermeiro"/>
      <br/>
      <PessoasSemProps nome="João" idade="30" profissao="Lutador"/>
    </>
  );
}

export default App;
