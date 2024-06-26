import React, { useEffect } from 'react';
import '../styles/HeartBg.css';

const HeartBg = () => {
  useEffect(() => {
    const $love = document.querySelectorAll('.heart');
    for (let i = 0; i < 4; i++) {
      document.querySelector('.wrapper').appendChild($love[0].cloneNode(true));
    }
  }, []);

  return (
    <div className="wrapper">
      <svg className="heart" version="1.1"
           xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
           x="0px" y="0px" width="101.7px" height="87.6px" viewBox="0 0 101.7 87.6" enableBackground="new 0 0 101.7 87.6"
           xmlSpace="preserve">
        <path d="M51,12.8c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.1-0.1,0.2C31-10.7,0,0.2,0,28.9c0,27.6,40.7,56.9,50.9,58.8
	        c10.1-1.8,50.9-31.1,50.9-58.8C101.7,0.2,70.7-10.7,51,12.8z"/>
      </svg>
    </div>
  );
}

export default HeartBg;
