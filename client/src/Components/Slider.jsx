import "../../src/Assets/Css/Slider.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

// eslint-disable-next-line react/prop-types
export default function Recommender({ location, type, price, rating }) {
  const [data, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecommendedData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/recommend/?location=${location}&type=${type}&price=${price}&rating=${rating}`
      );
      setMyData(res.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendedData();
  }, [location, type]);

  const settings = {
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
      <h1>Similar Experiences</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item._id} className="card-container">
            <div className="card-column">
              <img
                src={`../../src/Assets/images/Room/${item.Images}`}
                alt={item.Images}
                style={{ width: "100%", height: "100%", aspectRatio: "9/9" }}
              />
              <div className="card-room-body">
                <h3>
                  <a href="#">{item.Type}</a>
                </h3>
                <strong>From Rs {item.Price} / per night</strong>
                <br />
                <strong>Location: {item.Location}</strong>
                <p>
                  Reviews: {item.Reviews.slice(0, 100)}
                  {item.Reviews.length > 60 && `.......`}
                  <a href="#">Read More</a>
                </p>
                <p>Rating: {item.Rating}</p>
                <p>Similarity Score: {item.similarity}</p>
                <div>
                  <Link to={`/BookNow/${item._id}`}>
                    BOOK NOW{" "}
                    <i
                      className="fa fa-angle-right fa-1x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
