import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header";
import { LeftArrow } from "../../../assets/Icons";
import PinInput from "../../../Components/PinInput";
import Button from "../../../Components/Button";
let hours = '0'
let minutes = '5'
let seconds = '0'
function Verification() {
    const [paused, setPaused] = useState(false);
    const [over, setOver] = useState(false);
    const [time, setTime] = useState({
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(seconds)
    });
    const tick = () => {
        if (paused || over) return;
        if (time.hours == 0 && time.minutes == 0 && time.seconds == 0)
            setOver(true);
        else if (time.minutes == 0 && time.seconds == 0)
            setTime({
                hours: time.hours - 1,
                minutes: 59,
                seconds: 59
            });
        else if (time.seconds == 0)
            setTime({
                hours: time.hours,
                minutes: time.minutes - 1,
                seconds: 59
            });
        else
            setTime({
                hours: time.hours,
                minutes: time.minutes,
                seconds: time.seconds - 1
            });
    };

    const reset = () => {
        setTime({
            hours: parseInt(hours),
            minutes: parseInt(minutes),
            seconds: parseInt(seconds)
        });
        setPaused(false);
        setOver(false);
    };

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });



    return (
        <div className="w-full px-15px mt-20px">
            <Header leftIcon={<LeftArrow height={18} width={18} />} title="Verification" />
            <div className="mt-56px">
                <h2 className="fs-34px lh-44px w-80 text-black font-500">Enter your Verification Code</h2>
            </div>
            <div className="mt-30px">
                <PinInput maxLength={6} visible={true} />
            </div>
            <div className="mt-30px">
                <p className="text-primary fs-18px font-700">{`${time.minutes.toString().padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</p>
            </div>
            <div className="mt-20px">
                <p className="fs-16px text-black w-90 lh-25px">We send verification code to your
                    email <span className="text-primary font-700">brajaoma*****@gmail.com.</span> You can
                    check your inbox.</p>
                <p className="text-primary fs-16px lh-25px mt-10px" onClick={() => reset()}>I didn’t received the code? Send again</p>
            </div>
            <div className="mt-30px">
                <Button classNames="display-block mx-auto fs-18px" variant="primary">Verify</Button>
            </div>
        </div>
    )
}

export default Verification;