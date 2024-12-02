import React from 'react';
import PageName from '../Images/PopstarVentures.png'

const Header: React.FC = () => {
  return (
    <header>
      <button className='Brands'>Our Brands</button>
      <button className='Team'>Our Team</button>
      <button className='Contact'>Contact Us</button>
      <button className='SubmitBtn'>Submit Project</button>
      <img src={PageName} alt="Popstar" className='Popstar-Ventures' />
    </header>
  );
};

export default Header;