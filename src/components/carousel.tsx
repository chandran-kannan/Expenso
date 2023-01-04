import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./images";

/* command*/
interface Iimage {
  id: number,
  src: string,
  alt: string,
  heading: string,
  subhead: string,
}

const Carousel = () => {
  const carousalSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    //   autoplaySpeed: 2000,

  };
  return (
    <div className="w-350 p-lf-rt-15 m-auto display-block">
      <Slider  {...carousalSettings}>
        {images.map((item: Iimage) => (
          <div key={item.id}>
            <img className="w-312 h-312 display-block m-auto" src={item.src} alt={item.alt} />
            <h2 className="carousel-heading-color line-height-35 font-size-28 font-700 m-top-10 m-bot-5 p-lf-rt-20">
              {item.heading}</h2>
            <p className="carousel-subheading-color font-500 font-size-16 line-height-22 m-top-10 p-lf-rt-10 m-bot-10">
              {item.subhead}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}


export default Carousel;