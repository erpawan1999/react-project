import React from 'react';
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarmenu">
            <ul className="listitem">
                <li className="specialitem">dribble</li>
                <li className="item">Inspiration</li>
                <li className="item">Find Work</li>
                <li className="item">Learn Design</li>
                <li className="item">Go Pro</li>
                <li className="item">Design Files</li>
                <li className="item">Hire Designer</li>
            </ul>           
        </div>
        <div className='rightbar' >
                <label ><SearchIcon className="item" /></label>
                <label ><a href="/">Sign In</a></label>
                <label ><button className="btn">Share My Work</button> </label>
        </div>
        <div className="itemnumber">Design files are ready</div>
        
    </div>
  )
}
// comment are given below 

export default Topbar;
