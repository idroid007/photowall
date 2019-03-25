import React from 'react'
import Title from './Title'
import './styles/style.css'
import Photowall from './components/Photowall'

class Main extends React.Component
{

   render(){
       const data=[{img:'https://www.gettyimages.in/gi-resources/images/Embed/new/embed2.jpg',caption:'Small kitty'},{img:'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',caption:'cuty animal'},{img:'http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg',caption:'eagle eye'}];
       return(<div>

       
               <Title title={'Photowall'}/>
               <Photowall items={data} />
               </div>
       );
   }
}

export default Main;