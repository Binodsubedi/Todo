import { combineReducers } from "redux";


const TodoReducer = (state=[], action)=>{
    switch(action.type){
        case 'Fetch_Todos':
            return action.payload;
            break;
        
        default:
            return state;
    }
}

export default combineReducers({

    todos: TodoReducer,

})