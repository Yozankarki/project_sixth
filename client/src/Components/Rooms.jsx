/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllData } from "../Features/rooms/getRoomSlice";

import "../Assets/Css/Rooms.css";

export default function Rooms() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomData = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  const renderRooms = () => {
    if (roomData.loading) {
      return <h2>Loading....</h2>;
    }

    return roomData.rooms.map((room) => (
      <div
        className="card-column"
        key={room._id}
        onClick={() => {
          navigate(`/room/${room._id}`);
        }}
      >
        <figure>
          <img
            src={`../../src/Assets/images/Room/${room.Images}`}
            alt="some image"
          />
        </figure>
        <div className="card-room-body">
          <h3>
            <a href="#">{room.Type}</a>
          </h3>
          <strong>Rs {room.Price} /- per night</strong>
        </div>
      </div>
    ));
  };

  return (
    <main className="room-section">
      <div className="room-header">
        <h1>Our Rooms</h1>
      </div>
      <div className="card-container">{renderRooms()}</div>
    </main>
  );
}
