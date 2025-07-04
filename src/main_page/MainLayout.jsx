import React from "react";
import Hero from "./Home/Hero";
import About from "./About/About";
import Menu from "./Menu/Menu";
import Rate from "./Rate/Rate";
import Promo from "./Promo/Promo";
import Testimonials from "./Testimoni/Testimoni";
import Sosmed from "./SocialMedia/Sosmed";

const MainLayout = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Rate />
      <Promo />
      <Testimonials />
      <Sosmed />
    </div>
  );
};

export default MainLayout;
