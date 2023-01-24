import React, { useState } from "react";
import "./tab.css";
const Tab = () => {

    const [ToggleState, settoggleState] = useState(1);

    const Toggletab = (index: number) => {
        settoggleState(index);
    }


    return (
        <div className="tab-container">
            <div className="tab-block">
                <div onClick={() => Toggletab(1)} className={ToggleState === 1 ? "active-tabs" : "tabs"}>Today</div>
                <div onClick={() => Toggletab(2)} className={ToggleState === 2 ? "active-tabs" : "tabs"}>Week</div>
                <div onClick={() => Toggletab(3)} className={ToggleState === 3 ? "active-tabs" : "tabs"}>Month</div>
                <div onClick={() => Toggletab(4)} className={ToggleState === 4 ? "active-tabs" : "tabs"}>Year</div>
            </div>
            <div className="content-tabs">
                <div className={ToggleState === 1 ? "active-content" : "content"}>
                    <div className="trans-div">
                        <h4>Recent Transaction</h4>
                        <button>See All</button>
                    </div>
                    <div className="content-box">
                        <div className="images">
                      <img className="wid-box" src="src/assets/images/Frame-5.png" alt="frame" />
                      </div>
                      <div className="desc-side">
                        <h4>Shopping</h4>
                        <p>Buy some grocery</p>
                      </div>
                      <div className="payment-side">
                        <h4>- $120</h4>
                        <p>10:00 AM</p>
                      </div>
                    </div>

                    <div className="content-box">
                        <div className="images">
                      <img className="wid-box" src="src/assets/images/Frame-5.png" alt="frame" />
                      </div>
                      <div className="desc-side">
                        <h4>Subscription</h4>
                        <p>Disney+ Annual..</p>
                      </div>
                      <div className="payment-side">
                        <h4>- $80</h4>
                        <p>03:30 PM</p>
                      </div>
                    </div>

                    
                </div>
                <div className={ToggleState === 2 ? "active-content" : "content"}>
                    <h2>Week</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.</p>
                </div>
                <div className={ToggleState === 3 ? "active-content" : "content"}>
                    <h2>Month</h2>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className={ToggleState === 4 ? "active-content" : "content"}>
                    <h2>Year</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    )
}

export default Tab;