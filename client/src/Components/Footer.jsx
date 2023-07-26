import "../Assets/Css/Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Guideal</h3>
        <p>Find your budget hotel in your desired location!</p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy;2023 Guideal</p>
        <p>
          designed and developed by <span>Yojan Karkis</span>
        </p>
      </div>
    </footer>
  );
}
