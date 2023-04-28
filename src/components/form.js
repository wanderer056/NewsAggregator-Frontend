// import React, { useState } from "react";

// const Form = () => {
//   const [headings, setHeadings] = useState({heading1:"",heading2:"",heading3:"" });

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const documents = [headings.heading1, headings.heading2, headings.heading3];
//     // console.log(documents);
//     try {
//       const response = await fetch("https://30f4-35-197-9-167.ngrok.io", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ documents }),
//       });

//       const data = await response.json();
//       // console.log(data)
//       alert(JSON.stringify(data)); // display the response using popup in the output
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   const onChange =(e) =>{
//       const {name,value} = e.target;
//       setHeadings((prev) => ({ ...prev, [name]: value }));
//   }
//   // console.log(headings)

//   return (
//     <>
//       {/* <h1>HEADING FORM</h1> */}
//       <div className="main">
//         <div className="register" style={{ margin: "12px" }}>
//           <form
//             className="form"
//           >
//             <b>
//               <label>Enter the Headline</label>
//             </b>
//             <input
//               onChange={onChange}
//               type="text"
//               id="heading1"
//               name="heading1"
//               value={headings.name}
//               placeholder="Enter .."
//               style={{ margin: "22px", width: "332px" }}
//             />
//             <input
//               onChange={onChange}
//               type="text"
//               id="heading2"
//               name="heading2"
//               placeholder="Enter .."
//               value={headings.name}
//               style={{ margin: "22px", width: "332px" }}
//             />

//             <input
//               onChange={onChange}
//               type="text"
//               id="heading3"
//               name="heading3"
//               placeholder="Enter .."
//               value={headings.name}
//               style={{ margin: "22px", width: "332px" }}
//             />

//             <div className="submission" style={{ textAlign: "center" }}>
//               <input type="submit" value="Submit" onClick={handleSubmit} />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;


import React, { useState } from "react";

const Form = () => {
  const [headings, setHeadings] = useState({
    heading1: "",
    heading2: "",
    heading3: "",
  });
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const documents = [headings.heading1, headings.heading2, headings.heading3];
    try {
      const response = await fetch("https://78d1-35-237-96-18.ngrok.io", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ documents }),
      });

      const data = await response.json();
      setResponseData(data); // settting the response data to state variable
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setHeadings((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* <h1>HEADING FORM</h1> */}
      <div className="main">
        <div className="register" style={{ margin: "12px" }}>
          <form className="form">
            <b>
              <label>Enter the Headline</label>
            </b>
            <input
              onChange={onChange}
              type="text"
              id="heading1"
              name="heading1"
              value={headings.heading1}
              placeholder="Enter .."
              style={{ margin: "22px", width: "332px" }}
            />
            <input
              onChange={onChange}
              type="text"
              id="heading2"
              name="heading2"
              placeholder="Enter .."
              value={headings.heading2}
              style={{ margin: "22px", width: "332px" }}
            />

            <input
              onChange={onChange}
              type="text"
              id="heading3"
              name="heading3"
              placeholder="Enter .."
              value={headings.heading3}
              style={{ margin: "22px", width: "332px" }}
            />

            <div className="submission" style={{ textAlign: "center" }}>
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>

      {responseData && ( // check if responseData is not null
        <div>
          <table border={"1px"}>
            <tr>
              <th>Headline</th>
              <th>Cluster</th>
            </tr>
            {
              [0,1,2].map((a,i)=>{
                return (
                  <tr key={i}>
                    {" "}
                    <td>{Object.keys(responseData)?.[i]}</td>
                    <td>{Object.values(responseData)?.[i]}</td>
                  </tr>
                );
              })
            }
          </table>
          {/* <pre>{JSON.stringify(responseData, null, 2)}</pre> */}
        </div>
      )}
    </>
  );
};

export default Form;



