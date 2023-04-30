
 import { Route, Router, Routes } from 'react-router-dom';
 import "../app.css";
 import { truncateString } from "../common/truncateString";
 import { Link } from "react-router-dom";
 import { useEffect, useState,useRef } from "react";

function HomePage({ Headline }) {
   const [modalData, setModalData] = useState({ link: "", news_site: "" });
  // const [modalData, setModalData] = useState(null);
  

  const [itemsToShow, setItemsToShow] = useState(200);
  const containerRef = useRef(null);

    const [selectedNews, setSelectedNews] = useState(null);



const handleNewsClick = (news) => {
  setSelectedNews(news);
};


  //to show the first link in the page
  useEffect(() => {
    setModalData("https://www.onlinekhabar.com/2023/04/1297412");
  }, [Headline]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container.scrollTop + container.clientHeight ===container.scrollHeight) {
      setItemsToShow(itemsToShow + 200);
    }
  };
console.log(Headline)

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
              <div className="card" style={{ width: "100%", height: "7rem" }}>
                <button
                  style={{
                    borderColor: "white",
                    width: "40px",
                    borderRadius: "50%",
                  }}
                >
                  {truncateString(index + 1)}
                </button>
                {item?.news_site === "onlinekhabar" ? (
                  <p
                    // onClick ={() =>{
                    //   setModalData(item?.link)
                    // }}
                    onClick={() => {
                      setModalData({
                        ...modalData,
                        link: item?.link,
                        news_site: item?.news_site,
                      });
                    }}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    {truncateString(item?.headline, 90)}
                  </p>
                ) : (
                  <a
                    href={item?.link}
                    target="_blank"
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    {truncateString(item?.headline, 90)}
                  </a>
                )}
                <div style={{fontSize:"12px"}}>{item?.date}</div>
              </div>
            </div>
          );
        })}
      </div>
            {
            modalData?.news_site === "onlinekhabar" && 
            <iframe
        style={{ width: "100%", height: "100vh", flex: "3" }}
        src={modalData?.link}
        frameborder="0"
      ></iframe>
            }
      </div>
  );
}       


 export default HomePage;



