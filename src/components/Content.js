import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./content.css";

function Content(prop) {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);

  return (
    <div
      className="container-box"
      style={{
        backgroundColor: "lightblue",
        marginLeft: "12px",
        width: "300px",
        overflowY: "scroll",
        maxHeight: "100vh",
      }}
    >
      {prop.category?.map((item, index) => {
        return (
          <div
            className="card"
            style={{
              margin: "10px",
              backgroundColor:
                active === item ? "royalblue" : "slategrey",
              color: "white",
            }}
          >
            <div
              className="box column cursor-pointer"
              key={index}
              onClick={() => {
                setActive(item);
                prop.chooseCategory(item);
              }}
              style={{ cursor: "pointer", padding: "15px" }}
            >
              {item}
            </div>
          </div>
          //    <div key={index} onClick={() =>{
          //   prop.chooseCategory(item)
          // }}>{item}</div>
        );
      })}
    </div>
  );
}

export default Content;
