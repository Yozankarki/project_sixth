/* eslint-disable react/prop-types */
import "../Assets/Css/Rooms.css";
import { getAllData } from "../Features/rooms/getRoomSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Rooms() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomData = useSelector((state) => {
    return state.app;
  });
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);
  console.log(roomData.rooms);

  return (
    <main className="room-section">
      <div className="room-header">
        <h1>Our Rooms</h1>
      </div>
      <div className="card-container">
        {roomData.loading ? (
          <h2>Loading....</h2>
        ) : (
          roomData.rooms.map((e) => {
            return (
              <div
                className="card-column"
                key={e._id}
                onClick={() => {
                  navigate(`/room/${e._id}`);
                }}
              >
                <figure>
                  <img
                    src={`../../src/Assets/images/Room/${e.Images}`}
                    alt="some image"
                  />
                </figure>
                <div className="card-room-body">
                  <h3>
                    <a href="#">{e.Type}</a>
                  </h3>
                  <strong>{e.Price}/ per night</strong>
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
