import Product from "../../../components/productList/product";
import "./styles.css";
import { Col } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlaces } from "../../../store/actions/placesActions";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PlaceListing = () => {
  
  const listNumber = 10;
  const currentPageNumber = useSelector((state)=>state.places.pageNumber);
  const places = useSelector((state)=>state.places.places);
  const totalPlaces = useSelector((state)=>state.places.totalPlaces);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(getPlaces(0));}, []);
  
  const items = [];
  for(let i = 0 ; i < listNumber ; i++){
    let element = <Product currentPlace = {places[i]} key= {i} currentIndex = {i}/>;
    items.push(element);}

  console.log(totalPlaces);

  const pages = [];
  for(let i = 0 ; i < Math.ceil(totalPlaces/listNumber) ;i++){

    
  pages.push(<PaginationItem active={i === currentPageNumber} key={i}>
    <PaginationLink  onClick = {()=>handlePageClick(i)}>
      {i + 1}
    </PaginationLink>
</PaginationItem>)

  }
  const handlePageClick = (i)=>{

    console.log(i);
    dispatch(getPlaces(i));
    
  }
  const handleOnPrevious = ()=>{

    let newpage = currentPageNumber-1;
    dispatch(getPlaces(newpage));

  }

  const handleOnNext = ()=>{

    let newpage = currentPageNumber+1;
    dispatch(getPlaces(newpage));
  }
  


  return (
    <>
      
      <section className="row container-fluid p-0 m-0">
        <Col md="7">
          <div className="top">
            <h2>Stays in selected map area</h2>
            <br />
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              Cancelation flexibility
            </button>
            {"\u00a0"}
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              Type of places
            </button>
            {"\u00a0"}
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              Price
            </button>
            {"\u00a0"}
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              Instant Book
            </button>
            {"\u00a0"}
            <button
              type="button"
              className="btn btn border-secondary rounded-pill button"
            >
              More Filters
            </button>
          </div>
          <br/>
          <div style={{ marginLeft: 20 }}>
            <p>Enter dates and number of guests to see the total price per night.</p>
            <hr/>
            <p  className="p2" style={{fontSize:15 , fontWeight:350 , marginTop:30 , marginBottom:30}} >
              Review COVID-19 travel restrictions before you book . <a href="#">Learn more</a>
            </p>
          </div>
          {items}
          <Pagination className="pagination">

            <PaginationItem disabled={currentPageNumber <= 0}>
              <PaginationLink  previous onClick= {handleOnPrevious} />
            </PaginationItem>
          
            {pages}

            <PaginationItem disabled={currentPageNumber == pages.length - 1 }>
              <PaginationLink next onClick= {handleOnNext} />
            </PaginationItem>

          </Pagination>
          
        </Col>
        <Col md="5">
          <div className="col-5 container-fluid bg-light p-0">
            <img className="sticky-top" src="map.PNG" />
          </div>
        </Col>
      </section>
    </>
  );
};
export default PlaceListing;

