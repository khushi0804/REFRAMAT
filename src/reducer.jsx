const reducer = (state, action) => {
    if (action.type === "HOME_UPDATE") {
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        para:action.payload.para,
      };
    }
  
    if (action.type === "ABOUT_UPDATE") {
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        para:action.payload.para,

      };
    }
    
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      Products: action.payload,
    };
  }
 if("GET_PARTNERS"){
    return {
        ...state,
        partners: action.payload,
    };
 }

 if("SET_LOADING"){
  return {
      ...state,
      loading: action.payload,
  };
}
 
    return state;
  };
  
  export default reducer;