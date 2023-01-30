import React from "react";

function Card (props:any){
    return(
        <div className={`flex items-center py-15px-px-22px rounded-28px ${props.styleName}`}>
            <div className="bg-white p-5px rounded-10px">
            <img className="w-32px h-32px display-block mx-auto" src={props.image} alt="frame" />
                </div>
                <div className="card-desc">
                    <h4 className="text-milk-white font-500 fs-14px lh-17px">{props.desc}</h4> 
                    <h2 className="fs-22px lh-17px font-600 text-milk-white">{props.amount}</h2>
                </div>
        </div>
    )
}

export default Card;