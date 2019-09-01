import React, {Component} from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
//import './App.css';
import Create from "./create"
import Home from "./home"
import Login from "./login"
import View from "./view"
import Reg from "./reg"

class Menu extends Component{
    constructor(){
        super()
        this.state ={
            route : false

        }
    }
    render(){

        return(


                <Router className="container">
                <div className="menu">
                    <nav className="navbar navbar-expand-lg  navbar-light">
                        <a className="navbarbrand" href="">  Myapp  </a>
                        <button className="navbar-toggler" data-toggler="collapse" data-value="nav">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="navbar-nav mr-auto">
                               
                                
                                    <li className="nav-item">
                                        <Link to={"/"} className="nav-link" > Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/create"} className="nav-link"> Create </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/view"} className="nav-link"> Show record </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/logout"} className="nav-link"> logout </Link>
                                    </li>
                                
                                
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link" > Login </Link>
                                </li>
                                
                            </ul>
                        </div>

                            </nav>
                </div>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/create" component={Create} />
                                <Route path="/login" component={Login} />
                                <Route path="/reg" component={Reg}  />
                                  <Route path="/view" component={View} />

                            </Switch>

                </Router>



        )
    }
}



export default Menu
