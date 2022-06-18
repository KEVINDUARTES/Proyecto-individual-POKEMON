import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { getType, postPokemon } from "../store/actions/index.js";
import { Link } from "react-router-dom";
import "./PokemonCreate.css";

function validate(pokemon){
  let errors = {};
  if (!pokemon.name){//#13 si en mi estado local no hay ningun pokemon retorno lo de abajo
    errors.name = "Se requiere un nombre"
  } return errors
}

export default function PokemonCreate() {
  const dispatch = useDispatch();//#1
  const history = useHistory();//#14 lo redirijo a la ruta que le diga
  const types = useSelector((state) => state.types); // #9me traigo los estados de types lo dispacho con el useEffect#3

  const [errors,setErrors] = useState({});//#15 genero este estado local 

  const [pokemon, setPokemon] = useState({ //#2 me creo este estado al cual le voy a guardar esta info. el use efect se va a ejecutar cuando apreto el voton de crear pok
                                             //cuasno lo aprte me crea un pokemon con estas caracteristicas
    name: "", //#6 lo lleno con setpokemon
    types: [],// un array para guardar mas de un tipo
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {// #12 el useefect ejecuta un componente cuando este ya a sido completado y esta listo para despachar
    dispatch(getType());//despacho el getType 
  }, []);

  function handleSelect(e) {//#11traigo el evento de habdle select y le concateno lo nuevo
    setPokemon({
      ...pokemon,
      type: [...pokemon.type, e.target.value],
    });
  }


function onInputChange(e) {//#5 traigo el evento y actualizo el usestate. cada vez que escribo algo o elimino en el input se ejecuta esta funcion
  e.preventDefault();
  setPokemon({//con este setPokemon voy llenando los string de pokemons
    ...pokemon,
    [e.target.name]: e.target.value,
  });
  setErrors(
    validate({// #16 le pasa la funcion valide que yo ice a mi seterror
      ...pokemon,
      [e.target.name]: e.target.value,
    })
  );
}


function onSubmit(e) {// #8 toco el boton y se ejecuta esto.Traigo todos los evento de onsubmit y creo el pokemon
  e.preventDefault();
  dispatch(postPokemon(pokemon));
  alert("Personaje creado con exito");
  setPokemon({
    name: "",
    types: [],
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });
  history.push("/home");//aca le dice llevame al home a ver si esta
}

  return (//#3                                 #7
    <form className="form" onSubmit={onSubmit}>
      <h3 className="title"> ¡Crea tu pokemon!</h3>
      
        <label for="name"> Nombre: </label>
        <input
          onChange={onInputChange}// #4 el on change esta al pendiente de los cambios del input
          id="name"
          name="name"
          type="text"
          value={pokemon.name}
          required
          className="input"
        />{" "}
        {errors.name && <p className="error"> {errors.name}</p>}
     
     
        <label htmlFor="">Imagen: </label>
        <input
          onChange={onInputChange}
          name="image"
          type="text"
          value={pokemon.image}
          className="input"
        />{" "}
      
      
        {" "}
        <label htmlFor="">Vida: </label>
        <input
          onChange={onInputChange}
          name="life"
          type="number"
          value={pokemon.life}
          className="input"
        />{" "}
    
     
        <label htmlFor="">Fuerza: </label>
        <input
          onChange={onInputChange}
          name="attack"
          type="number"
          value={pokemon.attack}
          className="input"
        />{" "}
     
     
        <label htmlFor="">Defensa: </label>
        <input
          onChange={onInputChange}
          name="defense"
          type="number"
          value={pokemon.defense}
          className="input"
        />{" "}
     
     
        <label htmlFor="">Velocidad: </label>
        <input
          onChange={onInputChange}
          name="speed"
          type="number"
          value={pokemon.speed}
          className="input"
        />{" "}
      
     
        {" "}
        <label htmlFor="">Altura: </label>
        <input
          onChange={onInputChange}
          name="height"
          type="number"
          value={pokemon.height}
          className="input"
        />{" "}
     
     
        <label htmlFor="">Peso: </label>
        <input
          onChange={onInputChange}
          name="weight"
          type="number"
          value={pokemon.weight}
          className="input"
        />{" "}
      
      
        {" "}
        <p className="types-s">
        <select onChange={handleSelect}>
          {types.map((e) => (//#10hago un map de select
            <option  value={e.name}>{e.name}</option>
          ))}{" "}
        </select>
        <ul>
          <li>{pokemon.types.map((e) => e + " , ")}</li>
        </ul>
        </p>
        <Link to="/home">//un link a home por si queremos volver a tras
      <button type="submit" className="atras">Atrás</button></Link>//cada vez que apreto el boton submit se ejecuta el evento q tenga el fomulario
      <button type="submit" className="bottom">Crear</button>
    </form>
  );
}

