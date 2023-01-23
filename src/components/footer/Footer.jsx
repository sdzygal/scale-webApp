import React from 'react';
import './footer.css';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";


export function Copyright() {
    return (
        <div className="scale__footer-copyright">
            <p>Copyright &#169; 2023. Alexandra Dzygal </p>
        </div>
    )
}

const Footer = () => {
    return (
        <>
        <div className="scale__footer section__padding">
            <div className="scale__footer-links">
                <div className="scale__footer-links_div">
                    <h4>PRODUCTS</h4>
                    <p>Scale Rapid</p>
                    <p>Scale Studio</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                </div>
                <div className="scale__footer-links_div">
                    <h4>SOLUTIONS</h4>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                </div>
                <div className="scale__footer-links_div">
                    <h4>COMPANY</h4>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                </div>
                <div className="scale__footer-links_div">
                    <h4>RESOURCES</h4>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                </div>
                <div className="scale__footer-links_div">
                    <h4>GUIDES</h4>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                </div>
                <div className="scale__footer-links_div">
                    <h4>CONTACT</h4>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <p>Scale Image</p>
                    <div className="scale__footer-socialMedia_links">
                        <IoLogoTwitter className="sm-icon"/>
                        <IoLogoFacebook className="sm-icon"/>
                        <IoLogoLinkedin className="sm-icon" />
                    </div>
                </div>

            </div>


        </div>
        </>
    )
};

export default Footer;
