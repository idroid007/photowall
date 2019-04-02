import React from 'react'
import {Link} from 'react-router-dom';
//import {removePhoto} from '../redux/actions/actions'
class Photo extends React.Component{

    render(){
      console.log(this.props.removePhoto)
        return (<figure className="photo">
       <Link to={`/single/${this.props.item.id}`}><img  src={this.props.item.img} alt={this.props.item.caption}/></Link> 
        <figcaption>{this.props.item.caption}</figcaption>
        <div className="button-container">
        <button onClick={()=>{
          //when we pass dispatch method
             this.props.removePhoto(this.props.item.id)
             this.props.history.push("/")
          // this.props.onRemovePost(removePhoto(this.props.item.id));
        }}>Remove</button>
        <Link to={`/single/${this.props.item.id}`}>
        <div>
          {this.props.comments[this.props.item.id] ? this.props.comments[this.props.item.id].length : 0}
          </div>
        </Link>
        </div>
         </figure>);
    }
}
export default Photo;