import React from "react";
import imgEvaluate from '../../../../assets/data-centric/generate.png';
import Slider from "../animations/Slider";
import { Line } from '../brand/Brand';
import './generate.css';
import Arrow from "../icons/Icons";
import {SliderData} from "./SliderData";



const Generate = () => {

    return(
        <div className="scale__generate section__padding">
            <div className="scale__generate-container">
                <img src={imgEvaluate} alt="icon" />
                <p className="scale__generate-subtext">GENERATE</p>
                <h1>Generate Synthetic Data</h1>
                <p className="scale__generate-desc">Augment ground-truth training data with infinite varieties of synthetic data and expose your model to more data than you can otherwise collect. Confidently develop generalizable ML models by understanding how they will react to rare or dangerous real-world scenarios before you encounter them in production.</p>
                <Line />
                <button className="scale__generate-btn" type="button">Learn More<Arrow /></button>
            </div>
            <div className="transform-x-avatar-color-overlay scale__generate-containerBox">
                <Slider slides={SliderData} className = "img" />
            </div>
        </div>
    );
}

export default Generate;