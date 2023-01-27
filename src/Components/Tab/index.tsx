import React, { useState } from "react";
import "./tab.css";
import Shopping from "../Shopping";
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
                    <Shopping icon="src/assets/images/Frame-5.png" title="Shopping" desc="Buy some grocery" price="- $120" time="10:00 AM" />
                    <Shopping icon="src/assets/images/Frame-5.png" title="Subscription" desc="Disney+ Annual.." price="- $80" time="03:30 PM" />
                    <Shopping icon="src/assets/images/Frame-5.png" title="Food" desc="Buy a ramen" price="- $32" time="07:30 PM" />

                    
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