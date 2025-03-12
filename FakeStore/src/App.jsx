import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import '../less/main.less'
import Header from './components/Header'


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
       
        <Header text={"FakeStore"}/>
    
      </body>
      </html>
    </>
  )
}

export default App
