import { useEffect, useState } from "react";
import authContext from "./authContext";

export default function AuthState(props){

   const [token,setToken]=useState(localStorage.getItem('token'));
   const [loggedInUser,setLoggedInUser]=useState("")

    const storetokenInLS=(serverToken)=>{
        return localStorage.setItem('token',serverToken)

    }

    const isLoggedIn=!!token;
    const LogoutUser=()=>{
        setToken("")
        return localStorage.removeItem("token")
    }

    // jwt authentication --> to get the data of logged in user

    const userAuthorisation=async()=>{
        try{
            const response= await fetch("http://localhost:5000/api/auth/user",{
                method:'GET',
                mode:'cors',
                headers: {
                    Authorisation:`Bearer ${token}`
                },
            });
            // if(response.status!==200){
            //     console.log("error occured");
            // }
            const data=await response.json();
            setLoggedInUser(data.userData);
        }
        catch(err){
            console.log(err);
            
        }

    }
    useEffect(()=>{
        userAuthorisation()
    },[])
    return(
        <authContext.Provider value={{storetokenInLS,isLoggedIn,LogoutUser,loggedInUser}}>
            {props.children}
        </authContext.Provider>
    )
}