import React from 'react';
import {Redirect, Route} from "react-router";

const AdminRoute = ({ children, uid, ...rest }) => {
    return (
        <Route {...rest}
        render={() => {
        if (uid==="HfxQCvnrdagSqdlMUwXev0E8aNn2") {
            return children
        } else {
            return <Redirect to={"/"} />
        }
        }}
        />
    );
};



export default AdminRoute;
