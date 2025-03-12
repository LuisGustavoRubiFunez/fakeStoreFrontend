const Header=({text})=>{
    return(
        <header>
            
            <nav className="layoutRowLandingPageNav">
            
            <p>Caracteristicas</p>
            <p>Redes sociales</p>
            </nav>
         

            <section className="layoutRowLandingPage">
                <h1>{text}</h1>
                <img src="/shopping-bag.svg" alt="Descripción de la imagen" className="header-image"/>
            </section>
        </header>
    )
  }


export default Header