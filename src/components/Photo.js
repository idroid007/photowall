import React from 'react'
class Photo extends React.Component{

    render(){
        return (<figure className="photo">
       <img  src={this.props.item.img} alt={this.props.item.caption}/>
        <figcaption>{this.props.item.caption}</figcaption>
        <div className="button-container">
        <button onClick={()=>{
          this.props.onRemovePost(this.props.item);
        }}>Remove</button>
        </div>
         </figure>);
    }
}
export default Photo;