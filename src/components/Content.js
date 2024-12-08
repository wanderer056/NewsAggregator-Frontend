import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { truncateString } from "../common/truncateString";
import "./content.css";

function Content(prop) {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);

  // console.log(prop.category)

  return (
    <div
      className="container-box"
      style={{
        backgroundColor: "lightblue",
        marginLeft: "12px",
        width: "300px",
        overflowY: "scroll",
        maxHeight: "100vh",
        width: "400px",
      }}
    >
      {prop.category?.map((item, index) => {
        return (
          <>
            {item?.topic_label >= 0 && (
              <div
                className="card"
                style={{
                  margin: "10px",
                  backgroundColor: active === index ? "royalblue" : "slategrey",
                  color: "white",
                }}
              >
                <div
                  className="box column cursor-pointer"
                  key={index}
                  onClick={() => {
                    setActive(index);
                    prop.chooseCategory(item?.topic_label);
                  }}
                  style={{ cursor: "pointer", padding: "15px", width: "200px" }}
                >
                  {truncateString(item?.topic_name, 30)}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Content;
