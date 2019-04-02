import React from 'react'

class Comments extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
 e.preventDefault();
let value = e.target.elements.comment.value;
         
       this.props.onAddComment(value,this.props.id);
    }

render(){
    return(
        <div>
            {
               this.props.comments.map((item,index)=>(<p key={index}>{item}</p>))
            //   console.log(this.props)
            }
          <form onSubmit={this.handleSubmit}>
              <input type="text" name="comment" placeholder="Enter comment"/>
              <input type="submit" />
        </form>  
        </div>
    )
}
}
export default Comments