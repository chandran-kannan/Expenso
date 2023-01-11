import React from "react";
import "./modal.css"

type Props = {
    show?: boolean | undefined;
    onClick?: () => void;
    onClose?: ()=>void;
}

const Modal = (props:Props) =>
{
    // if(!props.show)
    // {
    //     return null;
    // }
return(
    <div className={`modal fixed left-0-m right-0-m bottom-0-m top-0-m bg-black-m flex items-center justify-center opacity-0-m
    transition-m pointer-event-none-m ${props.show? 'show':''}`} onClick={props?.onClose}>
        <div className="modal-content w-full bg-white-m mx-15px-m radius-10px" onClick={e=>e.stopPropagation()}>
            <div className="model-header">
                <h4 className="modal-title fs-22px-m lh-32px-m py-3px-m mxy-5px-10px-m ">Privacy Policy</h4>
            </div>
            <div className="p-10px-m border-t-m border-b-m">
                <p className="fs-16px lh-25px text-black mb-10px-m text-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                 a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="modal-footer">
                <button onClick={props?.onClose} className="pxy-6px-15px-m fs-16px lh-25px text-white bt-bg-m radius-5px-m style-none-m">Accept</button>
            </div>
        </div>
    </div>
)
}

export default Modal;