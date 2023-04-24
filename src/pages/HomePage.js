
 import { Route, Router, Routes } from 'react-router-dom';
 import "../app.css";
 import { truncateString } from "../common/truncateString";
 import { Link } from "react-router-dom";
 import { useEffect, useState,useRef } from "react";

function HomePage({ Headline }) {
  const [modalData, setModalData] = useState([]);

  const [itemsToShow, setItemsToShow] = useState(200);
  const containerRef = useRef(null);

    const [selectedNews, setSelectedNews] = useState(null);



const handleNewsClick = (news) => {
  setSelectedNews(news);
};


  //to show the first link in the page
  useEffect(() => {
    setModalData("https://www.setopati.com/politics/300329");
      //  console.log(Headline?.[0]?.[`${"link"}`]);
  }, [Headline]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container.scrollTop + container.clientHeight ===container.scrollHeight) {
      setItemsToShow(itemsToShow + 200);
    }
  };


  return (
    <div className="d-flex justify-content " style={{ width: "100%" }}>
      <div
        className="justify-content-center"
        style={{ maxHeight: "100vh", overflowY: "scroll", flex: "1.5" }}
        onScroll={handleScroll}
        ref={containerRef}
      >
        {Headline?.slice(0, itemsToShow)?.map((item, index) => {
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



