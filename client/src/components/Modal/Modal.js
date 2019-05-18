import React from 'react';
import "../../stylesGame.css"
import './Modal.css';

const modal = (props) => {
    return (
        <div style={{position:"relative", zIndex:1}}>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    position:"relative",
                    zIndex:3,
                    color:"red"
                }}
                >
                <div className="modal-header">
                    {/* <h3>Story Event</h3> */}
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body"
                style={{
                color:"red"

                }}
                >
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer" style={{position:"relative", zIndex:10}}>
                    <button className="btn-cancel"
                    
                    onClick={props.close}>CLOSE</button>
                    <button className="btn-continue"
                   
                    ><a href={props.link}>Continue</a></button>
                </div>
            </div>
        </div>
    )
}

export default modal;

