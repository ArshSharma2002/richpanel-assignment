import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  const [credentials, setCedentials] = useState({
    name: "",
    email: "",
    password: ""
  });
  const onChange = (e) => {
    // e.target.name means 'name' attribute of the input tag becomes equals to the value of that input tag that we are entering . for eg. if name="title" than title :"value we are entering in the input tag" .
    // this is for getting the value of the input tag entered by user inorder to send it to the body through a state.
    setCedentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // const history = useHistory();
  const navigate = useNavigate();

  const handleOnSignin = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost/api/auth/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      // {title,description,tag} is an object title:title , desc:desc ...... so on .
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the authtoken & redirect to home page using useHistory hook.
      localStorage.setItem("token", json.authToken);
      // history.push("/login")
      navigate("/login");
      // props.showAlert("Account Created Successfully" , "success")
    } else {
      // props.showAlert("Invalid details" , "danger")
    }
  };

  return (
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <h3
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Create Account
        </h3>
        <form onSubmit={handleOnSignin}>
          <div class="formbold-input-group">
            <label for="name" class="formbold-form-label">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              class="formbold-form-input"
              onChange={onChange}
            />
          </div>

          <div class="formbold-input-group">
            <label for="email" class="formbold-form-label">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="formbold-form-input"
              onChange={onChange}
            />
          </div>

          <div class="formbold-input-group">
            <label for="password" class="formbold-form-label">
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              class="formbold-form-input"
              onChange={onChange}
              minLength={5}
            />
          </div>

          <div class="formbold-checkbox" style={{ color: "#07074d" }}>
            <input
              type="checkbox"
              id="remeberme"
              style={{ marginRight: "4px" }}
            />
            Remember Me
          </div>

          <button class="formbold-btn" type="submit">
            Sign Up
          </button>

          <p
            style={{ textAlign: "center", marginTop: "15px", fontSize: "13px" }}
          >
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>

    // <div className="container">
    //   <form onSubmit={handleOnSignin}>
    //     <div className="mb-3">
    //       <label htmlFor="name" className="form-label">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="name"
    //         aria-describedby="emailHelp"
    //         name="name"
    //         onChange={onChange}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="email" className="form-label">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="email"
    //         aria-describedby="emailHelp"
    //         name="email"
    //         onChange={onChange}
    //       />
    //       <div id="emailHelp" className="form-text">
    //         We'll never share your email with anyone else.
    //       </div>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="password"
    //         name="password"
    //         onChange={onChange}
    //         minLength={5}
    //         required
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="cpassword" className="form-label">
    //         Confirm Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="cpassword"
    //         name="cpassword"
    //         onChange={onChange}
    //         minLength={5}
    //         required
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
}

export default Signup;
