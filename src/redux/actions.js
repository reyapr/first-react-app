import axios from 'axios';

export const incrementAction = () => ({
  type: 'INCREMENT'
})

export const decrementAction = () => ({
  type: 'DECREMENT'
})

export const changeUrl = url => ({
  type: 'CHANGE_URL',
  payload: url
})

export const setDataFromApiSuccess = data => ({
  type: 'SET_DATA_SUCCESS',
  payload: data
})

export const setDataFromApiStart = () => ({
  type: 'SET_DATA_START'
})

export const setDataFromApiFailed = () => ({
  type: 'SET_DATA_FAILED'
})

export const fetchSwapiAction = () => {
  return (dispatch) => {
    
    dispatch(setDataFromApiStart())
    
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      dispatch(setDataFromApiSuccess(res.data.results))
    })
    .catch(err => {
      dispatch(setDataFromApiFailed)
    })
  }
}
