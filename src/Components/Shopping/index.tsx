import React from "react";
import "../tab/tab.css";

const Shopping = (props:any) =>
{
    return(
        <div className="content-box">
                        <div className="images">
                      <img className="wid-box" src={props.icon} alt="frame" />
                      <div className="desc-side">
                       <h4>{props.title}</h4>
                        <p>{props.desc}</p>
                        </div>
                      </div>
                      <div className="">
                       
                      </div>
                      <div className="payment-side">
                        <h4>{props.price}</h4>
                        <p>{props.time}</p>
                      </div>
                    </div>
    )
}

export default Shopping;