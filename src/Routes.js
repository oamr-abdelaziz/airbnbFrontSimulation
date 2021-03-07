

import DashBoard from "./pages/Host/PlaceHosting/DashBoard/DashBoard";

import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/nav";
import GuardedRoute from "./GuardedRoutes";



const Home = React.lazy(() => import("./pages/Home/index"));
const Profile = React.lazy(() => import("./pages/Profile/index"));
const PlaceListing = React.lazy(() => import("./pages/Places/PlaceListing/PlaceListing"));
const PlaceDetails = React.lazy(() => import("./pages/Places/PlaceDetails/PlaceDetails"));
const Eror404 = React.lazy(() => import("./pages/Eror404/Eror404"));
const Login = React.lazy(() => import("./pages/Authentication/Login/login"));
const AlreadyLogin = React.lazy(() => import("./pages/Authentication/Login/alreadyLogin"));
const SignUp = React.lazy(() => import("./pages/Authentication/Register/SignUp"));
const Register = React.lazy(() => import("./pages/Authentication/Register/Register"));
const Overview = React.lazy(()=>import("./pages/Host/PlaceHosting/PlaceHostingOverview/Overview"))
const HostingForm = React.lazy(()=>import("./pages/Host/PlaceHosting/PlaceHostingForm/Form"))
const ConfirmReservation = React.lazy(() => import("./components/placeDetails/confirmReservation"));


export default function Routes() {

  const [editMood,setEditMood]=useState(false)

  const convertToEdit = ()=>{
    setEditMood(true)
  }
  const isAutheticated =  useSelector((state)=>state.user.isAutheticated);
  const places = useSelector((state)=>state.places.places);
  const user = useSelector((state)=>state.user)
  console.log("omg",isAutheticated,user,places);
  return (
    <Suspense fallback="loading...">
      <Switch>
        {/* Main Routes*/}
        <Route path="/" exact component={Home} />
        <Route path="/placelisting" exact component={PlaceListing}/>
        <Route path="/placedetails" exact component={PlaceDetails} />
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>

        {/* Private Routes*/}
        <GuardedRoute path='/profile' component={Profile} auth={isAutheticated} comingFrom = {"/?profile"}/>
        {/*
        <Route path="/profile" exact component={Profile}/>
        */}
        <Route path="/alreadyLogin" exact component={AlreadyLogin}/>
        
        
        <Route path="/placeHosting/overview" component={Overview}/>
        <Route path="/placeHosting/Hosting" component={HostingForm}/>

        <GuardedRoute path='/placeHosting/editPlace/:id' exact component={HostingForm} auth={editMood} />
        <Route path="/placeHosting/MyPlaces" render={() => <DashBoard setEdit={convertToEdit}/>} />


        <Route path="/placedetails/confirm/reservation" exact component={ConfirmReservation} />

        {/* Testing Routes*/}

        <Route path="/x" component={Nav} />


        {/* Error Routes*/}
        <Route path="*" component={Eror404} />
        
      </Switch>
    </Suspense>
  );
}
