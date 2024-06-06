import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import invernoImage from '../Assets/IMG/img1.jpg';

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <img className="img-responsive" src={invernoImage} alt="Imagem 3" />
        </div>
        <div>
            <img className="img-responsive" src={invernoImage} alt="Imagem 3" />
        </div>
        <div>
            <img className="img-responsive" src={invernoImage} alt="Imagem 3" />
        </div>
        <div>
            <img className="img-responsive" src={invernoImage} alt="Imagem 3" />
        </div>
        <div>
            <img className="img-responsive" src={invernoImage} alt="Imagem 3" />
        </div>
        <div>
            <img className="img-responsive" src={invernoImage} alt="Imagem 3" />
        </div>
        <div>
            <img className="img-responsive" src={invernoImage} alt="Imagem 3" />
        </div>
        <div>
            <img className="img-responsive" src={invernoImage} alt="Imagem 3" />
        </div>
      </Slider>
    </div>
  );
}


export default Responsive;
