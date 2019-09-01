import React, {Component} from "react";


class Login extends Component{
    constructor(props){
        super(props)
            this.onchangeEmail = this.onchangeEmail.bind(this);
            this.onchangePassword = this.onchangePassword.bind(this);
            this.handlesubmit = this.handlesubmit.bind(this)
            this.handlereg = this.handlereg.bind(this)

            this.state={
                email : "" ,
                password : "",
            }

    }

    onchangeEmail(event) {
        console.log(event.target.value)
        this.setState({
            email: event.target.value
        });
    }



onchangePassword(event){
    console.log(event.target.value)
    this.setState({
        password: event.target.value
    });
}
handlesubmit = (event)=>{
    console.log(event.target.email)
    this.props.history.push("/")
}
handlereg = (event)=>{
    console.log(event.target.email)
    this.props.history.push("/reg")
}

    render(){
        const {onRouteChange} = this.props;
        return(
              <div>
                <div className="login">
                  <div className="container">
                    <div className="row">
                    <div className="col">
                        <label role="name"> Email </label>
                        <div className="col">
                            <input type="text" onChange={this.onchangeEmail} value={this.state.email}/>
                        </div>
                        </div>
                    </div>
                    </div>
                        <div className="container">
                            <div className="row">
                               <div className="col">
                                <label role="name"> Password </label>

                                <div className="col">
                                    <input type="password" onChange={this.onchangePassword} value={this.state.password} />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <button  className="btn btn-success" onClick={this.handlesubmit} > Login </button>
                                </div>
                            </div>
                        </div>
                            <div className="container">
                            <div className="row">
                                <div className="col">
                                <button  className="btn btn-success" onClick={this.handlereg} > Register  </button>
                                </div>
                            </div>
                        </div>
                    </div>


              </div>


        )
    }
}


export default Login;
