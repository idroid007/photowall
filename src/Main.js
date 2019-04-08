import React from 'react'
import Title from './components/Title'
import './styles/style.css'
import Photowall from './components/Photowall'
import Single from './components/Single'
import {Route} from 'react-router-dom'
import AddPhoto from './components/AddPhoto'


class Main extends React.Component
{
       
   render(){
           
    
       return(<div>

          <Route exact path="/" render={(params)=>(
                  <div>
                  <Title title={'Photowall'}/>
                
                   <Photowall  {...this.props} {...params}/>
                  </div>
          )}/>
          <Route  path="/addPhoto" render={({history})=>(
                  <div>
                 <AddPhoto onAddPost={(post)=>{
                        
                              this.props.addPhoto(post);
                            history.push("/");
                 }}/>
                  </div>
          )}/>
          <Route path={`/single/:id`} render={(params)=>(
                  
                <Single {...this.props} {...params} />
                
          )}/>
               
               </div>
       );
   }
}

export default Main;