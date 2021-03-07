import "./styles.css";
import img404 from "./404-Airbnb.gif";
import { Link } from "react-router-dom";

const Eror404 = () => {
  return (
    <div className="info container-fluid row">
      <div className="col-sm-6">
        <h1>Oops!</h1>
        <h2>We can't seem to find the page you're looking for.</h2>
        <h3>Error code: 404</h3>
        <h4>Here are some helpful links instead:</h4>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/placedetails",
                state: { id: "603e06aea4bd761c38bd1d56" },
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link>Search</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
        </ul>
      </div>
      <div className="imgContainer col-sm-6">
        <img src={img404} />
      </div>
    </div>
  );
};

export default Eror404;
