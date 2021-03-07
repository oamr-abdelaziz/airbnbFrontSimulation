import React from 'react';
import { Route, Redirect } from "react-router-dom";

//for later setup  <GuardedRoute path='/protected' component={Protected} auth={isAutheticated} /> and  use state to determine the current state 

const GuardedRoute = ({ component: Component, auth,comingFrom, ...rest }) => {
console.log("auth:" + auth)
    return(
        <Route {...rest} render={(props) => (
            auth === true
                ? <Component {...props} />
                : <Redirect to = {`/login${comingFrom}`} />
        )} />
    )
}

export default GuardedRoute;
