import Dashboard from "./Dashboard";
import "../../Helper/RoomHelper";
import { useState } from "react";
import axios from "axios";

async function GetBookedRooms(data) {
  try {
    return await axios.get("http://localhost:3000/booking/allbooking", data);
  } catch (error) {
    return { error: "Booking doesn't exist." };
  }
}

export default function BookedRooms() {
  const [BookedData, setBookedData] = useState({});
  GetBookedRooms()
    .then((response) => {
      response.data.map((data) => {
        const BookedData = data;
        setBookedData(BookedData);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
      <div className="row">
        <Dashboard />
        <div className="col">
          <div className="mt-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Checked In</th>
                  <th scope="col">Checked Out</th>
                  <th scope="col">No of Rooms</th>
                  <th scope="col">Adults</th>
                  <th scope="col">Children</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" key={BookedData._id}>
                    {1}
                  </th>
                  <td>{BookedData.CheckIn}</td>
                  <td>{BookedData.CheckOut}</td>
                  <td>{BookedData.No_of_rooms}</td>
                  <td>{BookedData.Adults}</td>
                  <td>{BookedData.Children}</td>
                  <td>
                    <a href="#">Edit</a> | <a href="#">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
