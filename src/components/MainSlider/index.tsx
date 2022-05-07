import React, { FC } from "react";
import Slider, { Settings } from "react-slick";

type Props = {
  children?: React.ReactNode
};

const MainSlider: FC<Props> = ({ children }) => {
  const sliderSettings: Settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
  }

  return (
    <Slider {...sliderSettings}>
      {children}
    </Slider>
  );
}

export default MainSlider;
