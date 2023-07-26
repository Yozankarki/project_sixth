import "../Assets/Css/Aboutus.css";
export default function Aboutus() {
  return (
    <section className="flex-container">
      <div className="about-us-left">
        <img
          className="image-primary"
          src="../../src/Assets/images/pexels-pixabay-261101.jpg"
          alt="bedroom"
        />
        <img
          className="image-secondary"
          src="../../src/Assets/images/bedroom.jpg"
          alt="bedroom"
        />
      </div>
      <div className="about-us-right">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            eum laboriosam sapiente dicta doloribus magni? Ea officiis, et quia
            vitae alias praesentium, nisi aspernatur exercitationem nihil totam
            necessitatibus rem dicta!
          </p>
          <p>
            <strong>Watch Video.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="about-us-container">
       <div className="about-us-left">
        <img className="image-primary" src="../../src/Assets/images/bedroom.jpg" alt="bedroom" />
        <img className="image-secondary" src="../../src/Assets/images/bedroom.jpg" alt="bedroom" />
       </div>
       <div className="about-us-right">
        <div className="about-us-content">
          <h1>About Us</h1>
          <hr />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, eum laboriosam sapiente dicta doloribus magni? Ea officiis, et quia vitae alias praesentium, nisi aspernatur exercitationem nihil totam necessitatibus rem dicta!</p>
          <p><strong>Watch Video.</strong></p>
        </div>
       </div>
    </section> */
}
