import { Button, Container } from "reactstrap";
import "./styles.css";
import { userAxiosInstance } from "../../axiosInstance";
import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({
    // _id: "5ff7973a24333c2300f38da8",
    // fname: "omar",
    // lname: "abdelaziz",
    // email: "omar96_96@hotmail.com",
    // password: "123456",
    // phone_number: "01091033447",
    // profile_img: "",
  });

  useEffect(() => {
    // userAxiosInstance.get("/me")
    userAxiosInstance.get("/602d5964fa1345197c1a7f70")
    .then(function(response){
      // console.log(response)
      setObj(response.data)
      setFormData(response.data);
    })
    .catch(function(err){
      console.log(err);
    })
  }, []);

  const setDB = () => {
    userAxiosInstance.put(`/edit/${obj._id}`,formData)
    .then(function(response){
      setObj(response.data);
    })
    .catch(function(err){
      console.log(err);
    })
      setModal(!modal);
  };
  const validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [formData, setFormData] = React.useState({
    email: "",
    fname: "",
    lname: "",
    phone_number: "",
    Address: "",
  });
  const [formDataError, setFormDataError] = React.useState({
    emailError: "",
  });
  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      if (e.target.value.length === 0) {
        setFormDataError({
          ...formDataError,
          emailError: "email is required",
        });
      } else if (!e.target.value.match(validMail)) {
        setFormDataError({
          ...formDataError,
          emailError: "Email format is not valid",
        });
      } else {
        setFormDataError({
          ...formDataError,
          emailError: "",
        });
      }
    }
  };

  const DayOptions = () => {
    let arr = [];
    for (let index = 1; index <= 31; index++) {
      arr.push(<option key={index}>{index}</option>);
    }
    return arr;
  };

  const YearOptions = () => {
    let arr = [];
    for (let index = 1901; index <= 2021; index++) {
      arr.push(<option key={index}>{index}</option>);
    }
    return arr;
  };

  const toggle = () => setModal(!modal);

  return (
    <>
      <Container>
        <h1 style={{ color: "#565358" }}>Personal info</h1>
        <br />
        <br />
        <Container fluid className="row">
          <div className="col-7">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h6>Legal name</h6>
                <p
                  style={{ color: "rgba(0,0,0,0.7)" }}
                >{`${obj.fname} ${obj.lname}`}</p>
              </div>
              <div>
                <Button
                  style={{
                    color: "#2A465E",
                    backgroundColor: "white",
                    border: "none",
                  }}
                  className="font-weight-bolder btn-lg"
                  // color="danger"
                  onClick={toggle}
                >
                  Edit
                </Button>
                <Modal
                  isOpen={modal}
                  toggle={toggle}
                  contentClassName="modalClass"
                >
                  <ModalHeader toggle={toggle}>
                    Edit your personal information
                  </ModalHeader>
                  <ModalBody>
                    <h5>Legal name</h5>
                    <div
                      className="row mb-2 "
                      style={{
                        display: "flex",
                        // ,border:'0.5px rgba(0,0,0,0.3) solid' , borderRadius:'4px '
                      }}
                    >
                      <div className="col-6">
                        <h6>First Name</h6>
                        <Input
                          id="fName"
                          name="fname"
                          value={formData.fname}
                          onChange={handleForm}
                          className={`form-control mb-2  `}
                          placeholder="First-Name"
                        ></Input>
                      </div>
                      <div className="col-6">
                        <h6>Last Name</h6>
                        <Input
                          id="lName"
                          name="lname"
                          value={formData.lname}
                          onChange={handleForm}
                          className={`form-control mb-2  `}
                          placeholder="last-Name"
                        ></Input>
                      </div>
                    </div>

                    <div className="mb-2">
                      <h6>Gender</h6>
                      <Input type="select" name="gender" id="exampleSelect">
                        <option>Not Selected</option>
                        <option>Male</option>
                        <option>Female</option>
                      </Input>
                    </div>
                    <h5>Birth Date</h5>

                    <div
                      className="row mb-2 "
                      style={{
                        display: "flex",
                        //  ,border:'0.5px rgba(0,0,0,0.3) solid' , borderRadius:'4px '
                      }}
                    >
                      <div className="col-4">
                        <h6>Month</h6>
                        <Input type="select" name="birthMonth" id="birthMonth">
                          <option>January</option>
                          <option>February</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>Octobre</option>
                          <option>November</option>
                          <option>December</option>
                        </Input>
                      </div>
                      <div className="col-4">
                        <h6>Day</h6>
                        <Input
                          type="select"
                          name="birthDay"
                          id="birthDay"
                          className="mb-2"
                        >
                          {DayOptions()}
                        </Input>
                      </div>
                      <div className="col-4">
                        <h6>Year</h6>
                        <Input
                          type="select"
                          name="birthYear"
                          id="birthYear"
                          className="mb-2"
                        >
                          {YearOptions()}
                        </Input>
                      </div>
                    </div>
                    <div className="mb-2">
                      <h6>Email Address</h6>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleForm}
                        className={`form-control mb-2 ${
                          formDataError.emailError ? "border-danger" : ""
                        }`}
                        placeholder="email"
                      ></input>
                    </div>
                    <div className="mb-2">
                      <h6>Phone number</h6>
                      <input
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleForm}
                        className="form-control mb-2"
                        placeholder="phone number"
                      ></input>
                    </div>
                    <div className="mb-2">
                      <h6>Address</h6>
                      <input
                        name="Address"
                        value={formData.Address}
                        onChange={handleForm}
                        className="form-control mb-2"
                        placeholder="Address"
                      ></input>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={setDB}>
                      Submit
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h6>Gender</h6>
                <p style={{ color: "rgba(0,0,0,0.7)" }}>Not specified</p>
              </div>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h6>Date of birth</h6>
                <p style={{ color: "rgba(0,0,0,0.7)" }}>January 5, 1997</p>
              </div>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h6>Email address</h6>
                <p style={{ color: "rgba(0,0,0,0.7)" }}>{obj.email}</p>
              </div>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h6>Phone number</h6>
                <p style={{ color: "rgba(0,0,0,0.7)" }}>{obj.phone_number}</p>
              </div>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h6>Address</h6>
                <p style={{ color: "rgba(0,0,0,0.7)" }}>Not provided</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-1"></div>

          <div
            className="col-4"
            style={{
              border: "1px solid rgba(0,0,0,0.3)",
              height: "fit-content",
            }}
          >
            <br />
            <svg
              fill="#60B6B5"
              aria-hidden="true"
              display="block"
              viewBox="0 0 24 24"
              style={{ height: 40, width: 40 }}
              className="mb-2"
            >
              <path d="M3.83 9.4a.5.5 0 01-.17-.03L.41 8.19a.5.5 0 01.34-.94L4 8.43a.5.5 0 01-.17.97zM.59 11.55l2.6-.27a.5.5 0 00-.1-1l-2.61.27a.5.5 0 00.05 1 .63.63 0 00.05 0zm4.28-4.18a.5.5 0 00-.02-.71L2.98 4.88a.5.5 0 10-.69.73l1.87 1.78a.5.5 0 00.71-.02zm3.68 6.32v3.28a5.28 5.28 0 005.28 5.28h2.55a5.17 5.17 0 005.07-5.28l-.07-3.32a2 2 0 00-2-1.96h-8.82a2 2 0 00-2 2zm4.7 2.05a1.74 1.74 0 112.6 1.51 4.18 4.18 0 00.17.83 5.97 5.97 0 00.71 1.15.43.43 0 01-.41.58h-2.63a.43.43 0 01-.41-.58 5.8 5.8 0 00.66-1.11 5.17 5.17 0 00.19-.87 1.74 1.74 0 01-.87-1.51z"></path>
              <path
                fill="#484848"
                d="M23 19.81v-9.32a.5.5 0 00-.5-.5h-1.11l-.22-.17a.6.6 0 01-.18-.43v-2.4a6 6 0 00-12 0v2.4a.6.6 0 01-.6.6h-.9a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h15a.5.5 0 00.5-.5.5.5 0 011 0 1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h.5v-2a7 7 0 0114 0v2h.5a1.5 1.5 0 011.5 1.49v9.32a.5.5 0 01-1 0zM14.77 9a.5.5 0 000 1h4.13a.6.6 0 00.6-.6V7a4.5 4.5 0 00-9 0v2.4a.6.6 0 00.6.6h1.25a.5.5 0 000-1h-.85V7a3.5 3.5 0 017 0v2z"
              ></path>
            </svg>
            <h5 style={{ lineHeight: "2", color: "rgba(0,0,0,0.8)" }}>
              Which details can be edited?
            </h5>
            <p>
              Details Airbnb uses to verify your identity can’t be changed.
              Contact info and some personal details can be edited, but we may
              ask you verify your identity the next time you book or create a
              listing.
            </p>
            <hr
              className="ml-0 mr-0"
              style={{ width: "70px", marginTop: "2em", marginBottom: "2em" }}
            />
            <svg
              fill="#60B6B5"
              aria-hidden="true"
              display="block"
              viewBox="0 0 24 24"
              style={{ height: 40, width: 40 }}
            >
              <path d="M18.66 6.51L3.82 16.16A1 1 0 004.37 18h15.62a1 1 0 001-1V7.76a1.5 1.5 0 00-2.32-1.26z"></path>
              <path
                fill="#484848"
                d="M9.25 12A1.25 1.25 0 118 10.75 1.25 1.25 0 019.25 12zM21 4H7a.5.5 0 000 1h14a1 1 0 011 1v12a1 1 0 01-1 1h-1.5a.5.5 0 000 1H21a2 2 0 002-2V6a2 2 0 00-2-2zm-5 15H3a1 1 0 01-1-1V6a1 1 0 011-1h1a.5.5 0 000-1H3a2 2 0 00-2 2v12a2 2 0 002 2h13a.5.5 0 000-1zM8.83 7.83A4.25 4.25 0 1012.25 12a4.21 4.21 0 00-.46-1.92.5.5 0 00-.89.45 3.25 3.25 0 01-.61 3.77 3.67 3.67 0 00-4.56.02A3.25 3.25 0 018 8.75a3.3 3.3 0 01.63.06.5.5 0 10.19-.98zM14.5 11H20a.5.5 0 000-1h-5.5a.5.5 0 000 1zm0 2H20a.5.5 0 000-1h-5.5a.5.5 0 000 1zm0 2H20a.5.5 0 000-1h-5.5a.5.5 0 000 1z"
              ></path>
            </svg>
            <h5 style={{ lineHeight: "2", color: "rgba(0,0,0,0.8)" }}>
              What info is shared with others?
            </h5>
            <p>
              Airbnb only releases contact information for hosts and guests
              after a reservation is confirmed.
            </p>
            <br />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Profile;
