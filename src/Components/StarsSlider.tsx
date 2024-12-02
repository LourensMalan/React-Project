import React, { useState } from "react";
import ArrowNext from '../Images/ArrowNext.png'
import ArrowPrev from '../Images/ArrowPrev.png'
import InstagramIMG from '../Images/Stars/Instagram.png'
import TikTokIMG from '../Images/Stars/TikTok.png'

type Slide = {
    image: string,
    hoverImage: string,
    name: string,
    title: string,
    expandBtn: string,
};

type SliderProps = {
    slides: Slide[];
    slidestoShow: number;
};

const StarSlider: React.FC<SliderProps> = ({ slides, slidestoShow }) => {
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
            <div className="star-slider">

                <div className="star-slides"
                    style={{
                        transform: `translateX(-${(currentIndex) * 33.3}%)`,
                        transition: "transform 0.3s ease-in-out",
                    }}>
                    {slides.map((star, index) => (
                        <div key={index} className='star-item'>
                            <div className={`slider-content ${index === currentIndex || (index === currentIndex + 1) || (index === currentIndex + 2) ? "active" : ""}`}>
                                <img src={star.image}
                                    alt={`Image ${index + 1}`}
                                    className='star-image'
                                />
                                <div className='overlay'>
                                    <img
                                        src={star.hoverImage}
                                        alt={`Hover Image ${index + 1}`}
                                        className='star-hover'
                                    />
                                </div>
                                <div className='star-text-title'>
                                    <p>{star.title}</p>
                                </div>
                                <div className='star-text-name'>
                                    <p>{star.name}</p>
                                </div>
                                <div className='expandBtn'>
                                    <img src={star.expandBtn}
                                        alt={`Button ${index + 1}`}
                                    />
                                </div>
                                <div className='socialBtn'>
                                    <button className='instagramBtn'>
                                        <img src={InstagramIMG}
                                            alt=''
                                        />
                                    </button>
                                    <button className='tiktokBtn'>
                                        <img src={TikTokIMG}
                                            alt=''
                                        />
                                    </button>
                                </div>
                            </div>
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

export default StarSlider;