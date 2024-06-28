import { useContext, useState } from "react";
import authContext from "../context/authContext";

export default function Contact() {

  const context=useContext(authContext);
  const {loggedInUser}=context;

    const [user,setUser]=useState({
        username:'',
        email:'',
        message:''
    });

    if(loggedInUser){
      setUser({
        username:loggedInUser.username,
        email:loggedInUser.email,
        message:''
      })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handleChange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }
  return (
    <div className="container">
      <div className="row">
        <img
          src="https://cdn.pixabay.com/photo/2016/06/06/16/39/phone-1439842_640.png"
          alt=""
          className="col-4 mt-5"
        />
        <div className="col-8 mt-5">
          <h4 className="mb-4">Contact us!</h4>
          <form onSubmit={handleSubmit}>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                type="text"
                class="form-control form-control-sm"
                id="username"
                placeholder="username"
                name="username"
                value={user.username}
              />
              <label for="username">Username</label>
            </div>
            <div class="form-floating mb-3">
              <input
                onChange={handleChange}
                type="email"
                class="form-control form-control-sm"
                id="email"
                placeholder="name@example.com"
                name="email"
                value={user.email}
              />
              <label for="email">Email</label>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="message"
                style={{height: "100px"}}
                name="message"
                onChange={handleChange}

              ></textarea>
              <label for="message">Message</label>
            </div>
            <button type="submit"  id="ContactButton"class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
