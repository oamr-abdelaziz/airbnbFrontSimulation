import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.css";
import {useDispatch,useSelector} from "react-redux";
import { getAuthUser, refreshAuth } from "../../../store/actions/profileActions";
import { userAxiosInstance } from "../../../axiosInstance";
import { Redirect } from "react-router-dom";
const schema = yup.object().shape({
  email: yup
  .string()
  .email()
  // .typeError()
  .matches(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    "Please enter your email!"
  )
  .required(),
  password: yup
  .string()
  .min(8, "Password must be more than 8 characters")
  .matches(/[a-zA-Z]/, "Password must contain upper and lower cases")
  .required(),
});

const Login = () => {
  const [success,setSuccess] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const token = useSelector((state)=>state.user.token);
  const dispatch = useDispatch();
  const isAutheticated = useSelector((state)=>state.user.isAutheticated);

  useEffect(() => {

    //1st if i have a token 
    if(token !== ''){

      try{
        dispatch(refreshAuth(token));
      }
      catch(e){
          console.log(e);
      }

    }

  }, []);

  const onSubmit = async (res) => {
    console.log("hi");
    console.log(res);

    //thinkg like a logger
    

    try{
      await userAxiosInstance.post("/login",res)
      .then((res)=>{

        console.log(res);
        let token = res.data.token;
        dispatch(getAuthUser(token));
        setTimeout(()=>{},200);

        
        




      })
      .catch()
    }
    catch(e){
      console.log(e);
    }

    if (isAutheticated){
      console.log("hi")
      setSuccess(true);
    }

    // API call
  };

  return (
    <>
      {success?(<Redirect to = '/'/>)
      :(
        <div>
        <div className="container-fluid">
          <div className="container">
            <h3 className="text-center font-weight-bold ">Log In</h3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} id="myform">
              
            <div className="form-outline mb-4 form-floating">
            <input
              type="email"
              placeholder="Email"
              className="form-control form3"
              id="email"
              name="email"
              ref={register}
            />
          </div>
          <h6 className="text-danger"> {errors.email?.message}</h6>

          <h6>We'll email you trip confirmations and receipts.</h6>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form3"
              name="password"
              placeholder="Password"
              className="form-control form3"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              ref={register}
            />
          </div>
          <h6 className="text-danger"> {errors.password?.message}</h6>
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
            
          </div>
          <hr />
        </div>
      </div>

      )}
      
    </>
  );
};

export default Login;
