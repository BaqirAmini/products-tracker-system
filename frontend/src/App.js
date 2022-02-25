import React from 'react';
import TopNav from './components/TopNav';
import MainNav from './components/MainNav';
import HumbergurMenu from './components/HumbergurMenu';
import Slider from './components/Slider';
import Banner from './components/Banner';
import NewArrivals from './components/NewArrivals';
import DealOfTheheWeek from './components/DealOfTheWeek';
import BestSeller from './components/BestSeller';
import Benefit from './components/Benefit';
import Blogs from './components/Blogs';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import axios from "axios";

const App = () => {
  return (
    <div className="main-tag">
      <TopNav />
      <MainNav />
      <HumbergurMenu />
      <Slider />
      <Banner />
      <NewArrivals />
      <DealOfTheheWeek />
      <BestSeller />
      <Benefit />
      <Blogs />
      <NewsLetter />
      <Footer />
    </div>
  );
}


export default App;
