import "../../Assets/Css/BookNow.css";
export default function BookNow() {
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
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="hidden"
                          placeholder="Enter Name:"
                          required
                        />
                      </div>
                      <span className="in-out hidden-xs hidden-sm">
                        &#8652;
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Room Type: "
                          type="hidden"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Room No:"
                          type="hidden"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Check In</span>
                        <input className="form-control" type="date" required />
                      </div>
                      <span className="in-out hidden-xs hidden-sm">
                        &#8652;
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Check out</span>
                        <input className="form-control" type="date" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group">
                        <span className="form-label">No of rooms</span>
                        <select className="form-control">
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
                        <select className="form-control">
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
                        <select className="form-control">
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
