import React from 'react'
import Title from './components/Title'
import './styles/style.css'
import Photowall from './components/Photowall'
import Api from './api'
import {Route} from 'react-router-dom'
import AddPhoto from './components/AddPhoto'

class Main extends React.Component
{
  

   render(){
       console.log(this.props.posts)
       return(<div>

          <Route exact path="/" render={()=>(
                  <div>
                  <Title title={'Photowall'}/>
                
                   <Photowall items={this.props.posts} onRemovePost={this.removePost} />
                  </div>
          )}/>
          {/* <Route  path="/addPhoto" render={({history})=>(
                  <div>
                 <AddPhoto onAddPost={(post)=>{
                         this.addPhoto(post);
                            history.push("/");
                 }}/>
                  </div>
          )}/> */}
               
               </div>
       );
   }
}

export default Main;