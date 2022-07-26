import {GET_ADMIN, ADMIN_ERROR} from '../actions/types';

const initialState = {
    admin:'',
    loading:true,
    error:''
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_ADMIN:
            if(action.payload !== ''){
                return{...state,
                    admin:action.payload,
                    loading:false,}
            }else{
                return{
                    ...state,
                    error:'Username/ email or password is invalid',
                    loading:false,
                }
            }
        default: return state
    }

}

// const loginReducer=(state={error:''},action)=>{
//     switch(action.type){

//         case "login":
//             const loadInfo = async () => {
//                 const res = await axios.get('http://localhost/Redux-Project/project8/backend/login.php?email=%27+action.email+%27&password=%27+action.password);
//                 sessionStorage.clear()
//                 sessionStorage.setItem("user_info", res.data);
//                 console.log(res.data);
//                 let user_info= sessionStorage.getItem("user_info");

//                 if(user_info != ''){
//                     window.location.href = "/Dashboard";
//                 }else{
//                     return {...state, error: 'Username/ email or password is invalid'}
//                 }
//             }
//             loadInfo();
//         default:
//             return state;
//     }

// }
// export default loginReducer;