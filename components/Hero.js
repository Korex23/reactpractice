import digital from "../images/soilless.png";
import { Link } from "react-router-dom";
export const HeroSection = () => {
  return (
    <header className="header">
      <section className="hero_s">
        <div className="content">
          <div className="herotext">
            <div className="heroH1">
              <h1>We transform the</h1>
              <h1>Agriculture world</h1>
            </div>
            <div className="BtnStyle">
              <Link to={"/SignUp"}>
                <span>Get Started</span>
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export const AboutUs = () => {
  return (
    <section className="big h-60px">
      <div className="AboutHero">
        <div className="logo">
          <div>
            <img src={digital} />
          </div>
        </div>
      </div>
    </section>
  );
};
