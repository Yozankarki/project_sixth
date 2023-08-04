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

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="card-header">
            <h1>Our Rooms</h1>
          </div>
        </div>
        <div className="row">
          <div className="card-column">
            {roomData.loading ? (
              <h2>Loading....</h2>
            ) : (
              roomData.rooms.map((e) => {
                return (
                  <div
                    className="hotel-room"
                    key={e._id}
                    onClick={() => {
                      navigate(`/room/${e._id}`);
                    }}
                  >
                    <a href="">
                      <img
                        src={`../../src/Assets/images/${e.image}`}
                        alt="some image"
                      />
                    </a>
                    <div className="hotel-room-body">
                      <h3>
                        <a href="#">{e.type}</a>
                      </h3>
                      <strong>RS.{e.price}/ per night</strong>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
