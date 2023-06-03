import React, { useState } from 'react'


function Root() {

    const [login, setLogin] = useState(1);

    // if(login == 1){
    //     return {Error: "Faça o Login para poder acessar"};        
    // }

    return (
        <>
            <div class='container'>
                <div>
                    <h1>Pagina Inicial</h1>
                    <h3>Faça o Login para poder acessar suas paginas</h3>
                    <button>Login</button>
                    
                </div>
                <br/>
                <div className='sobre'>
                    <h1>Sobre</h1>
                </div>
                <br/>
                <div className='anotacoes'>
                    <h1>Anotações</h1>
                </div>
                <br/>
                <div className='blog'>
                    <h1>Blog</h1>
                </div>
            </div>
        </>
    )
}

export default Root