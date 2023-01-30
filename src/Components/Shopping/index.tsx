import React from "react";
import "../tab/tab.css";

const Shopping = (props:any) =>
{
    return(
        <div className="flex items-center mb-10px justify-between py-5px-px-20px rounded-10px">
                        <div className="flex items-center">
                      <img className="wid-box" src={props.icon} alt="frame" />
                      <div className="ml-15px">
                       <h4 className="fs-16px lh-25px tab-content-color">{props.title}</h4>
                        <p className="text-light-grey fs-14px lh-23px">{props.desc}</p>
                        </div>
                      </div>
                       
                      <div className="payment-side">
                        <h4 className="fs-16px lh-25px text-red">{props.price}</h4>
                        <p className="fs-14px lh-23px text-light-grey mb-0px">{props.time}</p>
                      </div>
                    </div>
    )
}

export default Shopping;