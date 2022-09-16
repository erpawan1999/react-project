import React from "react";
import "./lowerbar.css";
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';



const Lowerbar = () => {
  return (
    <div className="Lowerbar">
      <div className="sidebar1">
        <h3 className="heading">Dribble</h3>
        <p className="paragraph">
          Dribbble is the world’s leading community for creatives to share,
          grow, and get hired.
        </p>
        <div className="icon">
          <div className="globe"> <LanguageIcon/> </div>
          <div className="globe"> <TwitterIcon/> </div>
          <div className="globe"><FacebookIcon/></div>
          
          <div className="globe"><InstagramIcon/></div>
          <div className="globe"><PinterestIcon/></div>
        </div>
      </div>
      <div className="sidebar2">
        <h3 className="design">For designers</h3>
        <ul className="listitem1">
          <li className="item1">Go Pro!</li>
          <li className="item1">Explore design work</li>
          <li className="item1">Design blog</li>
          <li className="item1">Overtime podcast</li>
          <li className="item1">Playoffs</li>
          <li className="item1">Weekly Warm-Up</li>
          <li className="item1">Code of conduct</li>
        </ul>
      </div>
      <div className="sidebar3">
        <h3>Hire Designers</h3>
        <ul className="listitem1">
          <li className="item1">Post a job opening</li>
          <li className="item1">Post a freelance project</li>
          <li className="item1">Search for designers</li>
        </ul>
        <h3 className="brand">Brands</h3>
        <li className="item2">Advertise with us</li>
      </div>
      <div className="sidebar4">
        <h3>Company</h3>
        <ul className="listitem1">
          <li className="item1">About</li>
          <li className="item1">Careers</li>
          <li className="item1">Support</li>
          <li className="item1">Media kit</li>
          <li className="item1">Testmonials</li>
          <li className="item1">API</li>
          <li className="item1">Terms of service</li>
          <li className="item1">Privacy policy</li>
          <li className="item1">Cookie policy</li>
        </ul>
      </div>
      <div className="sidebar5">
        <h3>Directories</h3>
        <ul className="listitem1">
          <li className="item1">Design jobs</li>
          <li className="item1">Designers for hire</li>
          <li className="item1">Freelance designers for hire</li>
          <li className="item1">Tags</li>
          <li className="item1">Places</li>
        </ul>
        <h3 className="design1">Design assets</h3>
        <ul className="listitem1">
          <li className="item1">Creative Market</li>
          <li className="item1">Fontspring</li>
          <li className="item1">Font Squirrel</li>
        </ul>
      </div>
      <div className="sidebar6">
        <h3>Design Resources</h3>
        <ul className="listitem1">
          <li className="item1">Freelancing</li>
          <li className="item1">Design Hiring</li>
          <li className="item1">Design Portfolio</li>
          <li className="item1">Design Education</li>
          <li className="item1">Creative Process</li>
          <li className="item1">Design Industry Trends</li>
        </ul>
      </div>
      <div className="temperate">Hello World</div>
    </div>
  );
};

export default Lowerbar;
