import React from 'react'
import Title from './components/Title'
import './styles/style.css'
import Photowall from './components/Photowall'
import Api from './api'
import {Route} from 'react-router-dom'
import AddPhoto from './components/AddPhoto'

class Main extends React.Component
{
   constructor(){

        super();
           this.state={posts:[]};
           this.removePost=this.removePost.bind(this);
           this.addPhoto=this.addPhoto.bind(this);
   }
   componentDidMount(){
           const data = Api.getData();
           console.log(data)
           this.setState({posts:data});
   }
    addPhoto(post){
            const posts = this.state.posts;
            posts.unshift(post)
            console.log(posts)
        this.setState({posts:posts})
    }
    removePost(post){
      this.setState({posts:this.state.posts.filter((x)=>{return post!==x})})
    }
   render(){
       
       return(<div>

          <Route exact path="/" render={()=>(
                  <div>
                  <Title title={'Photowall'}/>
               
                  <Photowall items={this.state.posts} onRemovePost={this.removePost} />
                  </div>
          )}/>
          <Route  path="/addPhoto" render={({history})=>(
                  <div>
                 <AddPhoto onAddPost={(post)=>{
                         this.addPhoto(post);
                            history.push("/");
                 }}/>
                  </div>
          )}/>
               
               </div>
       );
   }
}

export default Main;