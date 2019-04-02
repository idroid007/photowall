import React,{Component} from 'react';
import Photo from './Photo';
import Comments from './Comments'
class Single extends Component{

    render(){
        const id=this.props.match.params.id;
        const post = this.props.posts[id];
        const comments = this.props.comments[id] || [];
        console.log(comments);
     return (
        <div className="single-photo">
     <Photo  {...this.props} item={post}/>
     <Comments  id={id} comments={comments} onAddComment={this.props.addComment}/>

     </div>
     )
    }
}

export default Single;