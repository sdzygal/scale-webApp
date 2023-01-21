import React from "react";
import "../annotate/annotate.css";
import imgUrl1 from '../../../../assets/data-centric/annotate.png';
import { SliderData1 } from "./SliderData1";
import Slider from "../animations/Slider";
import { Line } from '../brand/Brand';
import Arrow from "../icons/Icons";



const Annotate = () => {

    return(
        <div className="scale__annotate section__padding"> <div className="scale__annotate-container">
            <img src={imgUrl1} alt="icon" />
            <p className="scale__annotate-subtext">ANNOTATE CONTENT & LANGUAGE</p>
            <h1>Gather Human Insight</h1>
            <p className="scale__annotate-desc">Retrieve human insights for search relevance, ecommerce, natural language processing, audio transcription, document processing and more. Operational excellence augmented by technology enables us to exceed demanding quality, cost, and latency requirements.</p>
            <Line />
            <button className="scale__annotate-btn" type="button">Learn More<Arrow /></button>
        </div>
            <div className="transform-x-avatar-color-overlay scale__annotate-containerBox">
                <Slider slides={SliderData1} className = "img" />
            </div>
           </div>
    );
}

export default Annotate;