import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";   //usedispatch dispacha nuestra accion de redux y el use selector lee el reducer de redux
import {
  getPokemons,
  filterPokemonsByType,                    
  filterCreated,
  Sort,
  filterByAttack,
} from "../store/actions/index.js";//
import { Link } from "react-router-dom";
import CardPokemon from "./CardPokemon";
import Paginado from "./Paginado";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import "./Home.css";

function Home() 
  const dispatch = useDispatch(); // CON EL USE DISPATCH DESPACHO UNA FUNCION, me traigo la accion y la dispacho (store/actions/index.jss) #2
  const allPokemons = useSelector((state) => state.pokemons) // #1  me traigo el state de los pokemons( de redux,(initial state) )USE SELECTOR RECIBE UNA FUNCION DE INICIAL STATE(REDUX), Y ME TRAIGO LA FUNCION DE POKEMON DE REDUCER INITIAL STATE. ESTO ME TRAE TODOS LOS estados de  POKEMONES
  const [currentPage, setCurrentPage] = useState(1);//declaro la pagina actual y cual va a ser la nueva pagina actual. La pag actual va arrancar en 1
  const [pokemonsPerPage] = useState(12);//va a setear los pokemones por pagina. me va guardar por pagina 12 pokemons
  const indexOfLastPokemon = currentPage * pokemonsPerPage;//indice del ultimo pokemon. esto va a ser la pagina actual en la que estoy x la cantidad de pokemons por pagina que es 12. ej: estoy en la pagina 3 y hago 3x6
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;// esto da 0 en la primer pagina en la segunda pag da 6
  const currentPokemons = allPokemons.slice(//va a tener los pokemons de cada pagina actual. con el  use selector me traigo el estado pomenos
    indexOfFirstPokemon, //el slice agarra un arreglo y toma una parte de el dependioendo lo que le paso por parametros.
    indexOfLastPokemon// le digo toma el indice del primer pokemon y el indice del ultimo pokemon 
  );//todo esto es para indicarel la cantidad de pokemons que queiro por pagina

  const paginado = (pageNumber) => {//le paso un numero de la pagina y voy a setear la pagina en un numero de pagina 
    setCurrentPage(pageNumber);
  };

  useEffect(() => {//#3  CON EL USE EFECT EJECUTO UNA FUNCION CUANDO  EL CICLO DE VIDA DE MI COMPONENTE RECIEN COMIENZA
    dispatch(getPokemons());// con dispatch voy a despachar la accion getPokemons.(que me traje con usedipatch)
  }, [dispatch]);

  function handleFilterType(e) {
    dispatch(filterPokemonsByType(e.target.value));//dispacha la accion y le paso el evento de los values de abajo
  1

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleFilterAttack(e) {
    dispatch(filterByAttack(e.target.value));
  }

  function onSelectsChange(e) {
    dispatch(Sort(e.target.value));
  }

  return (
    <>
      <NavBar />
      <SearchBar className="search"/>
      <div className="home">
        <div>
          <select name="select" onChange={onSelectsChange} className="a-z">
            <option value="Filtro"> A-Z:</option>
            <option value="ASCENDENTE">Ascendente</option>
            <option value="DESCENDENTE">Descendente</option>
          </select>
          <select
            name="selects"
            onChange={handleFilterAttack}
            className="attack"
          >
            <option value="Fuerza"> Fuerza </option>
            <option value="Mayor fuerza">Mayor fuerza</option>
            <option value="Menor fuerza">Menor fuerza</option>
          </select>
          <select onChange={handleFilterType}>
            <option value="type"> Tipo </option>//estpy value van al accion
            <option value="normal"> Normal </option>
            <option value="flying"> Flying </option>
            <option value="poison"> Poison </option>
            <option value="ground"> Ground </option>
            <option value="bug"> Bug </option>
            <option value="fire"> Fire </option>
            <option value="water"> Water </option>
            <option value="grass"> Grass </option>
            <option value="electric"> Electric </option>
            <option value="fairy"> Fairy </option>
          </select>
          <select onChange={handleFilterCreated}>
            <option value="Todos"> Todos </option>
            <option value="Creados"> Creados </option>
            <option value="Existentes"> Existentes </option>
          </select>
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
          />
          {currentPokemons?.map((e) => {
              return (
                <fragment>
                  <Link to={"/home/" + e.id}>
                    <CardPokemon
                      name={e.name}
                      image={e.image}
                      types={e.types}
                    />
                  </Link>
                </fragment>
              );
            })} 
        </div>
      </div>
    </>
  );
}

export default Home;
