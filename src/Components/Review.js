import React from 'react';
const Review=(props)=>{
    return(
        <div className="row" style={{backgroundColor:"black",color:"white"}}>
            {props.reviewCustomer.map((r,index)=>(
                <div className="col-lg-4" style={{marginTop:"15px"}} key={index}>
                    <div className="row">
                        <div className="col-lg-4" >
                            <img src={r.avatar} alt={r.id} style={{height:"50%",width:"65%",borderRadius: "50%"}}/>
                        </div>
                        <div className="col-lg-8">
                            <h6>{r.first_name} {r.last_name}</h6>
                            <h6>{r.email}</h6>
                            <small>It is so delicious in taste that you cant stop eating. I like the bread, cake and pastries the most.They even customize the order according to your choice of flavour, size & shape & taste!</small>
                        </div>
                    </div><br></br>
                </div>
            ))}
        </div>
    );
}
export default Review;