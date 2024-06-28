import { useContext, useEffect } from "react";
import authContext from "../context/authContext";
import { Navigate } from "react-router";


export default function Logout(){

    const context=useContext(authContext);
    const {LogoutUser}=context;

    useEffect(()=>{
        LogoutUser();
    },[LogoutUser]);

    return <Navigate to="/login"/>

}