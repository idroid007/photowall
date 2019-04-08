import Api from '../api' ;
//import Comments from '../components/Comments';
import {combineReducers} from 'redux';


const data = Api.getData();

function comments(state={},action){
    console.log(action.postId)
     switch (action.type){
         case 'ADD_COMMENT':{
             if(!state[action.postId]){
                return {...state,[action.postId]:[action.comment]};
             }else{
               return {...state,[action.postId]:[...state[action.postId],action.comment]}
             }
        
            
         }
         default :{
             return state;
         }
     }

}
function posts(state=data,action){
  
    switch (action.type){
        case 'REMOVE_POST':{
            const new_state = state.filter((item)=>(item.id!==action.index));
            console.log(new_state);
            return new_state;
            
        }case 'ADD_POST':{
             const new_state = state;
             console.log("in add post"+new_state.unshift(action.post))
            return  new_state;
        }
        
        default :{
            return state;
        }
    }
    
}

const rootReducer = combineReducers({posts,comments})
export default rootReducer;