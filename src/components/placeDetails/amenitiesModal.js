import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import './amenitiesModal.css'
const AmenitiesModal = (props) => {
 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="button" color="secondary" onClick={toggle}>
        Show all amenities
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        centered
        scrollable
        size="lg"
        contentClassName="modalStyle"
      >
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h2>Amenities</h2>
          <h3>Essentials</h3>
          {props.amenities.essential.desk_workspace ? (
            <p>Desk/Workspace</p>
          ) : (
            ""
          )}
          {props.amenities.essential.iron ? <p>Iron</p> : ""}
          {props.amenities.essential.hair_dryer ? <p>Hair dryer</p> : ""}
          {props.amenities.essential.essentials ? (
            <p id="essentails">
              <p>Essentials</p>
              <span>(Towels, bed sheets, soap, and toilet paper)</span>
            </p>
          ) : (
            ""
          )}
          {props.amenities.essential.shampoo ? <p>Shampoo</p> : ""}
          {props.amenities.essential.closet_drawers ? (
            <p>closet/Drawers</p>
          ) : (
            ""
          )}
          {props.amenities.essential.tv ? <p>TV</p> : ""}
          {props.amenities.essential.heat ? <p>Heating</p> : ""}
          {props.amenities.essential.wifi ? <p>Wifi</p> : ""}
          {props.amenities.essential.breakfast_coffee_tea ? (
            <p>breakfast & coffee & tea</p>
          ) : (
            ""
          )}
          {props.amenities.essential.air_conditioning ? (
            <p>Air conditioning</p>
          ) : (
            ""
          )}
          {props.amenities.essential.fireplace ? <p>Fireplace</p> : ""}
          <hr />

          <h3>Facilities</h3>
          {props.amenities.facilities.kitchen ? <p>Kitchen</p> : ""}
          {props.amenities.facilities.pool ? <p>Pool</p> : ""}
          {props.amenities.facilities.parking ? <p>Parking</p> : ""}
          {props.amenities.facilities.gym ? <p>Gym</p> : ""}
          {props.amenities.facilities.laundry ? <p>Laundry Washer</p> : ""}
          {props.amenities.facilities.hot_tub ? <p>Hot tub</p> : ""}
          <hr />

          <h3>Safety</h3>
          {props.amenities.safety.smoke_detector ? <p>Smoke detector</p> : ""}
          {props.amenities.safety.first_aid_kit ? <p>First aid kit</p> : ""}
          {props.amenities.safety.fire_extinguisher ? (
            <p>Fire extinguisher</p>
          ) : (
            ""
          )}
          {props.amenities.safety.lock_on_bedroom_door ? (
            <p>Lock on bedroom door</p>
          ) : (
            ""
          )}
          <hr />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AmenitiesModal;
