import React from 'react';
import {Route} from 'react-router-dom'
import MainApp from './MainApp'
import AppOne from './AppOne'
import AppTwo from './AppTwo'
class App extends React.Component{
render() {
    return (
        <div className="container" style={{width:"100%",height:"100vh",marginRight:"0px",marginLeft:"0px",marginTop:"0px",margingBottom:"0px",maxWidth:"none",paddingRight:"0px",paddingLeft:"0px"}}>
        <Route path="/" exact component ={MainApp} />
        <Route path="/recommendations" component={AppOne} />
        <Route path="/virtualLib" component={AppTwo} />
        </div>
    );
  }
}

export default App;