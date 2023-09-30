import "../../Assets/Css/Admin/Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="col-2">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ position: "fixed", height: "100vh" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">Sidebar</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="/" className="nav-link active" aria-current="page">
                <i className="fa-solid fa-house m-2"></i>
                Home
              </a>
            </li>
            <li>
              <a href="/Dashboard" className="nav-link text-white ">
                <i className="fa-solid fa-gauge m-2"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/admin/Orders" className="nav-link text-white">
                <i className="fa-regular fa-calendar-days m-2"></i>
                Orders
              </a>
            </li>
            <li>
              <a href="/admin/BookedRooms" className="nav-link text-white">
                <i className="fas fa-th-large m-2"></i>
                Booked Rooms
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="fa-solid fa-user m-2"></i>
                Customers
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://openclipart.org/image/800px/287493"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>Admin</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="b-example-divider"></div>
      </div>
    </>
  );
}
