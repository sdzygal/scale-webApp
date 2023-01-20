import React from 'react';
import header_img from '../../../../assets/instant-ml.png';
import TextTrans from '../animations/TextTrans';
import './header.css';

const Header = () => {
    return (
        <div className="scale__header section__padding">
            <div className="scale__header-content">
                <h1 className="gradient__text">Better Data.</h1>
                <TextTrans />
                <p>Better data leads to more performant models. Performant models lead to faster deployment. Deliver value from your AI investments faster with better data.  </p>
                <div className="scale__header-buttons">
                    <button className="btn_start" type="button">Get started</button>
                    <button className="btn_sales" type="button">Talk to Sales</button>
                </div>
            </div>
            <div className="scale__header-img">
                <img src={header_img} />
            </div>
        </div>
    )
};

export default Header;