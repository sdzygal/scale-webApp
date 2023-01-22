import React from "react";
import Slider from "../animations/Slider";
import { Line } from '../brand/Brand';
import imgUrl1 from '../../../../assets/data-centric/manage.png';
import { SliderData } from "./SliderData";
import Arrow from "../icons/Icons";
import "./manage.css";


const Manage = () => {

    return(
        <div className="scale__manage section__padding">
            <div className="scale__manage-container">
            <img src={imgUrl1} alt="icon" />
            <p className="scale__manage-subtext">MANAGE</p>
            <h1>Manage Your Datasets</h1>
                <p className="scale__manage-desc">Quickly choose what data to label with active learning and advanced querying. Visualize data, identify edge cases with integrated model predictions, and solve the long tail with <a className="" href="#">Scale Nucleus</a>.</p>
            <Line />
            <button className="scale__manage-btn" type="button">Explore Scale Nucleus<Arrow /></button>
        </div>
            <div className="transform-x-avatar-color-overlay scale__manage-containerBox">
                <Slider slides={SliderData} className = "img" />
            </div>
        </div>
    );
}

export default Manage;