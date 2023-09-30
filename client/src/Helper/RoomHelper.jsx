import axios from "axios";

export async function GetRooms(data) {
  try {
    return await axios.get("http://localhost:3000/room/allrooms", data);
  } catch (error) {
    return { error: "Room doesn't exist."};
  }
}
