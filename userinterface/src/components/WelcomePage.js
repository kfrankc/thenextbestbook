import React from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';
import {Link,Route} from 'react-router-dom'


class WelcomePage extends React.Component{
  
  constructor(props, context) {
    super(props, context);
  }
  
  /*state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect1 = () => {
    if (this.state.redirect) {
      return <Redirect to='/recommendations' />
    }
  }

  renderRedirect2 = () => {
    if (this.state.redirect) {
      return <Redirect to='/virtualLib' />
    }
  }*/


  render(){

  return (
  <div className="App" style={{marginTop:'0',height:'100vh',verticalAlign:'middle',backgroundImage:'url(images/books.jpg)',backgroundSize:"cover",width:"100%"}}>
    <link rel="stylesheet" 
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous"/>
    <div style={{marginTop:'25vh',paddingTop:'5%',paddingBottom:'5%',marginLeft:'50vh', width:'80vh',backgroundColor:'rgba(0,0,0,0.8)',position:'fixed'}}>
        <div style={{color:'white',fontSize:'21pt',fontFamily:"Luminari"}}>
            Let's find your next book! <br />
        </div>
        <div style={{color:'white',fontSize:'14pt',paddingTop:"25px",fontFamily:"Luminari"}}>
            Click on a button that best suits how you would like to find your book
        </div>
        <div style={{paddingTop:"50px"}}>
           
            <Button variant="success" style={{marginRight:'50px',fontFamily:"Luminari"}} onClick={this.setRedirect}><Link style={{color:"white"}} to="/recommendations">Get recommendations</Link></Button>
            <Button variant="success" style={{fontFamily:"Luminari"}} onClick={this.setRedirect}><Link style={{color:"white"}} to="/virtualLib">Visit a virtual Library</Link></Button>
            
        </div>
    </div>
    </div>);}
}

export default WelcomePage;
