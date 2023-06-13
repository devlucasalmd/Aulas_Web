import React from "react"
import Navegacao from "../components/Navegacao"
import Exibidor from "../components/Exibidor"
import ProdutosExemplos from "../datas/ProdutosExemplos"


    function Promocao() {
        ProdutosExemplos.map((produto, indice)=>{
            if (produto.promocao == true)
                return <Exibidor 
                    key={ indice }
                    produto={ produto }/>
                    }
                )
    }

export default Promocao;