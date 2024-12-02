import React from 'react';
import BackgroundImg from '../Images/Analytics/BackgroundImage.png'
import RootnoteImg from '../Images/Analytics/RootNoteBackground.png'
import ArrowImg from '../Images/Analytics/Arrows.png'
import JasonImg from '../Images/Analytics/JasonIMG.png'
import ChandlerImg from '../Images/Analytics/ChandlerIMG.png'
import MarketingImg from '../Images/Analytics/marketingImg.png'
import CatagoryImg from '../Images/Analytics/catagoryImg.png'
import ExpandYellow from '../Images/Stars/ExpandYellow.png'
import ExpandPink from '../Images/Stars/ExpandPink.png'
import ExpandBlue from '../Images/Stars/ExpandBlue.png'
import InfoImg from '../Images/Analytics/Info.png'
import AnalyticSlider from './AnalyticSlider';

const Analytics: React.FC = () => {
    const slides = [
        {
            id: 1,
            catagory: "Marketing",
            name: "RootNote",
            image: MarketingImg,
            button: ExpandBlue,
            buttonHover: InfoImg,
        },
        {
            id: 2,
            catagory: "Catagory",
            name: "Company Name",
            image: CatagoryImg,
            button: ExpandPink,
            buttonHover: InfoImg,
        },
        {
            id: 3,
            catagory: "Catagory",
            name: "Company Name",
            image: CatagoryImg,
            button: ExpandYellow,
            buttonHover: InfoImg,
        },
        {
            id: 4,
            catagory: "Marketing",
            name: "RootNote",
            image: MarketingImg,
            button: ExpandBlue,
            buttonHover: InfoImg,
        },

    ];


    return (
        <div>
            <img src={BackgroundImg}
                alt=''
                className='backgroundImg'
            />
            <p className='backgroundTxt'>“Hundreds of millions are being invested into startups
                &nbsp; &nbsp; &nbsp; &nbsp; in
                the creator economy”</p>
            <img src={RootnoteImg}
                alt=''
                className='rootnoteImg'
            />
            <div className='yellow-square'>
                <img src={ArrowImg}
                    alt=''
                    className='arrowImg'
                />
            </div>
            <div>
                <p className='rootnote-txt'>ROOTNOTE</p>
                <p className='analytic-title'>Collaborative analytics for  entertainment brands</p>
                <p className='analytic-txt'>A collaborative business intelligence platform that helps
                    creative teams use data to better engage, grow, and monetize
                    their audiences by activating key metrics from their favorite
                    apps, tools, and platforms, all in one place.</p>
                <img src={JasonImg}
                    alt=''
                    className='CEO-img'
                />
                <p className='CEO-name'>Jason Burchard</p>
                <p className='CEO-title'>Co-founder & CEO</p>
                <img src={ChandlerImg}
                    alt=''
                    className='CEO2-img'
                />
                <p className='CEO2-name'>Jason Burchard</p>
                <p className='CEO2-title'>Co-founder & CEO</p>
            </div>
            <div className='company-slides'>
                <AnalyticSlider slides = {slides} slidestoShow={2}/>
            </div>
        </div>
    );
};

export default Analytics;