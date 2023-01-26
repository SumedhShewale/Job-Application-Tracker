import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("MyJobDetails")) || []
  );

  // function setTasks() {
  //   setDatas([...datas, data]);
  //   setData("");
  // }

  function change(e) {
    let value = e.currentTarget.value;
    // let updated = document.getElementById("status").value;
    document.getElementById("updateHere").innerHTML = "You selected: " + value;
  }

  function savedContent(e) {
    e.preventDefault();
    // let formValues = e.currentTarget.
    let detail = {
      jobName: e.currentTarget[0].value,
      cv: e.currentTarget[1].value,
      coverLetter: e.currentTarget[2].value,
      country: e.currentTarget[3].value,
      updatedStatus: e.currentTarget[4].value,
      applicationDate: e.currentTarget[5].value,
    };
    let details = localStorage.getItem("MyJobDetails");
    details = JSON.parse(details) || [];
    details.push(detail);
    // document.querySelector('form').reset();
    document.forms[0].reset();

    // console.warn('added', { details });
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(details, '\t', 2);

    // Saving in local storage
    localStorage.setItem("MyJobDetails", JSON.stringify(details));
    // setDetails(details);
  }

  return (
    <div>
      <form id="myform" className="background__bg" onSubmit={savedContent}>
        <label for="job_name">Job Name:</label>
        <input name="job_name" type="text" id="job_name" /> <br /> <br />
        <label for="file_upload">CV:</label>
        <input name="file1" type="file" id="file1" /> <br /> <br />
        <label for="cover_letter">Cover Letter:</label>
        <input name="file2" type="file" id="file2" /> <br /> <br />
        <label for="location">Location/Country:</label>
        <input name="location" type="text" id="location" /> <br /> <br />
        <label for="app_status">Status:</label>
        <select name="status" id="status" onChange={change}>
          <option value="Null" selected>
            -
          </option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="In-Process">In-Process</option>
        </select>{" "}
        <br /> <br />
        <div id="updateHere"></div> <br />
        <label for="app_date">Application Date:</label>
        <input name="app_date" type="text" id="app_date" /> <br /> <br />
        <button type="submit" id="btn">
          Save
        </button>
      </form>
      <br /> <br />
      <table>
        <thead>
          <tr>
            <td>Job Name</td>
            <td>CV</td>
            <td>Cover Letter</td>
            <td>Location/Country</td>
            <td>Status</td>
            <td>Applied on</td>
          </tr>
        </thead>
        <tbody>{/* data.map("MyJobDetails") */}</tbody>
      </table>
    </div>
  );
};

export default App;
