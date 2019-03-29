import React from 'react'
import Title from './Title'
class AddPhoto extends React.Component{
    render(){
        return (<div>
            <Title title={'Add new photo to album'}/>

           <form onSubmit={(e)=>{
              e.preventDefault();
              const link = e.target.elements.src.value;
              const desc = e.target.elements.description.value;
              const post = { img:link,caption:desc}
              console.log(post)
              this.props.onAddPost(post);
           }}>
               <input type="text" name="src" placeholder="link/src"/>
               <input type="text" name="description" placeholder="description"/>
              <button>post</button>
           </form>
            
            </div> 
            )
    }
}
export default AddPhoto;