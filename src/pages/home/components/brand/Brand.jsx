import React from 'react';
import Arrow from '../icons/Icons';
import './brand.css';
import { Cohere, OpenAI, Carper, Stability, Adept, Microsoft, Airforce, Blend, Brex, Etsy, Flexport, GeneralMotors, Instacart, Sap, Square, Toyota, Usarmy } from './imports';



const Brand = () => {
    return (
       <div className="scale__brand section__padding">
           <div className="scale__brand-container">
               <div>
               <img src={Microsoft} alt="microsoft" />
               <img src={Brex} alt="brex" />
               <img src={Etsy} alt="etsy" className="etsy" />
               <img src={Flexport} alt="flexport" />
               <img src={GeneralMotors} alt="general_motors" />
               <img src={Instacart} alt="instacart" />
               </div>
               <div>
               <img src={Blend} alt="blend" />
               <img src={Sap} alt="sap" className="sap" />
               <img src={Square} alt="square" />
               <img src={Toyota} alt="toyota" />
               <img src={Airforce} alt="airforce" />
               <img src={Usarmy} alt="us_army" />
               </div>
           </div>
           <div className="gradient__bg dividing-line"></div>
           <div className="scale__brand-container_investors">
               <img src={OpenAI} alt="openAi" />
               <img src={Adept} alt="adept" />
               <img src={Carper} alt="carper" className="carper" />
               <img src={Cohere} alt="cohere" />
               <img src={Stability} alt="stability" />
           </div>
           <div>
               <h4>Trusted by the world’s most ambitious AI teams. <button className="scale__brand-btn" type="button">Meet our customers<Arrow /></button></h4>
           </div>

       </div>
    )
};

export default Brand;