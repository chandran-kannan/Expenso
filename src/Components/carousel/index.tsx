import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./data";

/* command*/
interface Iimage {
  id: number,
  src: string,
  alt: string,
  title: string,
  description: string,
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
    <div className="w-350px px-15px m-auto display-block">
      <Slider  {...carousalSettings}>
        {images.map((item: Iimage) => (
          <div key={item.id}>
            <img className="w-312px h-312px display-block m-auto" src={item.src} alt={item.alt} />
            <h2 className="carousel-heading-color line-height-35px font-size-28px font-700 m-top-10px m-bot-5px px-20px">
              {item.title}</h2>
            <p className="carousel-subheading-color font-500 font-size-16px line-height-22px m-top-10px px-10px m-bot-10px">
              {item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}


export default Carousel;