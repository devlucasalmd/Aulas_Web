import React, { useState } from 'react'

function Form() {

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(`Usuario ${name} cadastrado com sucesso`)
    }

    const [name, setName] = useState()

    return (
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input 
                        type='text' 
                        id="name"
                        name="name"
                        placeholder='Digite seu nome' 
                        onChange={(e) => setName(e.target.value)}
                        />                    
                </div>
                <div>
                    <input type='submit' value='Cadastrar' />
                </div>
            </form>
        </div>
    )
}

export default Form