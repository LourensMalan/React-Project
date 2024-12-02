import React, { useState } from "react";
import ArrowNext from '../Images/ArrowNext.png'
import ArrowPrev from '../Images/ArrowPrev.png'

type Slide = {
    catagory: string;
    name: string;
    image: string;
    button: string;
    buttonHover: string;
};

type SliderProps = {
    slidesTop: Slide[];
    slidesBottom: Slide[];
    slidestoShow: number;
};

const TeamSlider: React.FC<SliderProps> = ({ slidesTop, slidesBottom, slidestoShow }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        if (currentIndex < slidesTop.length - slidestoShow) {
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
            <div className="team-slider">
                <div className="team-slider-top">
                    <div className="slider-slides"
                        style={{
                            transform: `translateX(-${(currentIndex) * 33.5}%)`,
                            transition: "transform 0.3s ease-in-out",
                        }}>
                        {slidesTop.map((slide, index) => (
                            <div
                                key={index}
                                className="slider-slide"
                            >
                                <div className={`slider-content ${index === currentIndex || (index === currentIndex + 1) || (index === currentIndex + 2) ? "active" : ""}`}>
                                    <p className="slide-catagory">{slide.catagory}</p>
                                    <p className="slide-name">{slide.name}</p>
                                    <div className="slider-expandBtn">
                                    <img src={slide.button} />
                                </div>
                                <div className="team-image">
                                <img src={slide.image} alt={`Slide ${index}`} />
                                </div>
                                <button className="info-buttn">
                                    <img src={slide.buttonHover} />
                                </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="team-slider-bottom-position">
                    <div className="team-slider-bottom">
                        <div className="slider-slides"
                            style={{
                                transform: `translateX(-${(currentIndex) * 33.33}%)`,
                                transition: "transform 0.3s ease-in-out",
                            }}>
                            {slidesBottom.map((slide, index) => (
                                <div
                                    key={index}
                                    className="slider-slide"
                                >
                                    <div className={`slider-content ${index === currentIndex || (index === currentIndex + 1) || (index === currentIndex + 2) ? "active" : ""}`}>
                                        <p className="slide-catagory">{slide.catagory}</p>
                                        <p className="slide-name">{slide.name}</p>
                                        <div className="slider-expandBtn">
                                    <img src={slide.button} />
                                </div>
                                <div className="team-image">
                                <img src={slide.image} alt={`Slide ${index}`} />
                                </div>
                                <button className="info-buttn"
                                disabled={!((index === currentIndex) || (index === currentIndex + 1) || (index === currentIndex + 2))}
                                >
                                    <img src={slide.buttonHover} />
                                </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={goToPrevSlide} className="team-slider-button left"
            disabled={currentIndex === 0}>
                <img
                    src={ArrowPrev}
                    alt=""
                />
            </button>
            <button onClick={goToNextSlide} className="team-slider-button right"
            disabled={currentIndex === slidesTop.length - slidestoShow}>
                <img
                    src={ArrowNext}
                    alt=""
                />
            </button>
        </div>

    );
};

export default TeamSlider;