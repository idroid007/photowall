import React from 'react';
import Photo from './Photo'
import {Link} from 'react-router-dom'
class Photowall extends React.Component{

    render(){
        return(<div>
            <Link className="btn" to="/addPhoto">Add Photo</Link>
            <div className="photowall">{this.props.items.map((item,index)=>{return <Photo key={index} onRemovePost={this.props.onRemovePost} item={item} />})}</div>
            </div> );
    }
}

export default Photowall;