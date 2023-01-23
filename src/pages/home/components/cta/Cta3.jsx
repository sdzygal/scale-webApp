import React from 'react';
import './cta.css';
import Arrow from "../icons/Icons";


const Cta3 = () => {
    return (
    <>
        <div className="scale__cta3 section__padding">
            <div className="scale__cta3-content">
                <h1>Get Started Today</h1>
                <div className="scale__cta3-buttons">
                    <button className="btn_start" type="button">Get started <Arrow /> </button>
                    <button className="btn_sales" type="button">Talk to Sales <Arrow /> </button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Cta3;