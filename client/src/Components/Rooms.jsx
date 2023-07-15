import "../Assets/Css/Rooms.css"
const Card = ()=>{
  return (
    <div className="hotel-room">
            <a href="">
              <img src="../../src/Assets/images/bedroom.jpg" alt="some image" />
            </a>
            <div className="hotel-room-body">
              <h3><a href="#">Standard Room</a></h3>
              <strong>$350.00 / per night</strong>
            </div>
          </div>
)
} 
export default function Rooms() {
  return (
    <main>
    <div className="container">
      <div className="row">
        <div className="card-header">
          <h1>Our Rooms</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="card-column">
          <Card/>
          <Card/>
          <Card/>
          <Card/>  
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  </main>
  )
}
