import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Footer from "./component/footer"
import Menu  from "./component/menu"
import Create from "./component/create"
import Home from "./component/home"
import Login from "./component/login"
import Reg from "./component/reg"
import 'bootstrap/dist/css/bootstrap.min.css'
//import  {Link} from "react-router"



class App extends Component {
  constructor() {
    super()
    this.state = {
         route : "signined" ,
         isSignedIn : true,
    }
  }
  onRouteChange = (route) =>{
    if (route === "signout"){
      this.setState({isSignedIn : false})
    } else if
      (route === "home"){this.setState({  isSignedIn: true })
     }
   this.setState({route : route})

  }
  onRouteChange1 = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    const{ isSignedIn, singout} = this.state;
    return (
     <div className="App" >
        <Menu isSignedIn = {isSignedIn} onRouteChange={this.onRouteChange} />

        <div className='footer'>
          <Footer />
        </div>

      </div>


    )
  }
}

export default App;
