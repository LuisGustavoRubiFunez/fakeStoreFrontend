import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import '../less/main.less'
import Header from './components/Header'
import HeroPanel from './components/HeroPanel'
import Description from './components/Description'
import EjemplosCartas from './components/EjemplosCartas'
function App() {

  return (
    <>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FakeStore</title>
      </head>
      <body>
       
        <Header/>

        <HeroPanel/>

        <main>

        <Description/>

        <section className='subtitle'>
          <h2 id="productos">Visualización previa de productos</h2>
          <p>Datos recogidos desde la API</p>
        </section>

        <EjemplosCartas/>
       
        <section className="bentoLandingPage" id="bento">
            <div className='primeraFila'>
              <div className='itemLeft'>
               <div className='headBentoItem'>
                  <img src="/code.svg" alt="Descripción de la imagen" className='imgBento'/>
                  <h2>Repositorio</h2>
                </div>
                <div className='bodyBentoItem'>

                </div>
                <div className='footerBentoItem'>
                    <p>Visitar la página del repositorio en Github {'>'}</p>
                </div>
              </div>
              <div className='itemNothing'>
              <div className='headBentoItem'>
                  <img src="/arrow-right-circle.svg" alt="Descripción de la imagen" className='imgBento'/>
                  <h2>Entrar a Fake Store</h2>
                </div>
                <div className='bodyBentoItem'>

                </div>
                <div className='footerBentoItem'>
                    <p>Visitar la página de Fake Store {'>'}</p>
                </div>
              </div>
          </div>
          <div className='segundaFila'>
            <div  className='itemNothing'>
            <div className='headBentoItem'>
                  <img src="/briefcase.svg" alt="Descripción de la imagen" className='imgBento'/>
                  <h2>Mis proyectos</h2>
                </div>
                <div className='bodyBentoItem'>

                </div>
                <div className='footerBentoItem'>
                    <p>¡Visita mi portafolio para ver más proyectos! {'>'}</p>
                </div>
            </div>
            <div className='itemRight'>
            <div className='headBentoItem'>
                  <img src="/settings.svg" alt="Descripción de la imagen" className='imgBento'/>
                  <h2>Tecnologías utilizadas</h2>
                </div>
                <div className='bodyBentoItem'>
                 <div className='bodyBentoItemSingle'>
                  <p>React</p>
                  <img src="/monitor.svg" alt="Descripción de la imagen" className='imgBentoSingle'/>
                  </div>
                 <div className='bodyBentoItemSingle'>
                  <p>Express</p>
                  <img src="/server.svg" alt="Descripción de la imagen" className='imgBentoSingle'/>
                  </div>
                </div>
                <div className='footerBentoItem'>
                    
                </div>
            </div>
          </div>
         
        </section>
        
        </main>
       
    
      </body>
      </html>
    </>
  )
}

export default App
