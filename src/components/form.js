import React, { useState } from "react";

const Form = () => {
  const [headings, setHeadings] = useState({heading1:"",heading2:"",heading3:"" });

const handleSubmit = async (e) => {
  e.preventDefault();
  const documents = [headings.heading1, headings.heading2, headings.heading3];
    // console.log(documents);
    try {
      const response = await fetch("https://3a1d-35-204-28-243.ngrok.io", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify({ documents }),
      });

      const data = await response.json();
      // console.log(data)
      alert(JSON.stringify(data)); // display the response using popup in the output
    } catch (error) {
      console.error(error);
    }
  };


  const onChange =(e) =>{
      const {name,value} = e.target;
      setHeadings((prev) => ({ ...prev, [name]: value }));
  }
  // console.log(headings)

  return (
    <>
      {/* <h1>HEADING FORM</h1> */}
      <div className="main">
        <div className="register" style={{ margin: "12px" }}>
          <form
            className="form"
          >
            <b>
              <label>Enter the Headline</label>
            </b>
            <input
              onChange={onChange}
              type="text"
              id="heading1"
              name="heading1"
              value={headings.name}
              placeholder="Enter .."
              style={{ margin: "22px", width: "332px" }}
            />
            <input
              onChange={onChange}
              type="text"
              id="heading2"
              name="heading2"
              placeholder="Enter .."
              value={headings.name}
              style={{ margin: "22px", width: "332px" }}
            />

            <input
              onChange={onChange}
              type="text"
              id="heading3"
              name="heading3"
              placeholder="Enter .."
              value={headings.name}
              style={{ margin: "22px", width: "332px" }}
            />

            <div className="submission" style={{ textAlign: "center" }}>
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;


