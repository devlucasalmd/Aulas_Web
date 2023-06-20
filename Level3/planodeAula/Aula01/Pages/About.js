import React from 'react'
import "../Styles/About.css"

function About() {
  return (
    <>
        <div className='page-about'>
            <div className="banner">            
                <img className='image' src="$.jpg"/>     
                <br/>
                <br/>   
                <h1 className='text-name'>Lucas Amaral de Almeida</h1>                               
            </div>
            <div className='text-sobre'>
                <br/>                
                <p>Olá O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</p>
                <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), por Cícero, escrito a 45AC. Este livro é um tratado na teoria da ética, muito popular durante a Renascença. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..." aparece de uma linha na secção 1.10.32. O pedaço mais habitual do Lorem Ipsum usado desde os anos 1500 é reproduzido abaixo para os interessados. As secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" do Cícero também estão reproduzidos na sua forma original, acompanhados pela sua tradução em Inglês, versões da tradução de 1914 por H. Rackham.</p>
                <br/>
            </div>
            <div class="row">
              <div class="card green">
                <h2>Monetização</h2>
                <p>Configure a monetização</p>                
              </div>
        
              <div class="card blue">
                <h2>Configurações</h2>
                <p>Configure o seu sistema</p>                
              </div>
        
              <div class="card red">
                <h2>Artigos</h2>
                <p>Crie e edite artigos</p>                
              </div>
            </div>
        </div>
    </>
  ) 
}

export default About