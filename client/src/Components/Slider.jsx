import { useParams } from "react-router-dom";
import "../../src/Assets/Css/Slider.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default function Recommender(props) {
  console.log(props);
  const { roomID } = useParams();
  console.log(roomID);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="recommendation">
      <h1>Similiar Experiences</h1>
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="#" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="#" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="#" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="#" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="#" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="#" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="#" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="#" />
        </div>
      </Slider>
    </div>
  );
}
