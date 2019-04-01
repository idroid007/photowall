import React from 'react'
import Title from './components/Title'
import './styles/style.css'
import Photowall from './components/Photowall'

import {Route} from 'react-router-dom'
import AddPhoto from './components/AddPhoto'


class Main extends React.Component
{
       
   render(){
           
    
       return(<div>

          <Route exact path="/" render={()=>(
                  <div>
                  <Title title={'Photowall'}/>
                
                   <Photowall  {...this.props} />
                  </div>
          )}/>
          <Route  path="/addPhoto" render={({history})=>(
                  <div>
                 <AddPhoto onAddPost={(post)=>{
                         console.log(post)
                              this.props.addPhoto(post);
                            history.push("/");
                 }}/>
                  </div>
          )}/>
               
               </div>
       );
   }
}

export default Main;