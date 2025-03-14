import React, { useState, useEffect } from 'react';

const EjemplosCartas = () => {
    const url = 'https://fakestorebackend.onrender.com/productos/listar';
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState(null);

    const obtenerDatosBD = async () => {
        try {
            const respuesta = await fetch(url); // Hace la solicitud a la API
            if (!respuesta.ok) {
                throw new Error("Error al obtener los datos"); // Maneja errores de la respuesta
            }
            console.log(respuesta)
            const datosJson = await respuesta.json(); // Convierte la respuesta a JSON
            setDatos(datosJson); // Almacena los datos en el estado
        } catch (error) {
            setError(error.message); // Almacena el error en el estado
        }
    };

    useEffect(() => {
        obtenerDatosBD();
    }, []);

    return (
        <section>
           {error ? (
                <p>Error: {error}</p>
            ) : datos.length > 0 ? (
                <div className='layoutRow'>
                    {datos.map((producto, index) => (

                    <div className='cardLandingPage'>
                    <div className='fondoAzul'>
                    <h2>{producto.nombre}</h2>
                    </div>
                    <img src={producto.imgRuta} alt="Descripción de la imagen" className="header-image"/>
                    <div className='fondoAzul'>
                    <p>{producto.descripcion}</p>
                    <p>{producto.tipoMoneda+producto.precio}</p>
                    </div>
                    </div>

                    
                    ))}
                    
                </div>
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </section>
    );
};

export default EjemplosCartas;