import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import cupcakePage from './Image/cupcakeHomePage.png'
import cakePage from './Image/cakeHomePage.jpg';
const DefaultPage = (props) => {
    return ( 
        <Fragment>
            <main>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <img style={{height:"600px",width:"700px"}} src={cakePage} alt="product"></img>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img style={{height:"600px",width:"687px"}} src={cupcakePage} alt="product"></img>
                        <NavLink exact to ={{ pathname: "/task"}}><button className="btn" style={{backgroundColor:"rgb(150,51,60)",borderStyle:"double",position:"absolute",top:"70%",left:"-18%",height:"8%",width:"40%"}}><h3>To Do</h3></button></NavLink>
                    </div>
                </div>
            </main>
        </Fragment>
     );
}
 
export default DefaultPage;