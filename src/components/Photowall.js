import React from 'react';
import Photo from './Photo'
class Photowall extends React.Component{

    render(){
        return(
            <div className="photowall">{this.props.items.map((item,index)=>{return <Photo key={index} item={item} />})}</div>
        );
    }
}

export default Photowall;