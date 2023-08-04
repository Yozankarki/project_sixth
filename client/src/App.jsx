import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Rooms from "./Components/Rooms";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Aboutus from "./Components/Aboutus";
import Features from "./Components/Features";
import PageNotFound from "./PageNotFound";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Admin/Dashboard";
import PreviewRooms from "./Components/PreviewRooms";
export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Rooms />
            <Aboutus />
            <Features />
            <Footer />
          </>
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/room/:roomID" element={<PreviewRooms />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
