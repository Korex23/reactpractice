import soilless from "../images/soilless.png";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-green navig navbar-expand-lg fixed-top mx-3">
      <a href="#" className="navbar-brand ">
        <img src={soilless} />
      </a>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navigate"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navigate">
        <ul className="navbar-nav ms-auto mx-5">
          <li className="navbar-item mx-3 ">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item mx-3">
            <Link to={"/About"} className="nav-link">
              About
            </Link>
          </li>
          <li className="navbar-item mx-3">
            <Link to={"/Contact"} className="nav-link">
              Contact
            </Link>
          </li>
          <li className="navbar-item mx-3">
            <Link to={"/Product"} className="nav-link">
              Product
            </Link>
          </li>
          <li className="navbar-item">
            <a href="#" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
