import React from 'react';
import {Route} from 'react-router-dom'
import WelcomePage from './WelcomePage'
import RecPage from './RecPage'
import VirtualLib from './VirtualLib'
import RetUserDemo2 from './DemoUsers/RetUserDemo2'
import RetUserDemo1 from './DemoUsers/RetUserDemo1'
class Routes extends React.Component{
render() {
    return (
        <div className="container" style={{width:"100%",height:"100vh",marginRight:"0px",marginLeft:"0px",marginTop:"0px",margingBottom:"0px",maxWidth:"none",paddingRight:"0px",paddingLeft:"0px"}}>
        <Route path="/" exact component ={WelcomePage} />
        <Route path="/recommendations" component={RecPage} />
        <Route path="/virtualLib" component={VirtualLib} />
        <Route path="/retUser" component={RetUserDemo2} />
        <Route path="/retUser2" component={RetUserDemo1} />
        </div>
    );
  }
}

export default Routes;