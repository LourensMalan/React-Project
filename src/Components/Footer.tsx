import React from 'react';
import FooterStockImg from '../Images/Footer/StockFooter.png'
import VentureImg from '../Images/Footer/ventureLogo.png'
import BackGroundImg from '../Images/Footer/footerBackground.png'
import VentureTitleImg from '../Images/PopstarVentures.png'
import InstagramImg from '../Images/Footer/InstagramYellow.png'
import TwiiterImg from '../Images/Footer/TwitterBlue.png'
import LinkedinImg from '../Images/Footer/LinkindPink.png'
import UpArrowImg from '../Images/Footer/up arrow.png'

const Footer: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <footer>
            <div className='footer-stock-image'>
                <button className='footer-contact-button'><p className='footer-contact'>Contact Us.</p></button>
                <img src={FooterStockImg} />
                <p className='footer-welcome'>We welcome you to reach out and get in contact with us</p>
                <div className='venture-box'>
                    <img src={VentureImg} />
                </div>
            </div>
            <div className='footer-background'>
                <img src={BackGroundImg} />
                <img src={VentureTitleImg} className='footer-title-image' />
                <p className='slogan'>The leading Gen-Z VC firm for The Creator Economy</p>
                <p className='trademark'>©2024 Popstar Ventures</p>
                <div className='svg-line'>
                    <svg
                        width="1174"
                        height="200"
                        viewBox="0 0 1174 200"
                    > <path
                            d="M0 0 L1174 0"
                            stroke="white"
                            strokeWidth="1"
                        />
                    </svg>
                </div>
                <p className='site-by'>Site by UNOMENA</p>
                <p className='follow-text'>Follow us on socials</p>
                <button className='footer-instagram'>
                    <img src={InstagramImg} alt="" />
                </button>
                <button className='footer-twiiter'>
                    <img src={TwiiterImg} alt="" />
                </button>
                <button className='footer-linkedin'>
                    <img src={LinkedinImg} alt="" />
                </button>
                <button className='Brands'>Our Brands</button>
                <button className='Team'>Our Team</button>
                <button className='Contact'>Contact Us</button>
                <button className='SubmitBtn'>Submit Project</button>
                <button 
                onClick={scrollToTop}
                className='back-to-top'>Back to top <img src={UpArrowImg} /></button>
            </div>
        </footer>
    );
};

export default Footer;