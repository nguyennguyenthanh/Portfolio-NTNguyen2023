import React, { useState, useEffect } from 'react';
import './theme.css';

const Theme = () => {
  const [dark, setDark] = useState(true);


  useEffect(() => {
    if (dark) {
      document.documentElement.style.setProperty('--bgColor', '#162052');
      document.documentElement.style.setProperty('--whiteColor', '#fff');
      document.documentElement.style.setProperty('--grayColor', '#bbb');
    } else {
      document.documentElement.style.setProperty('--bgColor', '#fdfdfd');
      document.documentElement.style.setProperty('--whiteColor', '#000');
      document.documentElement.style.setProperty('--grayColor', '#424242');
    }
  }, [dark])
  return (
    <div id="theme">
      {
        dark ? <i className="fa-solid fa-sun" onClick={() => setDark(false)}></i> : <i className="fa-solid fa-moon" onClick={() => setDark(true)}></i>
      }
    </div>
  )
}

export default Theme