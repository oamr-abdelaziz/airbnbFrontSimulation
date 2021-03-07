import './imageGalleryComponent.css';
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";


export default function ImageGallery(props) {
    const items = [...props.data];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };

    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="carouselItem"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item}
        >
          <img src={item} />
          <CarouselCaption
          />
        </CarouselItem>
      );
    });

    
    return (
      <>
        <div className="imgsContainer container row">
          <div className="firstMainCol col-md-6">
            <img id="leftImg" height="300" width="100%" src={props.data[0]} />
          </div>
          <div className="secMainCol col-md-6 col-sm-12">
            <div className="container row mb-2">
              <div className="smallImgItem col-md-6 pl-2">
                <img height="150" width="100%" src={props.data[1]} />
              </div>
              <div className="smallImgItem col-md-6 pl-2">
                <img
                  id="rightTopImg"
                  height="150"
                  width="100%"
                  src={props.data[2]}
                />
              </div>
            </div>
            <div className="container row">
              <div className="smallImgItem col-md-6 pl-2">
                <img height="142" width="100%" src={props.data[3]} />
              </div>
              <div className="smallImgItem col-md-6 pl-2">
                <img
                  id="rightBottomImg"
                  height="142"
                  width="100%"
                  src={props.data[4]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="imgCarousel container">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
      </>
    );
}