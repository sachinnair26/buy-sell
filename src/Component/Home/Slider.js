import React, { Component } from 'react';
import {Carousel,Card} from 'antd';
import './Slider.css';
import a from './pics/1.jpg'
import b from './pics/2.jpg'
import c from './pics/3.jpg'
import d from './pics/4.jpg'

class Slider extends Component {


  render() {
      return (
      
        <div className='cardi'>
        <Carousel autoplay className='adjusti'>
          <div><img className='imagei'  src={a} height={600} alt='mobile pic 1' /></div>
          <div><img className='imagei'  src={b} height={600} alt='mobile pic 2' /></div>
          <div><img className='imagei'  src={c} height={600} alt='Laptop pic 1' /></div>
          <div><img className='imagei'  src={d} height={600} alt='Laptop pic 2' /></div>
        </Carousel>
        </div>
      
    );
  }
}

export default Slider;
