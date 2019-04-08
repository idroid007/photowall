import React from 'react';
import Photo from './Photo'
import {Link} from 'react-router-dom'
class Photowall extends React.Component{

    render(){
        return(<div>
            <Link className="btn" to="/addPhoto">Add Photo</Link>
            <div className="photowall">{this.props.posts.map((item,index)=>{return <Photo key={index} {...this.props} item={item} />})}</div>
            </div> );
    }
}

export default Photowall;