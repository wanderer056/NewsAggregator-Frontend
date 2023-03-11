import React from "react";
import "./navbar.css";

const data = new Date().toLocaleTimeString();
const year = data.getTime;


const Navbar = () => {
  return (
    <>
      <i className="fa-solid fa-clock">{year} </i>
      <div className="navbar">
        <img src="nepallogo.png" alt="nepal" className="nepali" />

        <h2 style={{ margin: "15px", color: "white" }}> NEWS BUCKET</h2>
        <div className="search-form" style={{ margin: "20px" }}>
          <input
            type="search"
            className="search-box"
            placeholder="search here..."
          />
          <button className="search-ico">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
          <h1>{year}</h1>
        </div>
        
        <div className="buttons">
          {/* <button className="Toolbal">
            <i
              className="fa-solid fa-bolt-lightning"
              style={{ margin: "20px", color: "white" }}
            ></i>
          </button> */}
          <button className="Toolbal">
            <i
              className="fa-solid fa-comments"
              style={{ margin: "20px", color: "white" }}
            ></i>
          </button>
          <button className="Toolbal">
            <i
              className="fa-solid fa-bars"
              style={{ margin: "20px", color: "white" }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
