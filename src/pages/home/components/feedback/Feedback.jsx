import React from "react";
import FeedbackSlider from "./feedbackSlider";
import "./feedback.css";



const Feedback = () => {
    return(
        <>
        <div className="scale__feedback section__padding">
            <div className="scale__feedback-container">
                <div className="scale__feedback-containerBox">
                    <FeedbackSlider />
                </div>
        </div>
        </div>
        </>

    );
}

export default Feedback;