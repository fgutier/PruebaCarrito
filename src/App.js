import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    {id: 1, nombre: 'LUZ NOCHE', precio: '79.90'},
    {id: 2, nombre: 'ADHERIBLE CANTERA', precio: '99.90'},
    {id: 3, nombre: 'SET PINTA FÁCIL', precio: '349.90'},
    {id: 4, nombre: 'PIZARRÓN ADHESIVO', precio: '135.00'},
    {id: 5, nombre: 'CUBRE SILLÓN (2 PLAZAS)', precio: '599.00'},
    {id: 6, nombre: 'CUBI HIELOS', precio: '69.90'},
    {id: 7, nombre: 'LONCHERA MAX', precio: '269.00'},
    {id: 8, nombre: 'CUCHARA POPOTE RED', precio: '19.90'},
    {id: 9, nombre: 'ZAPATERA EXTENSIBLE', precio: '299.00'},
    {id: 10, nombre: 'LONCHERA MAX', precio: '269.00'},
  ]);

  // State para un carrito de compras
  const [ carrito, agregarProducto  ] = useState([]);


  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header 
          titulo='Tienda Virtual'
        />

        <h1>Lista de Productos</h1>
        {productos.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                productos={productos}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}

        <Carrito 
            carrito={carrito}
            agregarProducto={agregarProducto}
        />

        <Footer 
          fecha={fecha}
        />
    </Fragment>
  );
}

export default App;
