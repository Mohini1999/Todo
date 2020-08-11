import React, { Component } from 'react';
class Product extends Component {
    render() { 
        return ( 
            <div>
                <h4 style={{fontSize:"250%"}}>Our Product</h4><br></br>
                <div className="row" >
                {this.props.location.ProductData.map((item, index) => (
                    <div className=" col-lg-4 col-sm-6 col-xs-4" key={index}>
                        <img src={item.photo} alt="Cake" useMap="#image-map" style={{height:"70%",width:"62%"}}/><br></br>
                        <h5 style={{color:"rgb(102,51,50)",fontFamily:"cursive"}}>{item.title}</h5>
                        <h5 style={{color:"grey",fontFamily:"cursive"}}>Price:{item.price}/-</h5><br></br>
                    </div>
                ))}
                </div> 
            </div>
        );
    }
}
 
export default Product;