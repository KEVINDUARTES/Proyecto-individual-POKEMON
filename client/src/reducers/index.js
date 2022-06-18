const initialState = {
  types: [],
  pokemons: [],
  type: "",
  order: "",
  team: [],
};

const rootReducer = (state = initialState, action) => {//le paso las action a state
  switch (action.type) {
    case "GET_TYPE":
      return {
        ...state,//una copia del estado
        types: action.payload,//le concateno el nuevo payload
      };
    case "GET_POKEMONS"://una copia de getpokemons que viene de las accion
      return {
        ...state,
        pokemons: action.payload,
      };
    case "GET_NAME":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "FILTER":
      return {
        ...state,
       pokemons: action.payload,
     };
     // case "FILTER_BY_TYPE":
     // const allPokemons = state.allPokemons;
     // const typeFiltered =
    //    action.payload === "type"   //recibe las accion payload de accion
     //     ? allPokemons
    //      : allPokemons.filter((e) => e.types.includes(action.payload));
    //  return {
 //     ...state,
 //    pokemons: typeFiltered,
  //  };
// case "FILTER_CREATED":
//      const createdFilter =     esta constante tiene la data que querio filtrar
//      action.payload === "Creados"
//        ? state.allPokemons.filter((e) => e.id.length > 2)
//        : state.allPokemons.filter((e) => e.id <= 40);
 //   return {
 //     ...state,
//      pokemons:
 //        action.payload === "Todos" ? state.allPokemons : createdFilter,
 //    };
 //    case "FILTER_BY_ATTACK":
 //     let attackFilter = [...state.pokemons];
 //       attackFilter = attackFilter.sort((a, b) => {
   //       if (a.attack < b.attack) {
   //         return action.payload === "Mayor fuerza" ? 1 : -1;
   //       }
   //       if (a.attack > b.attack) {
  //          return action.payload === "Mayor fuerza" ? -1 : 1;
  //        }
  //        return 0;
  //      });
  //      return {
  //        ...state,
  //        pokemons:
 //         action.payload === "Fuerza" ? state.allPokemons : attackFilter
//     };
    case "BY_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "ORDER":
      return {
        ...state,
        order: action.payload,
      };
    case "ADD":
      if(state.team.length === 8) state.team.shift();//agrego un pokemon
      return {
        ...state,
        team: [...state.team, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
