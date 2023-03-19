// import { FaHeart } from "react-icons/fa";
// import { FcClock } from "react-icons/fa";
// import { Route, Router, Routes } from 'react-router-dom';
import "../app.css";
import { truncateString } from "../common/truncateString";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function HomePage({Headlines}) {
const [modalData, setModalData] = useState([]);


  // useEffect(() => {
    // async function Fetchnews() {
    //   const data = await fetch("http://localhost:4000/api/v1/news", {
    //     method: "GET",
    //   });
    //   const Headlines = await data.json();
    //   //  console.log(Headlines)
    //   setHeadlines(Headlines?.result);
    // }

    // Fetchnews();
  // }, []);
   {
        Headlines?.map((item) =>{
          return (
            <div>{item}</div>
          )
        })
       }

  //to show the first link in the page
    useEffect(()=>{
      setModalData(Headlines?.[0]?.[`${" Link"}`]);
      // console.log(Headlines?.[0]?.[`${" Link"}`]);
   },
   [Headlines]);

  return (
    <div className="d-flex justify-content " style={{ width: "100%" }}>
      <div
        className="justify-content-center"
        style={{ maxHeight: "100vh", overflowY: "scroll", flex: "1.5" }}
      >
        {Headlines?.slice(0, 200)?.map((item, index) => {
          return (
            <div
              key={index}
              className="box column cursor-pointer"
              style={{ alignItems: "flex-start" }}
            >
              <div className="card" style={{ width: "100%", height: "5rem" }}>
                <ol>
                  <li>
                    {truncateString(index + 1)}
                    <p
                      onClick={() => {
                      
                        setModalData(item?.[`${" Link"}`]);
                      }}
                      style={{ color:"blue" ,cursor:"pointer"}}
                    >
                      {truncateString(item?.Headline, 90)}
                    </p>
                  </li>
                </ol>
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
