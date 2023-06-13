import React from "react"
import Navegacao from "../components/Navegacao"
import Principal from "../components/Principal"
import ProdutosExemplos from "../datas/ProdutosExemplos"

export default function Vitrine() {
  return (
        <>
            <Navegacao titulo="VITRINE">
                <a href="/"> Início </a>
                <a href="/produto/"> Promoção </a>
                <a href="/carrinho"> Carrinho </a>
            </Navegacao>

            <Principal produtos={ProdutosExemplos}/>
        </>
    
    )
}
