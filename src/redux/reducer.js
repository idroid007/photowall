import Api from '../api' ;

const data = Api.getData();
const postReducer = function (state=data,action){
    console.log("in hooks"+state)
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


export default postReducer;