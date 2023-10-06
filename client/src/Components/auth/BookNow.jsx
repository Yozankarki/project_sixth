import { useParams } from "react-router-dom";
import "../../Assets/Css/BookNow.css";
import { useState } from "react";
import { getUserToken } from "../../Helper/AuthHelper";

export default function BookNow() {
  const [user_id, setUser_Id] = useState("");
  console.log(user_id);
  getUserToken()
    .then((user) => {
      setUser_Id(user.data._id);
    })
    .catch((error) => {
      console.log(error);
    });

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numRooms, setNumRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room Id:", id);
    console.log("User Id:", user_id);
    console.log("Check In:", checkIn);
    console.log("Check Out:", checkOut);
    console.log("No of rooms:", numRooms);
    console.log("Adults:", adults);
    console.log("Children:", children);
  };

  return (
    <>
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="booking-form">
                <div className="form-header">
                  <h1>Make your reservation</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <input type="hidden" value={id} className="form-control" />
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="hidden"
                          required
                          onChange={() => setUser_Id(user_id)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Check In</span>
                        <input
                          className="form-control"
                          type="date"
                          required
                          onChange={(e) => setCheckIn(e.target.value)}
                        />
                      </div>
                      <span className="in-out hidden-xs hidden-sm">
                        &#8652;
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Check out</span>
                        <input
                          className="form-control"
                          type="date"
                          required
                          onChange={(e) => setCheckOut(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group">
                        <span className="form-label">No of rooms</span>
                        <select
                          className="form-control"
                          onChange={(e) => setNumRooms(e.target.value)}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <span className="form-label">Adults</span>
                        <select
                          className="form-control"
                          onChange={(e) => setAdults(e.target.value)}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <span className="form-label">Children</span>
                        <select
                          className="form-control"
                          onChange={(e) => setChildren(e.target.value)}
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-btn">
                        <button className="submit-btn">
                          Check availability
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
