import React from 'react'
import Navegacao from '../components/Navegacao'
import Exibidor from '../components/Exibidor'
import ProdutosExemplos from '../datas/ProdutosExemplos'
import { useParams } from "react-router-dom"


function Produto() {
  
  const { codigo } = useParams()

  return(
    <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Inicio </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>
        <Exibidor produto = {ProdutosExemplos.find((produto) => produto.codigo == codigo)}/>
    </>

  )
}

export default Produto