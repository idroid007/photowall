
export function removePhoto(index){
   
    return {
        type:'REMOVE_POST',
        index:index
    }
}

export function addPhoto(post){
 console.log("in actions addPhoto"+post);
 return {
     type:'ADD_POST',
     post
 }
}