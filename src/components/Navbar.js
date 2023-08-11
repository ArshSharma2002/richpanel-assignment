import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname)
  }, [location]);

  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // history.push("/login")
    navigate("/login");
    // props.showAlert("Logged Out Successfuly" , "success")
  };

  const changeBG =()=>{
    document.getElementById('body').style.cssText = 'background-color: white;';
  }
  const changeBGBlue =()=>{
    document.getElementById('body').style.cssText = 'background-color: rgba(30,76,144,1);';
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link `}
                  aria-current="page"
                  to="/"
                  onClick={()=>{changeBG()}}
                >
                  Home
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  className="btn btn-primary mx-3"
                  to="/login"
                  role="button"
                  onClick={()=>{changeBGBlue()}}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary"
                  to="/signup"
                  role="button"
                  onClick={()=>{changeBGBlue()}}
                >
                  Signup
                </Link>
              </form>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
