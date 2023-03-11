// import { FaHeart } from "react-icons/fa";
// import { FcClock } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import InfiniteScroll from "./common/Scrolling";
// import { Route, Router, Routes } from 'react-router-dom';
import "./app.css";
import { truncateString } from "./common/truncateString";
import { Link, Route, Routes } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useState,useEffect } from "react";
import HomePage from "./pages/HomePage";

function App() {
const [items, setItems] = useState([]);
const [category,setCategory]=useState([]);


  console.log(items);


useEffect(() => {
   async function Fetchnews() {
     const data = await fetch("http://localhost:4000/api/v1/news", {
       method: "GET",
     });
     const items = await data.json();
     setItems(items?.result);
   }
  Fetchnews();
   
  async function Fetchcategory() {
    const data = await fetch(
      "http://localhost:4000/api/v1/news/categories",
      {
        method: "GET",
      }
    );
    const category = await data.json();
    setCategory(category?.result);
  }

  Fetchcategory();
}, []);

function chooseCategory(item) {
  const newItems = items.filter((i) => i?.[`${"Category "}`] === item);
  setItems(newItems);
  console.log(item);
}


  return (
    <>
      <Navbar />
      <div
        className="hire d-flex"
        style={{position: "relative" }}
      >
      <Content category={category} chooseCategory={chooseCategory}/> 
        <div style={{width:"100%"}}>
          <Routes>
            <Route path="/" element={<HomePage Headlines={items} />} />
          </Routes> 
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
