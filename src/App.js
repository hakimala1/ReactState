import { Button } from 'react-bootstrap';
import './App.css';
import React from 'react';
import './Profile.css';

class App extends React.Component{

  state={  Person :{  fullName : "Hakim Ala Eddine",
                      bio : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                      imgSrc:"./profilimg.jpg", 
                      profession: "Technicien informatique"}, show : true, count:0}
  toggleshow=()=>{    this.setState({ show: ! this.state.show  })   }
  componentDidMount(){
    this.myInterval = setInterval(()=>{
      this.setState({count: this.state.count + 1})

    },1000)
  }
  render(){
    return(
      <div className="App">
     
      <Button variant="info" onClick={()=>this.toggleshow()}  >      {this.state.show ? 'hide'   :"show" }   </Button>
      <h2>count : {this.state.count}</h2>
      {this.state.show && 
       <div className='mise'>
            <div className='name'>
            <img className='image' src={this.state.Person.imgSrc} alt="img"/>
            <h1>FullName</h1>
            <h3>{this.state.Person.fullName}</h3>
            
            </div>
              <div className='bio'>
              <h1>BIO</h1>
              <p>{this.state.Person.bio}</p>
              </div>
                   <div className='pro'>
                   <h1>Profession</h1>
                   <h3>{this.state.Person.profession}</h3>
                   
                   </div>
            </div>
      }

    
 
      
      </div>
      

    )
  }

}

export default App;
