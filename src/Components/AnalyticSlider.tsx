import React, { useState } from "react";
import ArrowNext from '../Images/ArrowNext.png'
import ArrowPrev from '../Images/ArrowPrev.png'

type Slide = {
    id: number;
    catagory: string;
    name: string;
    image: string;
    button: string;
    buttonHover: string;
};

type SliderProps = {
    slides: Slide[];
    slidestoShow: number;
};

const AnalyticSlider: React.FC<SliderProps> = ({ slides, slidestoShow }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        if (currentIndex < slides.length - slidestoShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <div className="slider">

                <div className="slider-slides"
                    style={{
                        transform: `translateX(-${(currentIndex) * 50.5}%)`,
                        transition: "transform 0.3s ease-in-out",
                    }}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className="slider-slide"
                        >
                            <div className={`slider-content ${index === currentIndex || (index === currentIndex + 1) ? "active" : ""}`}>
                                <p className="slide-catagory">{slide.catagory}</p>
                                <p className="slide-name">{slide.name}</p>
                                <div className="slider-expandBtn">
                                    <img src={slide.button} />
                                </div>
                                <button className="info-buttn">
                                    <img src={slide.buttonHover} />
                                </button>
                            </div>
                            <img src={slide.image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>


            </div>
            <button onClick={goToPrevSlide} className="slider-button left">
                <img
                    src={ArrowPrev}
                    alt=""
                />
            </button>
            <button onClick={goToNextSlide} className="slider-button right">
                <img
                    src={ArrowNext}
                    alt=""
                />
            </button>
        </div>
    );
};

export default AnalyticSlider;