import React, { Fragment } from 'react';
import { NavLink ,Link} from 'react-router-dom';
const Navbar = (props)=>{
    return(
        <Fragment>
            <main>
                <div className="row" style={{backgroundColor:"black",height:"50px"}}>
                    <div className="col-md-3 col-lg-3">
                        <Link exact to="/">
                        <h4 style={{color:"rgb(127, 234, 92)",marginTop:"6px",marginLeft:"4px"}}><i className="fa fa-envira" style={{fontSize:"48px,",color:"rgb(127, 234, 92)"}}></i> Tina'S Cake Shop</h4>
                        </Link>
                    </div>
                    <div className="col-md-5 col-lg-5"></div>
                    <div className="col-md-4 col-lg-4" >
                        <NavLink exact to ={{ pathname: "/product", ProductData: props.ProductDataMain }}><button className="btn btn-success" style={{marginTop:"5px"}}>Product</button></NavLink>&nbsp;&nbsp;
                        <NavLink exact to ={{ pathname: "/customer_information", customerData: props.CustomerDataMain }}><button className="btn btn-success" style={{marginTop:"5px"}}>Customer Information</button></NavLink>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}
export default Navbar;