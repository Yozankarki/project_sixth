import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllData } from "../Features/rooms/getRoomSlice";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import Rating from "react-rating";
import Slider from "./Slider";

export default function PreviewRooms() {
  const [rating, setRating] = useState(1);
  //this below code is for finding room id from url
  const { roomID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch, roomID]);

  const singleRoom = useSelector((state) => {
    return state.app.rooms;
  });
  const room = singleRoom.find((room) => room._id === roomID);
  if (!room) {
    return <div>Room not found</div>;
  }

  const handleRatingChange = (value) => {
    // Round the value to one decimal place (optional)
    const roundedValue = Math.round(value * 10) / 10;
    setRating(roundedValue);
  };

  return (
    <>
      <Navbar />
      <main className="room-section">
        <div className="room-header">
          <h1>Our Rooms</h1>
        </div>
        <div className="card-container">
          <div className="card-column" key={room._id}>
            <a href="">
              <img
                src={`../../src/Assets/images/Room/${room.Images}`}
                alt="some image"
              />
            </a>
            <div className="card-room-body">
              <h3>
                <a href="#">{room.Type}</a>
              </h3>
              <strong>From {room.Price} / per night</strong>
              <br />
              <strong>Location: {room.Location}</strong>
              <p>{room.Reviews}</p>
              <div>
                <Rating
                  emptySymbol={<i className="fa fa-star-o small-star" />}
                  fullSymbol={<i className="fa fa-star small-star" />}
                  className="room-rating"
                  initialRating={1}
                  onClick={handleRatingChange}
                />
                {rating === 1 ? (
                  <strong> {rating} Star</strong>
                ) : (
                  <strong> {rating} Stars</strong>
                )}
              </div>
              <div>
                <a href="/BookNow">
                  BOOK NOW{" "}
                  <i className="fa fa-angle-right fa-1x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Slider location={room.Location} price={room.Price} type={room.Type} />
      <Footer />
    </>
  );
}
