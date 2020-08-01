const inititalState = {
  num: 0,
  data: [],
  url: 'https://swapi.dev/api/people/1/12',
  loading: false
}

const data = (state = {...inititalState}, action) => {
   switch(action.type){
     case "INCREMENT":
       return {
         ...state,
         num: state.num + 1
       }
      case "DECREMENT":
        return {
          ...state,
          num: state.num - 1
        }
      case "CHANGE_URL":
        return {
          ...state,
          url: action.payload
        }
      case "SET_DATA_START":
        return {
          ...state,
          loading: true
        }
      case "SET_DATA_SUCCESS":
        return {
          ...state,
          data: action.payload,
          loading: false
        }
      case "SET_DATA_FAILED":
        return {
          ...state,
          loading: false
        }
      default:
        return state;
   }
}

export default data;