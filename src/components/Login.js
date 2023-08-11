import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props) {
  const [credentials, setCedentials] = useState({ email: "", password: "" });

  // let history = useHistory()
  const navigate = useNavigate();

  const onChange = (e) => {
    // e.target.name means 'name' attribute of the input tag becomes equals to the value of that input tag that we are entering . for eg. if name="title" than title :"value we are entering in the input tag" .
    // this is for getting the value of the input tag entered by user inorder to send it to the body through a state.
    setCedentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleOnLogin = async (e) => {
    e.preventDefault();
    // fetch("http://localhost/api/auth/login")
    const response = await fetch(`http://localhost/api/auth/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      // {title,description,tag} is an object title:title , desc:desc ...... so on .
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the authtoken & redirect to home page using useHistory hook.
      localStorage.setItem("token", json.authToken);
      // history.push("/")
      navigate("/");
      // props.showAlert("Logged in Successfuly" , "success")
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
          Login to your account
        </h3>
        <form onSubmit={handleOnLogin}>
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
              value={credentials.email}
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
              value={credentials.password}
              onChange={onChange}
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
            Login
          </button>

          <p
            style={{ textAlign: "center", marginTop: "20px", fontSize: "13px" }}
          >
            New to MyApp?
            <Link to="/signup"> Sign Up</Link>
          </p>
        </form>
      </div>
    </div>

    // <div className="container my-3">
    //   <h2>This is login page</h2>
    //   <form onSubmit={handleOnLogin}>
    //     <div className="mb-3">
    //       <label for="email" className="form-label">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="email"
    //         name="email"
    //         aria-describedby="emailHelp"
    //         value={credentials.email}
    //         onChange={onChange}
    //       />
    //       <div id="emailHelp" className="form-text">
    //         We'll never share your email with anyone else.
    //       </div>
    //     </div>
    //     <div className="mb-3">
    //       <label for="password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="password"
    //         name="password"
    //         value={credentials.password}
    //         onChange={onChange}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
}

export default Login;
