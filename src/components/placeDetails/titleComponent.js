import "./titleComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Title(props){
    
    return (
      <div className="titleMain container">
        <h1>{props.data.title}</h1>
        <FontAwesomeIcon className="icon" icon={faStar} />
        <span className="rating">{props.data.rating}</span>
        <span className="number">({props.data.numOfRaters})</span>
        <span className="dotSeparator align-text-bottom">.</span>
        <span className="address">{props.data.address}</span>
      </div>
    );
}