import React, { Component } from 'react';
import Header from './Component/Header';
import './Component/Header.css'
import Slider from './Component/Home/Slider';
import './Component/Home/Slider.css'
import './Component/Home/Block';
import './Component/Home/Block.css';
import Grid from './Component/Home/Grid';
import FourthComponent from './Component/Home/FourthComponent';
import './Component/Home/FourthComponent.css';
import FifthComponent from './Component/Home/FifthComponent';
import './Component/Home/FifthComponent.css';
import './Home.css';
import Footer from './Component/Home/Footer';
import './Component/Home/Footer.css';
import Product from './Component/Product/Product';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="Home">
      
      <Slider/>
      <Grid heading={"Featured Products"}/>
      <Grid heading={"Top Rated Products"}/>
      <FourthComponent/>
      <FifthComponent/>
      <Footer/>
      
     
      </div>
    );
  }
}

export default Home;
