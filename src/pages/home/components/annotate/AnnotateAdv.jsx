import React from "react";
import "../annotate/annotate.css";
import imgUrl1 from '../../../../assets/data-centric/annotate.png';
import {SliderData} from "./SliderData";
import Slider from "../animations/Slider";
import { Line } from '../brand/Brand';
import Arrow from "../icons/Icons";



const AnnotateAdv = () => {
    return(
        <div className="scale__annotate scale__annotateAdv section__padding">
            <div className="scale__annotate-container scale__annotateAdv">
            <img src={imgUrl1} alt="icon" />
            <p className="scale__annotate-subtext">ANNOTATE CONTENT & LANGUAGE</p>
            <h1>Gather Human Insight</h1>
            <p className="scale__annotate-desc">Retrieve human insights for search relevance, ecommerce, natural language processing, audio transcription, document processing and more. Operational excellence augmented by technology enables us to exceed demanding quality, cost, and latency requirements.</p>
            <Line />
            <button className="scale__annotate-btn" type="button">Learn More<Arrow /></button>
        </div>
            <div className="transform-x-avatar-color-overlay scale__annotate-containerBox scale__annotateAdv-slider">
                <Slider slides={SliderData} clasName="img" />
            </div>
        </div>
    );
}

export default AnnotateAdv;