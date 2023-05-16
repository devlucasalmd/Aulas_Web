import "./Botao.css"

function Botao({tarefa, classe, children}) {
  return (
    <button onClick={tarefa} className={classe}>
      {/* para poder aparecer o texto é necessário habilitar o props.children */}
      {children}
    </button>
  )
}

export default Botao