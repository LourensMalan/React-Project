import React from 'react';
import StreamerImg from '../Images/Team/Streamer.png'
import TeamSlider from './TeamSlider';
import ExpandYellow from '../Images/Stars/ExpandYellow.png'
import ExpandPink from '../Images/Stars/ExpandPink.png'
import ExpandBlue from '../Images/Stars/ExpandBlue.png'
import AdontisImg from '../Images/Team/adontis-haskins-colour.png'
import AlexImg from '../Images/Team/alex-rose-colour.png'
import DonielImg from '../Images/Team/doniel-wilson-colour.png'
import HaileyImg from '../Images/Team/hailey-floyd-colour.png'
import HarryImg from '../Images/Team/harry-poloner-colour.png'
import IzerImg from '../Images/Team/izer-martinez-colour.png'
import JordanImg from '../Images/Team/jordan-walker-colour.png'
import JorgeImg from '../Images/Team/jorge-de-los-santos-colour.png'
import PhilipImg from '../Images/Team/philip-saidely-colour.png'
import RaviImg from '../Images/Team/ravi-kumar-colour.png'
import RichardImg from '../Images/Team/richard-thorpe-colour.png'
import SajiImg from '../Images/Team/saji-lukose-colour.png'
import LinkdinImg from '../Images/Team/linkdinImg.png'


const Team: React.FC = () => {
    const slides = [
        {
            catagory: "Founder & Partner",
            name: "Adontis Hsaskins",
            image: AdontisImg,
            button: ExpandBlue,
            buttonHover: LinkdinImg,
        },
        {
            catagory: "Partner",
            name: "Izer Martinez",
            image: IzerImg,
            button: ExpandYellow,
            buttonHover: LinkdinImg,
        },
        {
            catagory: "Partner",
            name: "Philip Saidely",
            image: PhilipImg,
            button: ExpandBlue,
            buttonHover: LinkdinImg,
        },
        {
            catagory: "Advisor",
            name: "Jorge de los Santos",
            image: JorgeImg,
            button: ExpandPink,
            buttonHover: LinkdinImg,
        },
        {
            catagory: "Advisor",
            name: "Alex Rose",
            image: AlexImg,
            button: ExpandYellow,
            buttonHover: LinkdinImg,

        },
        {
            catagory: "Advisor",
            name: "Doniel Wilson",
            image: DonielImg,
            button: ExpandBlue,
            buttonHover: LinkdinImg,
        },

    ];
    const slides2 = [
        {
            catagory: "Partner",
            name: "Jordan Walker",
            image: JordanImg,
            button: ExpandYellow,
            buttonHover: LinkdinImg,

        },
        {
            catagory: "Advisor",
            name: "Hailey Floyd",
            image: HaileyImg,
            button: ExpandBlue,
            buttonHover: LinkdinImg,
        },
        {
            catagory: "Parner",
            name: "Harry Poloner",
            image: HarryImg,
            button: ExpandPink,
            buttonHover: LinkdinImg,
        },
        {
            catagory: "Partner",
            name: "Ravi Kumar",
            image: RaviImg,
            button: ExpandYellow,
            buttonHover: LinkdinImg,
        },
        {
            catagory: "Advisor",
            name: "Richard Thorpe",
            image: RichardImg,
            button: ExpandBlue,
            buttonHover: LinkdinImg,
        },
        {
            catagory: "Advisor",
            name: "Saji Lukose",
            image: SajiImg,
            button: ExpandPink,
            buttonHover: LinkdinImg,
        },

    ];

    return (
        <div className='team'>
            <img src={StreamerImg}
                alt=''
                className='streamer-image' />
            <p className='bold-text'>Popstar Ventures aspires to be the leading capital source for the Creator Economy</p>

            <p className='team-paragraph'>Leveraging expertise in talent management,
                fundraising, product growth, product development, investment banking,
                GTM strategy, sales engineering, and revenue generation. We are operators,
                investors, and advisors.</p>
            <p className='slider-title'>Our Team.</p>
            <div className='team-slides'>
            <TeamSlider slidesTop={slides} slidesBottom={slides2} slidestoShow={3}/>
            </div>
        </div>
    );
};

export default Team;