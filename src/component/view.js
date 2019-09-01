import React, {Component} from  "react";
import "axios"
import Axios from "axios";

class View extends Component{
    constructor(props){
    super(props)
    this.state={
        result : []

    }
    };

    componentDidMount() {
        Axios.get('http://localhost:8000/showapi/')
            .then(response => {
                //console.log(response)
                this.setState({ result: response.data });
                console.log(this.state.result)
                return this.state.result
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
render(){
    //const { result } = this.state;
    return (
        <div className="customer">
            <table className="table">
                <thead key="thead">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                
                <tbody>
                    {this.state.result.map(qry => 
                         <tr key='${qry.id}'>
                             <td>{qry.id}  </td>
                             <td>{qry.name}</td>
                            <td>{qry.product}</td>
                            <td>{qry.amount}</td>
                            <td>{qry.description}</td>   
                         </tr>
                    
                    )}  
                </tbody>
               
            </table>
            
        </div>
    );
}

}

export default View;