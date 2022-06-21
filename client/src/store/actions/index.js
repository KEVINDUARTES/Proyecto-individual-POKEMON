import axios from "axios";//importo las axios


export function postPokemon(payload){//exporto a index reducer
return async function () {
  const response = await axios.post("/pokemons" , payload)//le hago un post a mi backend
  return response;
}
}

export function searchPoke(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("/pokemons?name=" + name) 
      return dispatch({
        type: "SEARCH_NAME",
        payload: json.data,
      });
    } catch {
      return alert("No se encontró el pokemon");
    }
  };
}


export function filterPokemonsByType(payload) {//este payload me llega del componente home que resive el value del input y van al reducer
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function Sort(order){
  return {
      type: "SORT",
      payload: order
  }
}
export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload
  };
}

export function filterByAttack(payload){
  return {
    type: "FILTER_BY_ATTACK",
    payload
  }
}

export function getPokemons() { // con el use effect de home despacho esto
  return async function (dispatch) {
    var json = await axios.get("/pokemons");//le paso la ruta del back que me trae todos los pokemons
    dispatch({
      type: "GET_POKEMONS",
      payload: json.data,//es lo que devulve la ruta
    });
  };
}


export function getDetail(id) {//filtro para que solo me traiga el id
  return async function (dispatch) {
    try{
        var json = await axios.get(`/pokemons/${id}`);//despacho esta ruta a pokmoncreate
    return dispatch({
      type: "GET_DETAILS",
      payload: json.data
    })
   
} catch(error) {
  console.log(error)
}
  }
}

export function getType() {
  return async function (dispatch) {
    var json = await axios.get("/types");
    return dispatch({
      type: "GET_TYPE",
      payload: json.data
    })
  }

}