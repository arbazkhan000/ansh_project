import { useState } from "react"
import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import axios from "axios";

export default function Login() {
    const {storetokenInLS}=useAuth();

    const [user,setUser]=useState({
        email:'',
        password:''
    });

    // const navigate=useNavigate();
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

    //     try{
    //         const response= await fetch("http://localhost:5000/api/auth/login",{
    //             method:'POST',
    //             mode: "cors",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body:JSON.stringify(user)
    //         });
    //         console.log(response); 

    //         if(response.status===200){
    //             alert("login succesful");
    //             const res_data=await response.json();
    //             storetokenInLS(res_data.token);
    //             setUser({email:'',
    //             password:''});
    //             navigate('/')
    //         }
    //         else{
    //             alert("invalid login credentials");
    //             setUser({email:'',
    //             password:''})
    //         }
        
    // }
    // catch(err){
    //     console.log(err);
    // }


    const res = await axios.post("http://localhost:5000/api/auth/login", user, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(res.data);

}
    return (
        <>
            <div className="container">
                <div className="row">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/011/432/528/small/enter-login-and-password-registration-page-on-screen-sign-in-to-your-account-creative-metaphor-login-page-mobile-app-with-user-page-flat-illustration-vector.jpg" alt="" className="col-4" />
                    <div className="col-8 mt-5">
                        <h4 className="mb-4">Login yourself!</h4>
                        <form onSubmit={handleSubmit}>
                          
                            <div class="form-floating mb-3">
                                <input onChange={handleChange} type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" name="email" />
                                <label for="email">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input onChange={handleChange} type="password" class="form-control form-control-sm" id="password" placeholder="Password" name="password"/>
                                <label for="password">Password</label>
                            </div>

                            <button type="submit"  id="LoginButton" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}