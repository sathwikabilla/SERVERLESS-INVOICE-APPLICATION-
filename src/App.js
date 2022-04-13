import React, { Component } from 'react';
import {Table,Button} from 'reactstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faThumbsDown,faThumbsUp,faImage, faMoneyCheckAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  state = { 
    isloading :false,
     invoices :[]
    //   {
    //     "Id":"100 ",
    //     "Vendor":"Amazon",
    //     "Amount":"$25000",
    //     "Invoice":"123",
    //     "Date":"4/12/2022"
    //   },

    //   {
    //     "Id":"200 ",
    //     "Vendor":"Flipcart",
    //     "Amount":"$5000",
    //     "Invoice":"1223",
    //     "Date":"4/25/2022"
    //   },

    //   {
    //     "Id":"300 ",
    //     "Vendor":"ebay",
    //     "Amount":"$58000",
    //     "Invoice":"1113",
    //     "Date":"5/1/2022"
    //   },

    //   {
    //     "Id":"400 ",
    //     "Vendor":"khols",
    //     "Amount":"$95000",
    //     "Invoice":"1023",
    //     "Date":"6/12/2022"
    //   }
    // ]
   } 

   remove(Id){
     console.log(Id)
     let updatedinvoices=[...this.state.invoices].filter(i=>i.Id!==Id)
     this.setState({invoices:updatedinvoices});
   }

  async componentDidMount(){
    const response=await fetch('https://kqvy7alaw2.execute-api.us-east-2.amazonaws.com/production')
    const body=await response.json();
    this.setState({invoices:body,isloading:false});
  }
   

  render() { 
    const isloading=this.state.isloading;
    const allinvoices=this.state.invoices;
    
    if(isloading)
    {
      return(<div>
        <span class="fa-li">
          <i class="fa-solid fa-spinner fa-pulse">
            </i>
            </span>
            Loading...
            </div>);
    }
    let invoices=allinvoices.map(Invoice=>
      <tr key={Invoice.Id}>
        <td>{Invoice.Id}</td>
        <td>{Invoice.Vendor}</td>
        <td>{Invoice.Amount}</td>
        <td>{Invoice.Invoice}</td>
        <td>{Invoice.Date}</td>
        <td>{<Button className='btn btn-lg btn-success' onClick={()=>this.remove(Invoice.Id)}> <FontAwesomeIcon icon={faThumbsUp} /> OK</Button>}</td>
        <td>{<Button className='btn btn-lg btn-danger' onClick={()=>this.remove(Invoice.Id)}> <FontAwesomeIcon icon={faThumbsDown} />NOK</Button>}</td>
        <td>{<Button className='btn btn-lg btn-info' onClick={()=>this.remove(Invoice.Id)}><FontAwesomeIcon icon={faMoneyCheckAlt} />50%</Button>}</td>
        <td>{<Button className='btn btn-lg btn-warning' onClick={()=>this.remove(Invoice.Id)}><FontAwesomeIcon icon={faSearchDollar} />??</Button>}</td>
        <td>{<Button className='btn btn-lg btn-info' onClick={()=>this.remove(Invoice.Id)}><FontAwesomeIcon icon={faImage} />Image</Button>}</td>
      </tr>)
    return (
      <div className="container fa-border border-secondary rounded center">
        <div className="row">
          <div className="col-12"> 
            <h4 class ="fa-solid fa-coffee fa-2xl"> ------Pending invoices- the test company------</h4>
          </div>
        </div>
        <div className="row">
              <div className=".col-xs-12 center test-center"> 
                    <Table dark responsive striped bordered hover>
                           <thead>
                             <th>Id</th>
                             <th>Vendor</th>
                             <th>Amount</th>
                            <th>Invoice</th>
                            <th>Date</th>
                            <th colSpan="4">Actions</th>
                           <th>Image</th>
                           </thead>   
                           <tbody>
                             {this.state.invoices.length ===0 ? <td colSpan="9">All cought up!!</td>: invoices}
                           </tbody>
                  </Table>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;