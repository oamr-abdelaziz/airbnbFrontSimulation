import Title from "../../../components/placeDetails/titleComponent";
import ImageGallery from "../../../components/placeDetails/imageGalleryComponent";
import AmenitiesModal from "../../../components/placeDetails/amenitiesModal";
import AirBnbNavBar from "../../../components/Nav/nav";

import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DayPicker, { DateUtils } from "react-day-picker";

import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "react-day-picker/lib/style.css";

import { Button, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronDown,
  faChevronUp,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../../axiosInstance";

import homePng from "./media/home.png";
import cleanPng from "./media/clean.png";
import wifiPng from "./media/wifi.png";
import poolPng from "./media/pool.png";
import parkingPng from "./media/parking.png";
import washerPng from "./media/washer.png";
import tvPng from "./media/tv.png";
import kitchenPng from "./media/kitchen.png";
import snowflakePng from "./media/snowflake.png";
import essentialsPng from "./media/essentials.png";
import smokePng from "./media/smokeAlarm.png";
import carbonPng from "./media/carbonAlarm.png";
import avatar from "./media/avatar.png";
import "./styles.css";

export default function PlaceDetails() {
  const location = useLocation();

  const [data, setData] = useState(null);
  const [hostData, setHostData] = useState(null);

  // on componentDidMount get place data and host data
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // place data
      const response = await axiosInstance.get(
        `http://localhost:4000/places/${location.state.id}`
      );
      setData(response.data);
      
      // host data
      const host = await axiosInstance.get(
        `http://localhost:4000/users/${response.data.user_id}`
      );
      setHostData(host.data);

      // reservations data
      const reservations = await axiosInstance.get(
        `http://localhost:4000/reservations/forplace/${response.data._id}`
      );
      handleDisabledDates(reservations.data);
      
    } catch (err) {
      console.log(err);
    }
  };

  //------ calendar
  const [from, setFrom] = useState(undefined);
  const [to, setTo] = useState(undefined);
  const [resNumOfDays, setResNumOfDays] = useState(undefined);
  const [modal, setModal] = useState(false);
  const [disabledDates, setDisabledDates] = useState([]);
  const toggle = () => setModal(!modal);
  const today = new Date();

  const handleDisabledDates = (resDataArr) =>{
     if(resDataArr.length > 0){
      let datesArray = [];

      resDataArr.map((res, index) => {
        let startDate = new Date(res.start_date);
        let beforeStart = new Date(startDate.getTime() - 86400000);
        let endDate = new Date(res.end_date);
        let afterEnd = new Date(endDate.getTime() + 86400000);
        beforeStart.toLocaleDateString();
        afterEnd.toLocaleDateString();

        datesArray.push({
          after: new Date(beforeStart),
          before: new Date(afterEnd),
        });
      });

      setDisabledDates(datesArray);
     }
      
  }

  // reservation receipt
  const [receipt, setReceipt] = useState({
    subTotal: null,
    serviceFee: null,
    total: null,
  });

  const getReceipt = (numOfDays) => {
    setReceipt({
      subTotal: data.price_per_night * numOfDays,
      serviceFee: parseInt(data.price_per_night * numOfDays * 0.14),
      total:
        data.price_per_night * numOfDays +
        parseInt(data.price_per_night * numOfDays * 0.14),
    });
  };

  const calcRange = () => {
    if (from && to) {
      let timeRange = to.getTime() - from.getTime();
      let dayRange = timeRange / (1000 * 3600 * 24);
      setResNumOfDays(dayRange);
      getReceipt(dayRange);
    }
  };

  useEffect(() => {
    calcRange();
  }, [to]);

  // guests dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [guests, setGuests] = useState(1);
  const dropDownToggle = () => setDropdownOpen((prevState) => !prevState);
  const guestsInc = () => {
    setGuests(guests + 1);
  };
  const guestsDec = () => {
    if (guests !== 1) setGuests(guests - 1);
  };

  const [redirect, setRedirect] = useState(false);

  const handleReserveButton = () => {
    if (!from || !to) setModal(true);
    else setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/placedetails/confirm/reservation",
          state: {
            data,
            hostData,
            calendar: { startDate: from, endDate: to },
            daysRange: resNumOfDays,
            numOfGuests: guests,
            receipt,
          },
        }}
      />
    );
  } else {
    return (
      <>
        

        {data && hostData ? (
          <>

            <Title
              data={{
                title: data.title,
                rating: 4.95,
                numOfRaters: 19,
                address: `${data.address.city}, ${data.address.country}`,
              }}
            />

            <ImageGallery
              data={[
                data.images.main_img,
                data.images.other_imgs[0],
                data.images.other_imgs[1],
                data.images.other_imgs[2],
                data.images.other_imgs[3],
              ]}
            />

            <div className="main container d-flex ">
              <div className="placeInfo container">
                <div className="d-flex justify-content-between">
                  <span>
                    <h2>
                      {data.space_allowed.private_room
                        ? "Private room"
                        : data.space_allowed.shared_room
                        ? "Shared room"
                        : "Entire house"}{" "}
                      hosted by {hostData.fname}
                    </h2>
                    <span className="summarySpan">
                      {data.num_guests} guests ·{" "}
                      {data.place_type.apartment
                        ? "Apartment"
                        : data.place_type.house
                        ? "House"
                        : data.place_type.villa
                        ? "Villa"
                        : "Bed & breakfast"}{" "}
                      · {data.num_beds} bed · {data.total_bathrooms} bath
                    </span>
                  </span>
                  <img
                    className="hostImg"
                    src={hostData.profile_img || avatar}
                  />
                </div>
                <hr />

                {data.space_allowed.entire_place ? (
                  <div className="placeFeature d-flex">
                    <img className="icon" src={homePng} />
                    <span>
                      <h3>Entire home</h3>
                      <span className="FeatureSubtitle">
                        You’ll have the house to yourself.
                      </span>
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {true ? (
                  <div className="placeFeature d-flex">
                    <img className="icon" src={cleanPng} />
                    <span>
                      <h3>Enhanced Clean</h3>
                      <span className="FeatureSubtitle">
                        This host committed to Airbnb&rsquo;s 5-step enhanced
                        cleaning process.
                      </span>
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {data.amenities.essential.wifi ? (
                  <div className="placeFeature d-flex">
                    <img className="icon" src={wifiPng} />
                    <span>
                      <h3>Wifi</h3>
                      <span className="FeatureSubtitle">
                        Guests often search for this popular amenity.
                      </span>
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {data.amenities.facilities.pool ? (
                  <div className="placeFeature d-flex">
                    <img className="icon" src={poolPng} />
                    <span>
                      <h3>Pool</h3>
                      <span className="FeatureSubtitle">
                        Guests often search for this popular amenity.
                      </span>
                    </span>
                  </div>
                ) : (
                  ""
                )}
                <hr />

                <p className="description">{data.summary}</p>
                <hr />

                <div className="amenities">
                  <h3>Amenities</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="amenityItem">
                        <img className="icon" src={wifiPng} />
                        <span
                          className={
                            data.amenities.essential.wifi ? "" : "notIncluded"
                          }
                        >
                          Wifi
                        </span>
                      </div>

                      <div className="amenityItem">
                        <img className="icon" src={parkingPng} />
                        <span
                          className={
                            data.amenities.facilities.parking
                              ? ""
                              : "notIncluded"
                          }
                        >
                          Free parking
                        </span>
                      </div>

                      <div className="amenityItem">
                        <img className="icon" src={washerPng} />
                        <span
                          className={
                            data.amenities.facilities.laundry
                              ? ""
                              : "notIncluded"
                          }
                        >
                          Washer
                        </span>
                      </div>

                      <div className="amenityItem">
                        <img className="icon" src={snowflakePng} />
                        <span
                          className={
                            data.amenities.essential.air_conditioning
                              ? ""
                              : "notIncluded"
                          }
                        >
                          Air conditioning
                        </span>
                      </div>

                      <div className="amenityItem">
                        <img className="icon" src={smokePng} />
                        <span
                          className={
                            data.amenities.safety.fire_extinguisher
                              ? ""
                              : "notIncluded"
                          }
                        >
                          Fire extinguisher
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="amenityItem">
                        <img className="icon" src={kitchenPng} />
                        <span
                          className={
                            data.amenities.facilities.kitchen
                              ? ""
                              : "notIncluded"
                          }
                        >
                          Kitchen
                        </span>
                      </div>

                      <div className="amenityItem">
                        <img className="icon" src={poolPng} />
                        <span
                          className={
                            data.amenities.facilities.pool ? "" : "notIncluded"
                          }
                        >
                          Pool
                        </span>
                      </div>

                      <div className="amenityItem">
                        <img className="icon" src={tvPng} />
                        <span
                          className={
                            data.amenities.essential.tv ? "" : "notIncluded"
                          }
                        >
                          TV
                        </span>
                      </div>

                      <div className="amenityItem">
                        <img className="icon" src={essentialsPng} />
                        <span
                          className={
                            data.amenities.essential.essentials
                              ? ""
                              : "notIncluded"
                          }
                        >
                          Essentials
                        </span>
                      </div>

                      <div className="amenityItem">
                        <img className="icon" src={carbonPng} />
                        <span
                          className={
                            data.amenities.safety.smoke_detector
                              ? ""
                              : "notIncluded"
                          }
                        >
                          Smoke alarm
                        </span>
                      </div>
                    </div>
                  </div>
                  <AmenitiesModal amenities={data.amenities} />
                </div>
                <hr />
                <h2>
                  {resNumOfDays
                    ? `${resNumOfDays}  nights in Hurghada`
                    : from
                    ? "Select check-out date"
                    : "Select check-in date"}{" "}
                </h2>
                <div className="calendarRange">
                  <DayPicker
                    month={from}
                    numberOfMonths={2}
                    disabledDays={[{ before: today }, ...disabledDates]}
                    selectedDays={[from, { from, to }]}
                    onDayClick={(date, modifiers = {}) => {
                      if (modifiers.disabled) {
                        return;
                      }
                      const range = DateUtils.addDayToRange(date, {
                        from,
                        to,
                      });
                      setFrom(range.from);
                      setTo(range.to);
                    }}
                  />
                </div>
              </div>

              <div className="reservationCard container">
                <div className="resCardHeader d-flex justify-content-between">
                  <div>
                    <span className="price">${data.price_per_night}</span>
                    <span className="priceNight"> / night</span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faStar}
                    />
                    <span className="rating">4.95</span>
                    <span className="number">(19)</span>
                  </div>
                </div>

                <div className="resCardControls">
                  <div className="calendarModal">
                    <div className="button" onClick={toggle}>
                      <div className="calendarModalBtn d-flex justify-content-between">
                        <span>Pick date</span>
                        <FontAwesomeIcon
                          className="fontIcon"
                          icon={faCalendarAlt}
                        />
                      </div>
                    </div>
                    <Modal
                      isOpen={modal}
                      toggle={toggle}
                      centered
                      scrollable
                      size="lg"
                      contentClassName="calendarModalStyle"
                    >
                      <ModalHeader toggle={toggle}></ModalHeader>
                      <ModalBody>
                        <div className="calendarRange">
                          <DayPicker
                            month={from}
                            numberOfMonths={2}
                            disabledDays={[{ before: today }, ...disabledDates]}
                            selectedDays={[from, { from, to }]}
                            onDayClick={(date, modifiers = {}) => {
                              if (modifiers.disabled) {
                                return;
                              }
                              const range = DateUtils.addDayToRange(date, {
                                from,
                                to,
                              });
                              setFrom(range.from);
                              setTo(range.to);
                            }}
                          />
                        </div>
                      </ModalBody>
                    </Modal>
                  </div>

                  <div className="guestsCounterDrop">
                    <Dropdown isOpen={dropdownOpen} toggle={dropDownToggle}>
                      <DropdownToggle
                        className="button"
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={dropdownOpen}
                      >
                        <div className="guestBtnVal d-flex justify-content-between">
                          <div>
                            <h3>GUESTS</h3>
                            <span>
                              {guests} {guests > 1 ? "guests" : "guest"}
                            </span>
                          </div>
                          {dropdownOpen ? (
                            <FontAwesomeIcon
                              className="fontIcon"
                              icon={faChevronUp}
                            />
                          ) : (
                            <FontAwesomeIcon
                              className="fontIcon"
                              icon={faChevronDown}
                            />
                          )}
                        </div>
                      </DropdownToggle>
                      <DropdownMenu className="dropDownBody">
                        <div className=" d-flex justify-content-between">
                          <span className="guestsCounterHeading">Guests</span>
                          <div>
                            <Button
                              disabled={guests === 1}
                              className="guestsCounterBtn"
                              onClick={guestsDec}
                            >
                              -
                            </Button>
                            <span className="guestsNumHolder">{guests}</span>
                            <Button
                              disabled={guests === data.num_guests}
                              className="guestsCounterBtn"
                              onClick={guestsInc}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="guestsCounterSubtitle">
                          {data.num_guests} guests maximum.
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>

                <div className="button" onClick={handleReserveButton}>
                  {" "}
                  {!from || !to ? "Check availablity" : "Reserve"}
                </div>

                {resNumOfDays ? (
                  <div className="receiptSection">
                    <h3>You won&rsquo;t be charged yet</h3>
                    <div className="receiptItem d-flex justify-content-between">
                      <span>
                        ${data.price_per_night} x {resNumOfDays} nights
                      </span>
                      <span>${receipt.subTotal}</span>
                    </div>
                    <div className="receiptItem d-flex justify-content-between">
                      <span>Service fee</span>
                      <span>${receipt.serviceFee}</span>
                    </div>
                    <hr />
                    <div className="receiptTotal d-flex justify-content-between">
                      <span>Total</span>
                      <span>${receipt.total}</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="reviews container">
              <hr />
            </div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}
