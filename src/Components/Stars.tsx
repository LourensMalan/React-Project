import React from 'react';
import JustinT from '../Images/Stars/JustineT.png'
import DerekJ from '../Images/Stars/DerekJ.png'
import KyleK from '../Images/Stars/KyleK.png'
import Timbaland from '../Images/Stars/Timbaland.png'
import VictorW from '../Images/Stars/VictorW.png'
import JustinTHover from '../Images/Stars/JustinT-Hover.png'
import DerekJHover from '../Images/Stars/DerekJ-Hover.png'
import KyleKHover from '../Images/Stars/KyleK-Hover.png'
import TimbalandHover from '../Images/Stars/Timbaland-Hover.png'
import VictorWHover from '../Images/Stars/VictorW-Hover.png'
import ExpandYellow from '../Images/Stars/ExpandYellow.png'
import ExpandPink from '../Images/Stars/ExpandPink.png'
import ExpandBlue from '../Images/Stars/ExpandBlue.png'
import StarSlider from './StarsSlider';


const Stars: React.FC = () => {

    const starsData = [
        {
            image: JustinT,
            hoverImage: JustinTHover,
            name: "Justin Timberlake",
            title: "Artist",
            expandBtn: ExpandYellow,
        },
        {
            image: KyleK,
            hoverImage: KyleKHover,
            name: "Kyle Kuzma",
            title: "Athlete",
            expandBtn: ExpandBlue,
        },
        {
            image: DerekJ,
            hoverImage: DerekJHover,
            name: "Derek Jeter",
            title: "Athlete",
            expandBtn: ExpandPink,
        },
        {
            image: Timbaland,
            hoverImage: TimbalandHover,
            name: "Timbaland",
            title: "Artist",
            expandBtn: ExpandBlue,
        },
        {
            image: VictorW,
            hoverImage: VictorWHover,
            name: "Victor Wembanyama",
            title: "Artist",
            expandBtn: ExpandYellow,
        },

    ];

    return (
        <div>
            <div className='Stars-txt'>
                <p>Deal flow from the biggest stars on the planet.</p>
            </div>
            <div className='Stars'>
                <StarSlider slides={starsData} slidestoShow={3}/>
            </div>
        </div>
    );
};

export default Stars;