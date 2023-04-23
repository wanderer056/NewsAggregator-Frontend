
 import { Route, Router, Routes } from 'react-router-dom';
 import "../app.css";
 import { truncateString } from "../common/truncateString";
 import { Link } from "react-router-dom";
 import { useEffect, useState } from "react";

function HomePage({ Headline }) {
  const [modalData, setModalData] = useState([]);

  
  // {
  //   Headline?.map((item) => {
  //     return <div>{item}</div>;
  //   });
  // }

  //to show the first link in the page
  useEffect(() => {
    setModalData(Headline?.[0]?.[`${"link"}`]);
      //  console.log(Headline?.[0]?.[`${"link"}`]);
  }, [Headline]);

  return (
    <div className="d-flex justify-content " style={{ width: "100%" }}>
      <div
        className="justify-content-center"
        style={{ maxHeight: "100vh", overflowY: "scroll", flex: "1.5" }}
      >
        {Headline?.slice(0, 200)?.map((item, index) => {
          return (
            <div
              key={index}
              className="box column cursor-pointer"
              style={{ alignItems: "flex-start" }}
            >
              <div className="card" style={{ width: "100%", height: "5rem" }}>
                <button
                  style={{
                    borderColor: "white",
                    width: "30px",
                    borderRadius: "50%",
                  }}
                >
                  {truncateString(index + 1)}
                </button>
                <p
                  onClick={() => {
                    setModalData(item?.[`${"link"}`]);
                  }}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  {truncateString(item?.headline, 90)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <iframe
        style={{ width: "100%", height: "100vh", flex: "3" }}
        src={modalData}
        frameborder="0"
      ></iframe>
    </div>
  );
}       


 export default HomePage;

