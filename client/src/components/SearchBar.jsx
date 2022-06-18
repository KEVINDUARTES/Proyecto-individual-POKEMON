import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../store/actions/index.js";//me importo la accion
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("")//estado inicial . todo lo que va tipeando el usuario lo guardo aca


  
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value);//cuando cambie el valor lo pongo en la constante name de arriba
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPoke(name))//dispacho el serchPoke de las actions
  }

  return (
    <div>
      <input
        className="search"
        type="text"
        value = {name}
        onChange= {(e) => handleInputChange(e)}// le manda el eventa al handleSubmit de arriba
        placeholder="Buscar pokemon..."
      />
      <button className ="boton" type="submit" onClick= {(e) => handleSubmit(e)}> Buscar </button> //le manda el evento al  handleSubmit de arriba
    </div>
  );
}
