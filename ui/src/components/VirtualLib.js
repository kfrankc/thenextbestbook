import React from 'react';
import './App.css';


const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
},
gridList: {
    width: "100vw",
    height: 450,
},
icon: {
    color: 'rgba(255, 255, 255, 0.54)',
},
gridTile: {
    
}
});


class VirtualLib extends React.Component{
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  

  tileData = [
       {
        img: "https://images-na.ssl-images-amazon.com/images/I/41V1YAzDcGL._SX326_BO1,204,203,200_.jpg",
         title: 'Image',
        author: 'author',
      },
      {
        img: "https://hpmedia.bloomsbury.com/rep/s/9781408855904_309575.jpeg",
         title: 'Image',
        author: 'author',
      },
      {
        img: "https://hpmedia.bloomsbury.com/rep/s/9781408855904_309575.jpeg",
         title: 'Image',
        author: 'author',
      },
      {
        img: "https://hpmedia.bloomsbury.com/rep/s/9781408855904_309575.jpeg",
         title: 'Image',
        author: 'author',
      },
      {
        img: "https://images-na.ssl-images-amazon.com/images/I/41V1YAzDcGL._SX326_BO1,204,203,200_.jpg",
         title: 'Image',
        author: 'author',
      },
     ];
  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event){
    this.handleShow()
    console.log("submitted")
  }

  handleMouseClick(e){
    e.target.style.opacity = "1"
    e.target.style.border = "5"
}
  handleMouseLeave(e){
    e.target.style.opacity = "0.85"
    e.target.style.backgroundColor = "rgba(0,0,0,0.5)"
    e.target.style.border = "0"
}
  render(){
    const classes = useStyles();
  return (
    

  <div className="App" style={{marginTop:'0',height:'100vh',verticalAlign:'middle',backgroundImage:'url(./images/booktop.jpg)',backgroundSize:"100% 100%",width:"100%"}}>
  
    <link rel="stylesheet" 
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous"/>
     <div class='circle-container' style={{marginTop:"5vh",position:"absolute",marginLeft:"50vh"}} >
    	<a href='#' class='deg0'><div class="zoom"><img class="imgs" src='./images/scifi.jpg'/></div></a>
    	<a href='#' class='deg45'><div class="zoom"><img class="imgs" src='./images/romance.jpg'/></div></a>
    	<a href='#' class='deg135'><div class="zoom"><img class="imgs" src='./images/mystery.jpg'/></div></a>
    	<a href='#' class='deg180'><div class="zoom"><img class="imgs" src='./images/fiction.jpg'/></div></a>
    	<a href='#' class='deg225'><div class="zoom"><img class="imgs" src='./images/fantasy.jpeg'/></div></a>
    	<a href='#' class='deg315'><div class="zoom"><img class="imgs" src='./images/bio.jpg'/></div></a>
    </div>
    
    </div>);}
}

export default VirtualLib;
