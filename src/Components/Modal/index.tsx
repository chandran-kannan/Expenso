import React from "react";
import "./modal.css"

type Props = {
    show?: boolean | undefined;
    onClick?: () => void;
    onClose?: () => void;
}

const Modal = (props: Props) => {
    // if(!props.show)
    // {
    //     return null;
    // }
    return (
        <div className={`modal fixed l-0 r-0 b-0 t-0 bg-black-0-5px flex items-center justify-center opacity-0
    transition-0-3 pointer-event-none ${props.show ? 'show' : ''}`} onClick={props?.onClose}>
            <div className="modal-content w-full bg-white mx-15px rounded-10px" onClick={e => e.stopPropagation()}>
                <div className="model-header">
                    <h4 className="modal-title fs-22px lh-32px py-3px mxy-5px-10px ">Privacy Policy</h4>
                </div>
                <div className="p-10px border-t-grey border-b-grey">
                    <p className="fs-16px lh-25px text-black mb-10px text-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="modal-footer">
                    <button onClick={props?.onClose} className="pxy-6px-15px fs-16px lh-25px text-white btn-bg-blue rounded-5px style-none">Accept</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;