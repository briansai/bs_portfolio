import React from 'react';
import './Info.scss';

function Info() {
  return (
    <div className="info">
      <h1 className="info__name">Brian Sai</h1>
      <h2 className="info__welcome">WELCOME TO MY PORTFOLIO!</h2>
      <p className="info__summary">
        I’m a Full Stack Developer based in San Francisco Bay Area. Thanks for
        stopping by!
      </p>
      <div className="info__btn">
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Info;
