import React from 'react';
import './Info.scss';

function Info() {
  return (
    <div className="info">
      <h1 className="info__name">Brian Sai</h1>
      <h2 className="info__welcome">WELCOME TO MY PORTFOLIO!</h2>
      <div className="info__typewriter">
        <div className="info__typewriter--content">Full Stack Developer</div>
      </div>
    </div>
  );
}

export default Info;
