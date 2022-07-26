import {GET_ADMIN, ADMIN_ERROR,GET_USERS, USERS_ERROR} from './types'
import axios from 'axios';



export const ADD_RECIPE ='ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export const addRecipe = ({ day, recipe, meal }) => ({
	 type: ADD_RECIPE,
    recipe,
    day,
    meal,
})

export const login=(email,password)=> async dispatch => {

    try{
        const res = await axios.get('http://localhost/project8/backend/login.php?email=%27+email+%27&password=%27+password');
        dispatch( {
            type: GET_ADMIN,
            payload: res.data
        })

    }
    catch(e){
        dispatch( {
            type: ADMIN_ERROR,
            payload: console.log(e),
        })
    }
}

export const getUsers = () => async dispatch => {

    try{
        const res = await axios.get('https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}')
        dispatch( {
            type: GET_USERS,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}



export const removeFromCalendar = ({ day, meal }) => ({
	type: REMOVE_FROM_CALENDAR,
    day,
    meal,
})



