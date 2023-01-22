import React from "react";
import Slider from "../animations/Slider";
import { Line } from '../brand/Brand';
import imgUrl1 from '../../../../assets/data-centric/automate.png';
import { SliderData } from "./SliderData";
import Arrow from "../icons/Icons";
import "./automate.css";


const Automate = () => {

    return(
        <div className="scale__automate section__padding">
            <div className="scale__automate-container">
                <img src={imgUrl1} alt="icon" />
                <p className="scale__automate-subtext">AUTOMATE</p>
                <h1>Automate Document Processing</h1>
                <p className="scale__automate-desc">Achieve robust document understanding and extraction across any document type. Pre-trained but fine-tuned with your data to your exact use case, Scale Document AI guarantees 99%+ quality and low latency to reduce costs up to 90%+ with an optional human-in-the-loop review.</p>
                <Line />
                <button className="scale__automate-btn" type="button">Learn How<Arrow /></button>
            </div>
            <div className="transform-x-avatar-color-overlay scale__automate-containerBox">
                <Slider slides={SliderData} className = "img" />
            </div>
        </div>
    );
}

export default Automate;