import React from "react";
import imgEvaluate from '../../../../assets/data-centric/collect.png';
import { SliderData } from './SliderData';
import Slider from "../animations/Slider";
import { Line } from '../brand/Brand';
import './collect.css';
import Arrow from "../icons/Icons";



const Collect = () => {

    return(
        <div className="scale__collect section__padding">
            <div className="scale__collect-container">
                <img src={imgEvaluate} alt="icon" />
                <p className="scale__collect-subtext">COLLECT</p>
                <h1>Collect Diverse Data</h1>
                <p className="scale__collect-desc">Collect and generate representative device, image, video, text and audio data in 50+ languages across 70+ countries. Data collection workflows are API supported and seamlessly integrate with Scale's data labeling pipeline.</p>
                <Line />
                <div className="scale__collect-contentInput">
                    <input type="email" placeholder="Enter Your Work Email" />
                    <div className="scale__collect-contentButton">
                        <button type="button">Get on the Waitlist <Arrow /> </button>
                    </div>
                </div>
            </div>
            <div className="transform-x-avatar-color-overlay scale__collect-containerBox">
                <Slider slides={SliderData} className = "img" />
            </div>
        </div>
    );
}

export default Collect;