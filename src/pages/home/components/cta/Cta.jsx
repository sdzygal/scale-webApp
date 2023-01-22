import React from "react";
import Arrow from "../icons/Icons";
import imgCta from "../../../../assets/enterprise-ai.png";
import './cta.css';



const Cta = () => {
    return(
        <>
            <div className="scale__cta section__padding">
                <div className="scale__cta-container">
                <div className="scale__cta-container_header-img">
                    <img src={imgCta} />
                </div>
                    <div className="scale__cta-container_headerContent">
                        <h1>Interested in <span className="text-transform-x-gradient"> Enterprise AI </span> for your industry?</h1>
                        <p>Get in touch with our AI specialists for a scoping session.</p>
                        <div className="scale__cta-contentInput">
                        <input type="email" placeholder="Enter Your Work Email" />
                            <div className="scale__cta-contentButton">
                            <button type="button">Get in Touch <Arrow /> </button>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Cta;