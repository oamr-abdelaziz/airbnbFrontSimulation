import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import "./SignUp.css";


const schema = yup.object().shape({
  phone_number: yup
    .number()
    .typeError("Please enter your phone!")
    .min(11, " Phone number must be 11 numbers")
    .required(),
  country: yup.string().required(),
});

const Signup = () => {
  
  const [Register,setRegister] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (res) => {
      
      setRegister({res});
    

  };

  if (Register) {
    return <Redirect to={
      {
        pathname:'/Register',
        state: Register
      }
    } ></Redirect>
  }
  return (
    <div className="container-fluid">
      <div className="container">
        <h3 className="text-center font-weight-bold ">sign up</h3>
        <hr />
        <form id="myform" onSubmit={handleSubmit(onSubmit)}>
          <select
            className="form-control form-control-lg"
            id="mySelect"
            name="country"
            ref={register}
          >
            <option value="Egypt">Egypt</option>
            <option value="Algeria">Algeria</option>
            <option value="Lebnanon">Lebnanon</option>
            <option value="Angola">Angola</option>
            <option value="Afganistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value={`Antigua & Barbuda`}>Antigua &amp; Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire">Bonaire</option>
            <option value={`Bosnia & Herzegovina`}>
              Bosnia &amp; Herzegovina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Ter">
              British Indian Ocean Ter
            </option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Canary Islands">Canary Islands</option>
          </select>
          <div className="form-outline mb-4">
            <input
              type="number"
              id="form1"
              name="phone_number"
              placeholder="Phone number"
              style={{ height: "60px" }}
              className="form-control form1"
              ref={register}
            />
          </div>
          <h6>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.
          </h6>

          <h6 className="text-danger"> {errors.phone_number?.message}</h6>

          <button
            type="submit"
            className="btn btn-primary mb-4 btn-block"
            id="continue"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-muted" id="or">
          or
        </p>

        <div>
          <button className="btn btn-outline-dark social">
            <i
              className="far fa-envelope"
              style={{ color: "black", fontSize: "20px", float: "left" }}
            />
            Continue with email
          </button>

          <button className="btn btn-outline-dark social">
            <i
              className="fab fa-facebook"
              style={{ color: "#3b5998", fontSize: "20px", float: "left" }}
            ></i>
            Continue with facebook
          </button>

          <button className="btn btn-outline-dark social">
            <i
              className="fa fa-google"
              style={{ color: "black", fontSize: "20px", float: "left" }}
            />
            Continue with google
          </button>

          <button className="btn btn-outline-dark social">
            <i
              className="fab fa-apple"
              style={{
                color: "rgb(61, 61, 61)",
                fontSize: "20px",
                float: "left",
              }}
            />
            Continue with apple
          </button>
        </div>
        <br />
        <p className="text-muted ">
          Already have an account?
          <a
            href="login.js"
            style={{ color: "black", textDecoration: "underline" }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
