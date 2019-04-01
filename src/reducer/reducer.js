import Api from '../api' ;

const data = Api.getData();
const postReducer = function posts(state=data,action){

    return state;
}

export default postReducer;