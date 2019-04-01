import React from 'react'
//import {removePhoto} from '../redux/actions/actions'
class Photo extends React.Component{

    render(){
        return (<figure className="photo">
       <img  src={this.props.item.img} alt={this.props.item.caption}/>
        <figcaption>{this.props.item.caption}</figcaption>
        <div className="button-container">
        <button onClick={()=>{
          //when we pass dispatch method
             this.props.removePhoto(this.props.item.id)
          // this.props.onRemovePost(removePhoto(this.props.item.id));
        }}>Remove</button>
        </div>
         </figure>);
    }
}
export default Photo;