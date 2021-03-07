import {
  CardText,
  Col,
  Row,
} from "reactstrap";
import Carousel from "./carousel";
import Title from "../../components/placeDetails/titleComponent";
import "./product.css";

const Product = (props) => {
  let space_allowed = {};
  let placetype = {};
  let title = "";
  let city = "";
  let images = {};
  let space_allowed_selection = "Entire Place";
  if(props.currentPlace !== undefined){
   space_allowed =  props.currentPlace.space_allowed;
   placetype = props.currentPlace.place_type;
   title =props.currentPlace.title;
   city  = props.currentPlace.address.city;
   images = props.currentPlace.images;
  }
  if(space_allowed.private_room)space_allowed_selection = "Private Room";
  if(space_allowed.shared_room)space_allowed_selection = "Shared Room";

  
  return (
    <>
      <Row>
        <Col>
          <div className="cart">
            <a href="#">
              <i
                className="far fa-heart"
                style={{
                  color: "black",
                  fontSize: "20px",
                  float: "right",
                  paddingTop: 15,
                }}
              />
            </a>
            <Row className="no-gutters">
              <Col md="4">
                <Carousel   images = {images}/>
              </Col>
              <Col md="8">
                <div className="title">
                  <p> {space_allowed_selection} in {city}</p>
                  <p className="p2">{title}</p>
                  <hr
                    style={{
                      width: 40,
                      float: "left",
                      marginBottom: 5,
                      marginTop: 5,
                    }}
                  />
                  <br />
                  <CardText>
                    4 guests · 2 bedrooms · 4 beds · 1 bathroom <br />
                    wifi . kitchen . washing machine
                    <Title className="titleMain"
                      data={{
                        rating: 4.95,
                        numOfRaters: 19,
                      }}
                    />
                  </CardText>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Product;
