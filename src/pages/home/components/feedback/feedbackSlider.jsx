import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  SliderData from "./import";
import './feedback.css';


function Card (props) {
    return (
        <div className="scale__feedback-slide">

            <div className="scale__feedback-slide_block">
                <img src={props.image} alt="avatar" className="feedbackImg" />
                <blockquote>
                    {props.quote}
                </blockquote>
                <h4 className="text-transform-gradient">
                    {props.author}
                </h4>
                <p>
                    {props.role}
                </p>
            </div>
        </div>

    )}

function createCard(props) {
    return <Card
        key={props.id}
                 image={props.image}
                 quote={props.quote}
                 author={props.author}
                 role={props.role}
    />
}


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginTop: "340px", right: "400px" }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginTop: "340px", left: "400px"}}
            onClick={onClick}
        />
    );
}

function FeedbackSlider() {
    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true,
        appendDots: dots => (
            <div style={{ bottom: "-135px" }}>
                <ul> {dots} </ul>
            </div>
        ),
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="scale__feedback-slider">
            <Slider {...settings}>
                {SliderData.map(createCard)}
            </Slider>
        </div>
    );
}



export default FeedbackSlider;
