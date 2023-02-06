import React, { useState } from "react";
import "./Project.css";

const Project = () => {
  const [samples, setSamples] = useState(
    JSON.parse(localStorage.getItem("MyJobDetails")) || []
  );

  const savedContent = (e) => {
    e.preventDefault(); //To prevent the default event from occuring

    let detail = {
      jobName: e.currentTarget[0].value,
      cv: e.currentTarget[1].value,
      coverLetter: e.currentTarget[2].value,
      location: e.currentTarget[3].value,
      updatedStatus: e.currentTarget[4].value,
      applicationDate: e.currentTarget[5].value,
    };

    let details = JSON.parse(localStorage.getItem("MyJobDetails")) || [];
    details.push(detail);

    document.getElementById("myform").reset();

    // Saving in local storage
    localStorage.setItem("MyJobDetails", JSON.stringify(details));
    setSamples(details);
    // resetForm({ details: '' })
  };

  const changeStatus = (e) => {
    let value = e.target.value;
    document.getElementById("updateHere").innerHTML = value;
  };

  const clearSavedData = () => {
    document.getElementById("myform").reset();
    localStorage.setItem("MyJobDetails", JSON.stringify([]));
    setSamples([]);
  };

  const resetScreen = () => {};

  const clearThisEntry = (item, index) => {
    let details = JSON.parse(localStorage.getItem("MyJobDetails")) || [];
    details.splice(index, 1);

    document.getElementById("myform").reset();

    // Saving in local storage
    localStorage.setItem("MyJobDetails", JSON.stringify(details));
    setSamples(details);
  };

  const getDividerLine = (numOfDash) => {
    let dividerLine = "";
    let i = 0;
    while (i !== numOfDash) {
      dividerLine += "- ";
      i++;
    }
    return dividerLine;
  };
  return (
    <div className="App">
    <div>
      <form id="myform" onSubmit={savedContent} onReset={resetScreen}>
        <label>Job name:</label>
        <input
          type="text"
          placeholder="Enter Job Name.."
          value={samples.jobName}
        />{" "}
        <br /> <br />
        {/* <label>{samples.jobName}</label> <br /> <br /> */}
        <label>CV: </label>
        <input type="file" value={samples.cv} /> <br /> <br />
        <label>Cover Letter: </label>
        <input type="file" value={samples.coverLetter} /> <br /> <br />
        <label>Location/Country: </label>
        <input type="text" value={samples.location} /> <br /> <br />
        <label>Status:</label>
        <select id="status" value={samples.status} onChange={changeStatus}>
          {/* <option value="Null">-</option> */}
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="In-Process">In-Process</option>
        </select>
        <br /> <br />
        {/* <div id="updateHere"></div> <br /> */}
        <label>Application Date: </label>
        <input type="date" value={samples.applicationDate} /> <br /> <br />
        <button type="submit" id="btn" value={samples.saveButton}>
          ADD & SAVE
        </button>
        {/* <tr>
                        <td>{samples.jobName}</td>
                        <td>{samples.cv}</td>
                        <td>{samples.coverLetter}</td>
                        <td>{samples.location}</td>
                        <td id="updateHere">{samples.status}</td>
                        <td>{samples.applicationDate}</td>
                    </tr> */}
      </form>
    </div>
    {samples.length > 0 && (
          <div>
          <div>
          <br />
          <br />
          <br />
        </div>
        <text>{getDividerLine(50)}</text>
            <br />
            <br />
            <text>The list of your applied Jobs are as follows:-</text>
            <table>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Job Name</th>
                  <th>CV</th>
                  <th>Cover Letter</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Application Date</th>
                </tr>
              </thead>
              <tbody>
                {samples?.map((sample, index) => (
                  <tr key={String(index)}>
                    <td>{String(index + 1)}</td>
                    <td>{sample.jobName}</td>
                    <td>{sample.cv}</td>
                    <td>{sample.coverLetter}</td>
                    <td>{sample.location}</td>
                    <td>{sample.status}</td>
                    <td>{sample.applicationDate}</td>
                    <button
                      style={{ marginLeft: 10 }}
                      type="reset"
                      id="btn3"
                      onClick={() => clearThisEntry(sample, index)}
                    >
                      X
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              style={{ marginTop: 20 }}
              type="reset"
              id="btn2"
              onClick={clearSavedData}
            >
              CLEAR ALL
            </button>
          </div>
        )}
    </div>
  );
};

export default Project;
