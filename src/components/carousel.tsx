import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./images";


const Carousel =()=>
{
    const carousalSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
//   autoplaySpeed: 2000,
   
  };
    return(
        <div className="container">
            <Slider {...carousalSettings}>
            {images.map((item) => (
            <div key={item.id}>
              <img className="img-wid" src={item.src}  alt={item.alt} />
              <h2 className="heading">{item.heading}</h2>
              <p className="subheading">{item.subhead}</p>
            </div> 
          ))}
            </Slider>
        </div>
    )
}


export default Carousel;