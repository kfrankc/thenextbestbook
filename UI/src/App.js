import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card'
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


class App extends React.Component{
  
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
    
    
  <div className="App" style={{marginTop:'0',height:'100vh',verticalAlign:'middle',backgroundImage:'url(IMG_1846.JPG)',backgroundSize:"100% 100%",width:"100%"}}>
  
    <link rel="stylesheet" 
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous"/>
    <div align="center" style={{backgroundImage:"url(bookmark.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"contain"}}>
    <Form>
      <div style={{paddingTop:'10%',paddingBottom:"25%",width:"15%",paddingRight:"16pt"}}>
        <Form.Group controlId="formBasicBook">
          <Form.Label style={{color:"white",fontFamily:"Luminari",fontSize:"18pt"}}>The Last Book I enjoyed was,</Form.Label>
          <Form.Control type="text" placeholder="Book Title" />
          <br />
          <Form.Text style={{color:"white",fontFamily:"Luminari",fontSize:"16pt"}} > Written by </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicAuthor">
          <Form.Control type="text" placeholder="Author Name" />
        </Form.Group>

        <Button variant="success" onClick={e => this.handleSubmit(e)}>Get my next book!</Button>
      </div>
    </Form>
    </div>
    <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="modal-90w"
          style={{width:"100%"}}
        >
          
          <Modal.Body style={{backgroundImage:"url(shelf.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>
          <GridList className={classes.gridList} cols={2.5} style={{marginLeft:"75px",marginBottom:"30px"}}>
        {this.tileData.map(tile => (
          <GridListTile style={{width:"200px",height:"250px",marginTop:"30px",marginRight:"100px"}} className={classes.gridTile} key={tile.img}>
            <div class="image-container" style={{backgroundColor:"rgba(0,0,0,1)",display:"block"}}>
            <img onMouseEnter={this.handleMouseClick} onMouseLeave={this.handleMouseLeave} src={tile.img} style={{
              border:"5",borderColor:"white",height:"250px",float:"left",marginRight:"30px",opacity:'0.85'}} alt={tile.title} />
            </div>
          </GridListTile>
        ))}
      </GridList>
          </Modal.Body>
        </Modal>
    </div>);}
}

export default App;
