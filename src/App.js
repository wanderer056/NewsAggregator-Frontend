
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./app.css";
import { truncateString } from "./common/truncateString";
import { Link, Route, Routes } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useState,useEffect } from "react";
import HomePage from "./pages/HomePage";

function App() {
const [items, setItems] = useState([]);
const [category,setCategory]=useState([]);
const [categorydata,setCategoryData]=useState([]);
const [specificat,setSpecificat]=useState([]);


  //  console.log(items);


useEffect(() => { 
  const pages = 1300;
  const perPage = 200;

  async function Fetchnews() {
    const pages = 1300;
    const perPage = 200;

    for (let i = 1; i <= pages; i++) {
      const data = await fetch(
        `http://localhost:4000/api/v1/news/?page=${i}&perPage=${perPage}`,
        {
          method: "GET",
        }
      );
      const result = await data.json();
      items.push(...result.result);
    }

    setItems(items);
  }

  Fetchnews();
 console.log(items)

   
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


  //  async function Fetchspeccategory() {
  //    const data = await fetch(
  //      "http://localhost:4000/api/v1/news/2?page=1&perPage=15",
  //      {
  //        method: "GET",
  //      }
  //    );
  //    const specificat = await data.json();
  //    setSpecificat(specificat?.result);
  //  }

  //  Fetchspeccategory();
  //    console.log(specificat);

}, []);

function chooseCategory(item) {
  const newItems = items?.filter((i) => i?.topic_label === item);
  setCategoryData(newItems);
     console.log(newItems);
    //  console.log(item);
}


// let labels = [];
// for (let index = 0; index < category?.length; index++) {
//     console.log(index, items?.[index]?.topic_label);
//     if (items?.[index]?.topic_label === index) {
//       labels.push(items?.[index]?.topic_name);
//          console.log(labels, index, items?.[index]?.topic_label);
//     }
  
// }
// console.log(labels,category.length)


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
            <Route path="/" element={<HomePage Headline={categorydata?.length === 0 ? items:categorydata} />} />
          </Routes> 
        </div>
      </div>
    
      <Footer />

    </>
  );
}

export default App;
