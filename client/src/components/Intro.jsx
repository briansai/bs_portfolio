import React from 'react';
import Info from './Info';
import { SpaceSVG } from '../img/svg';
import './Intro.scss';

function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro__info">
        <Info />
      </div>
      <div className="intro__svg">
        <SpaceSVG />
      </div>
    </section>
  );
}

export default Intro;
