import React from 'react'
import "./footer.css";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='footers'>
      <div className="footer1">
        
        <label> <CopyrightIcon/> 2022 Dribble. All right reserved</label>
      </div>
      <div className="footer2">Pawan</div>
      <div className="footer3">Hello World </div>
    </div>
  )
}

export default Footer;
