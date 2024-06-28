import { useContext, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router";
import authContext, { useAuth } from "../context/authContext";
export default function Register() {


    const context=useContext(authContext);
    const {storetokenInLS}=context

    const [user,setUser]=useState({
        username:'',
        email:'',
        phone:'',
        password:''
    });
  const navigate=useNavigate();
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(user);

        try{
            const response= await fetch("https://localhost:5000/api/auth/register",{
                method:'POST',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(user)
            });
            console.log(response); 

            if(response.ok){
                alert('user registered succesfully');
                const res_data=await response.json();
                storetokenInLS(res_data.token);
                setUser({username:'',
                email:'',
                phone:'',
                password:''});
                navigate('/login')
            }
            else{
                alert('email already exists');
                setUser({username:user.username,
                email:'',
                phone:user.phone,
                password:user.password})
            }
        }
        catch(err){
            console.log(err);
        }
       
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/011/432/528/small/enter-login-and-password-registration-page-on-screen-sign-in-to-your-account-creative-metaphor-login-page-mobile-app-with-user-page-flat-illustration-vector.jpg" alt="" className="col-4" />
                    <div className="col-8 mt-5">
                        <h4 className="mb-4">Register Here!</h4>
                        <form >
                           <div class="form-floating mb-3">
                                <input onChange={handleChange}  type="text" class="form-control form-control-sm" id="username" placeholder="username"name="username" />
                                <label for="username">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input onChange={handleChange} type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" name="email"/>
                                <label for="email" >Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input onChange={handleChange} type="password" class="form-control form-control-sm" id="password" placeholder="Password" name="password"/>
                                <label for="password">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input onChange={handleChange} type="number" class="form-control form-control-sm" id="phone" placeholder="Password" name="phone" />
                                <label for="phone">Phone</label>
                            </div>
                            
                            <button type="submit" id="SubmitButton" class="btn btn-primary mb-5" onClick={handleSubmit}>Register</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
 