import React, { useState } from 'react';
import "./Project.css";

const Project = () => {
    const [samples, setSamples] = useState(JSON.parse(localStorage.getItem("MyJobDetails")) || []);

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
        // resetForm({ details: '' })
    }


    const changeStatus = (e) => {
        let value = e.target.value;
        document.getElementById("updateHere").innerHTML = value;
    }

    return (
        <div className="App">
            <form id="myform" onSubmit={savedContent}>

                <label>Job name:</label>
                <input
                    type="text"
                    placeholder="Enter Job Name.."
                    value={samples.jobName}
                />  <br /> <br />
                {/* <label>{samples.jobName}</label> <br /> <br /> */}

                <label>CV: </label>
                <input
                    type="file"
                    value={samples.cv}
                /> <br /> <br />

                <label>Cover Letter: </label>
                <input
                    type="file"
                    value={samples.coverLetter}
                /> <br /> <br />

                <label>Location/Country:</label>
                <input
                    type="text"
                    value={samples.location}
                /> <br /> <br />

                <label>Status:</label>
                <select
                    id="status"
                    value={samples.status}
                    onChange={changeStatus}
                >
                    {/* <option value="Null">-</option> */}
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                    <option value="In-Process">In-Process</option>
                </select>
                <br /> <br />
                {/* <div id="updateHere"></div> <br /> */}

                <label>Application Date: </label>
                <input
                    type="date"
                    value={samples.applicationDate}
                /> <br /> <br />

                <button
                    type="submit"
                    id="btn"
                    value={samples.saveButton}
                    onClick={() => setSamples(() => samples)}
                >SAVE</button>

                {/* <tr>
                        <td>{samples.jobName}</td>
                        <td>{samples.cv}</td>
                        <td>{samples.coverLetter}</td>
                        <td>{samples.location}</td>
                        <td id="updateHere">{samples.status}</td>
                        <td>{samples.applicationDate}</td>
                    </tr> */}

                <table>
                    <thead>
                        <tr>
                            <th>Job Name</th>
                            <th>CV</th>
                            <th>Cover Letter</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th>Application Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {samples?.map((sample) => (
                            <tr>
                                <td>{sample.jobName}</td>
                                <td>{sample.cv}</td>
                                <td>{sample.coverLetter}</td>
                                <td>{sample.location}</td>
                                <td>{sample.status}</td>
                                <td>{sample.applicationDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </div >
    )
}

export default Project
