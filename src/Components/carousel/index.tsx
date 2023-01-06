import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./data";
import './carousel.css'

/* command*/
export type Image = {
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
        {images.map((item: Image) => (
          <div key={item.id}>
            <img className="w-312px h-312px display-block mx-auto" src={item.src} alt={item.alt} />
            <h2 className="text-light-black lh-35px fs-28px font-700 mt-10px mb-5px px-20px text-center">
              {item.title}</h2>
            <p className="text-light-grey font-500 fs-16px lh-22px mt-10px px-10px mb-10px text-center">
              {item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}


export default Carousel;