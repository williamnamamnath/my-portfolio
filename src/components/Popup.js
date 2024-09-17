import React from "react";

const Popup = (props) => {

    return (props.trigger) ? (
        <>
            <div className="popup-window">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                    {props.children}
                </div>
            </div>
        </>
    ) : "";
}

export default Popup;