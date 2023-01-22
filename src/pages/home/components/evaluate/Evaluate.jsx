import React from "react";
import imgEvaluate from '../../../../assets/data-centric/evaluate.png';
import { SliderData } from "./SliderData";
import Slider from "../animations/Slider";
import { Line } from '../brand/Brand';
import Arrow from "../icons/Icons";
import './evaluate.css';



const Evaluate = () => {

    return(
        <div className="scale__evaluate section__padding">
            <div className="scale__evaluate-container">
            <img src={imgEvaluate} alt="icon" />
            <p className="scale__evaluate-subtext">EVALUATE</p>
            <h1>Test, Validate & Debug Models</h1>
            <p className="scale__evaluate-desc">Upload predictions to Nucleus via API. Track model performance, compare model runs, sort failure examples by metrics of interest, and build model unit tests out of curated dataset slices to catch regressions in key scenarios.</p>
            <Line />
            <button className="scale__evaluate-btn" type="button">Learn How<Arrow /></button>
        </div>
            <div className="transform-x-avatar-color-overlay scale__evaluate-containerBox">
                <Slider slides={SliderData} className = "img" />
            </div>
        </div>
    );
}

export default Evaluate;