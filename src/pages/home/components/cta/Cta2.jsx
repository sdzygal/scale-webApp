import React from 'react';
import './cta.css';
import imgCta from "../../../../assets/rapid-banner.png";
import Arrow from "../icons/Icons";


const Cta2 = () => {
    return(
        <>
            <div className="scale__cta scale__cta2 section__padding">
                <div className="scale__cta-container scale__cta-container2">

                    <div className="scale__cta-container_headerContent">
                        <h1>Interested in <span className="text-transform-x-gradient"> Rapid </span> labels for your model? </h1>
                        <p>Get in touch with our AI specialists for a scoping session.</p>
                            <div className="scale__cta-contentButton btn_cta2">
                                <button type="button">Label My Data <Arrow /> </button>
                            </div>
                    </div>
                    <div className="scale__cta-container_header-img">
                    <img src={imgCta} />
                </div>
                </div>
            </div>
        </>

    );
}



export default Cta2;
