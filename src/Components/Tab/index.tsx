import React, { useState } from "react";
import "./tab.css";
import Shopping from "../Shopping";
const Tab = () => {

    const [ToggleState, settoggleState] = useState(1);

    const Toggletab = (index: number) => {
        settoggleState(index);
    }


    return (
        <div className="px-15px">
            <div className="tab-block flex font-600 fs-16px lh-30px justify-between mx-auto my-10px-20px">
                <div onClick={() => Toggletab(1)} className={ToggleState === 1 ? "active-tabs" : "tabs"}>Today</div>
                <div onClick={() => Toggletab(2)} className={ToggleState === 2 ? "active-tabs" : "tabs"}>Week</div>
                <div onClick={() => Toggletab(3)} className={ToggleState === 3 ? "active-tabs" : "tabs"}>Month</div>
                <div onClick={() => Toggletab(4)} className={ToggleState === 4 ? "active-tabs" : "tabs"}>Year</div>
            </div>
            <div className="content-tabs">
                <div className={ToggleState === 1 ? "display-block" : "display-none"}>
                    <div className="flex justify-between mb-20px items-center">
                        <h4 className="fs-18px lh-28px text-black">Recent Transaction</h4>
                        <button className="fs-16px font-600 text-primary style-none rounded-30px py-7px-px-15px bg-secondry">See All</button>
                    </div>
                    <Shopping icon="src/assets/images/Frame-5.png" title="Shopping" desc="Buy some grocery" price="- $120" time="10:00 AM" />
                    <Shopping icon="src/assets/images/subscription.png" title="Subscription" desc="Disney+ Annual.." price="- $80" time="03:30 PM" />
                    <Shopping icon="src/assets/images/Food.png" title="Food" desc="Buy a ramen" price="- $32" time="07:30 PM" />

                    
                </div>
                <div className={ToggleState === 2 ? "display-block" : "display-none"}>
                    <h2 className="fs-22px lh-30px mb-10px tab-content-color">Week</h2>
                    <p className="fs-16px lh-25px mb-10px tab-content-color">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.</p>
                </div>
                <div className={ToggleState === 3 ? "display-block" : "display-none"}>
                    <h2 className="fs-22px lh-30px mb-10px tab-content-color">Month</h2>
                    <p className="fs-16px lh-25px mb-10px tab-content-color">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className={ToggleState === 4 ? "display-block" : "display-none"}>
                    <h2 className="fs-22px lh-30px mb-10px tab-content-color">Year</h2>
                    <p className="fs-16px lh-25px mb-10px tab-content-color">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    )
}

export default Tab;