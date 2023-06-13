import React, { useState } from 'react'
import { Zoom, Fade } from 'react-reveal'


function Main() {

    const [image, setImage] = useState("/img/fechado.png")
    const [show, setShow] = useState(true)
    const [showInfo, setShowInfo] = useState(false)
    const [text, setText] = useState(<> <p>Clique na Terra</p></>)

    new Image().src = "/img/aberto.png"
    new Image().src = "/img/crosta.png"
    new Image().src = "/img/manto.png"
    new Image().src = "/img/nucleo.png"

    const tagGeral = 
    <> 
        <p>Terra</p>
    </>

    const tagCrosta = 
    <> 
        <p>Crosta</p>
    </>

    const tagManto = 
    <> 
        <p>Manto</p>
    </>

    const tagNucleo = 
    <> 
        <p>Nucleo</p>
    </>
    function ChangeImage(newImage, newText){
        setShow(false)
        setShowInfo(false)

        setTimeout(() => {
            setImage(newImage)
            setText(newText)
            setShow(true)
            setShowInfo(true)
        }, 1000);
        
    }
 
    return (
        <>
            <div className=''>
                <div className=''>
                    <Fade>
                    <h1 className='title'><b>As Camadas do Planeta Terra</b></h1>
                    </Fade>
                </div>
                <div>
                    <Zoom when={show} apper={true}>
                        <img className='earth' onClick={() => ChangeImage("/img/aberto.png", tagGeral)} src={image}/>
                    </Zoom>
                </div>
                <br/>
                <Fade when={showInfo}>
                    <div>
                        <button className='crosta' onClick={() => ChangeImage("/img/crosta.png", tagCrosta)}> CROSTA </button>
                        <button className='manto' onClick={() => ChangeImage("/img/manto.png", tagManto)}> MANTO </button>
                        <button className='nucleo' onClick={() => ChangeImage("/img/nucleo.png", tagNucleo)}> NÚCLEO </button>                        
                    </div>
                </Fade>
                <br/>
                <div className='title'>
                    {text}
                </div>
            </div>
        </>
    )
}

export default Main