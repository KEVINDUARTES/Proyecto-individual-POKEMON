import React from "react";
import "./Paginado.css"

export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {//declaro mi paginado. me trigo estas propiedades del componente home
  const pageNumbers = [];//un arreglo de numeros, 
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {//me va a redondear todos los pokemnos por los pokemons que quiero por paginas
    pageNumbers.push(i);   //seria todos los pokemons  42 / 12 pokemons por pagina, me da un numero redondo y
  }//ese resultado lo pusheo en mi arreglo

  return (
    <nav>
      <ul className='paginado' >
        {pageNumbers &&
          pageNumbers.map(number => {
             return <li className="number" key ='num'>
           <button className="btn" onClick={() => paginado(number)}>
             {number}
              </button>
            </li>
          })}
      </ul>
    </nav>
  );
}
//le paso la const paginado que declare en home y le paso los numero de paginas a este
