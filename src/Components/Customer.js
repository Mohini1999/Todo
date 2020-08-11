import React, { Component } from 'react';
class LogInfo extends Component {
    render() { 
        return ( 
            <div style={{textAlign:"left",backgroundColor:"rgb(255 217 241)"}}>
              <div className="container">
                <h3 style={{color:"red",textAlign:"center"}}>Cutomer Information</h3>
                <hr></hr><br></br>
                <div className="row">
                  <div className="col-lg-12 col-md-4 col-sm-12">
                    <h4 style={{textAlign:"center"}}>All Cutomer list</h4><br></br>
                      <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th>#ID</th>
                            <th>Customer Image</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Mail ID</th>
                            <th scope="col">Mobile No</th>
                            {/* <th scope="col">Action</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.location.customerData.map((c,index) => (<tr key={c.id}>
                          <th>{c.id}</th>
                            <th><img src={c.avatar} alt={c.id} style={{height:"75%",width:"65%"}}/></th>
                            <th>{c.first_name}&nbsp;{c.last_name}</th>
                            <td>{c.email}</td>
                            <td>1251582545</td>
                          </tr>))}
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
            </div>
         );
    }
}
export default LogInfo;