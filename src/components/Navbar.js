import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "./form";
//  import Visual from "../../src/visual.html"
import "./navbar.css";

const Navbar = ({ Headlines, setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleCommentClick = () => {
    setShowForm(!showForm);
  };

  const handleSearch = () => {
    const filteredHeadlines = Headlines.filter((item) =>
      item.Headline.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredHeadlines);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const [showSubMenu, setShowSubMenu] = useState(false);

    const handleToggleSubMenu = () => {
      setShowSubMenu(!showSubMenu);
   };

   const [visualHTML, setVisualHTML] = useState();
      const [visualsHTML, setVisualsHTML] = useState();


   const [showVis, setShowVis] = useState(false)


  useEffect(() => {
   const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect (() => {
      async function Visual() {
        try {
          const response = await fetch("/visual.html");
          const responses = await fetch("/heat_map.html")
        //  const resp = await response.json();
        //  console.log(response.url)
          setVisualHTML(response.url);
          setVisualsHTML(responses.url);
          // console.log("visualHTML", visualHTML);
        } catch (error) {
          console.log(error);
        }
      }

      Visual();
  },[visualHTML,visualsHTML]);
  // console.log(showVis)

  return (
    <>
      <div className="navbar">
        <img src="nepallogo.png" alt="nepal" className="nepali" />

        <h2 style={{ margin: "15px", color: "white" }}> NEWS BUCKET</h2>
        <div className="search-form" style={{ margin: "20px" }}>
          <input
            type="search"
            className="search-box"
            placeholder="search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="search-ico" onClick={handleSearch}>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="Menu">
          <button
            onClick={handleToggleSubMenu}
            style={{ borderColor: "blue", marginRight: "20px" }}
          >
            <i className="fa fa-caret-down" style={{ fontSize: "10px" }}>
              <p>Visualization</p>
            </i>
          </button>
          {showSubMenu && (
            <div
              className="sub-menu"
              style={{
                backgroundColor: "white",
                position: "fixed",
                display: "inline",
                justifyContent: "start",
              }}
            >
              <ul>
                <li className="active" style={{ display: "inline" }}>
                  <a href={visualHTML} target="_blank">
                    Visual 1
                  </a>
                  <li>
                    {" "}
                    <a href={visualsHTML} target="_blank">
                      Visual 2
                    </a>
                  </li>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="buttons">
          <button className="Toolbal" onClick={handleCommentClick}>
            <i
              className="fa-solid fa-comment"
              style={{ margin: "20px", color: "white" }}
            ></i>
          </button>{" "}
          <Modal show={showForm} onHide={() => setShowForm(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Heading Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form />
            </Modal.Body>
          </Modal>
          {/* {showForm && <Form />} */}
          <button
            style={{
              borderColor: "blue",
              color: "white",
              backgroundColor: "blue",
              marginRight: "30px",
            }}
          >
            <i className="fa-solid fa-clock"></i>
            <div>{currentTime}</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
