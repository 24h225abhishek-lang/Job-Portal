import React, { useState } from "react";
import "./App.css";

function App() {

  const jobsData = [
    {id:1, role:"Software Developer", company:"TCS", location:"Chennai", salary:"₹6 LPA", details:"Develop and maintain software applications."},
    {id:2, role:"Frontend Developer", company:"Infosys", location:"Bangalore", salary:"₹7 LPA", details:"Build user interfaces using React."},
    {id:3, role:"Backend Developer", company:"Wipro", location:"Hyderabad", salary:"₹6.5 LPA", details:"Develop APIs and backend services."},
    {id:4, role:"Data Analyst", company:"Accenture", location:"Chennai", salary:"₹5.5 LPA", details:"Analyze and visualize business data."},
    {id:5, role:"Python Developer", company:"Capgemini", location:"Mumbai", salary:"₹8 LPA", details:"Build Python based applications."},
    {id:6, role:"Java Developer", company:"Cognizant", location:"Pune", salary:"₹7 LPA", details:"Develop Java enterprise applications."},
    {id:7, role:"Full Stack Developer", company:"HCL", location:"Bangalore", salary:"₹9 LPA", details:"Frontend and backend development."},
    {id:8, role:"UI/UX Designer", company:"Zoho", location:"Delhi", salary:"₹6 LPA", details:"Design modern user interfaces."},
    {id:9, role:"Testing Engineer", company:"Tech Mahindra", location:"Hyderabad", salary:"₹5 LPA", details:"Software testing and automation."},
    {id:10, role:"Cloud Engineer", company:"IBM", location:"Bangalore", salary:"₹10 LPA", details:"Manage cloud infrastructure."},
    {id:11, role:"DevOps Engineer", company:"Oracle", location:"Pune", salary:"₹11 LPA", details:"CI/CD and deployment automation."},
    {id:12, role:"Machine Learning Engineer", company:"Amazon", location:"Chennai", salary:"₹14 LPA", details:"Develop machine learning models."},
    {id:13, role:"Cyber Security Analyst", company:"Deloitte", location:"Delhi", salary:"₹8 LPA", details:"Protect systems from cyber threats."},
    {id:14, role:"Network Engineer", company:"Cisco", location:"Mumbai", salary:"₹7 LPA", details:"Manage enterprise networks."},
    {id:15, role:"AI Engineer", company:"Google", location:"Bangalore", salary:"₹18 LPA", details:"Build AI applications."},
    {id:16, role:"Mobile App Developer", company:"Zoho", location:"Chennai", salary:"₹8 LPA", details:"Develop Android and iOS apps."},
    {id:17, role:"Database Administrator", company:"Oracle", location:"Hyderabad", salary:"₹9 LPA", details:"Manage company databases."},
    {id:18, role:"System Engineer", company:"Infosys", location:"Pune", salary:"₹6 LPA", details:"Maintain IT infrastructure."},
    {id:19, role:"Business Analyst", company:"EY", location:"Delhi", salary:"₹8 LPA", details:"Analyze business requirements."},
    {id:20, role:"Embedded Engineer", company:"Bosch", location:"Chennai", salary:"₹7 LPA", details:"Develop embedded systems."}
  ];

  const [savedJobs,setSavedJobs]=useState([]);
  const [searchRole,setSearchRole]=useState("");
  const [searchLocation,setSearchLocation]=useState("");
  const [selectedJob,setSelectedJob]=useState(null);

  const filteredJobs = jobsData.filter(
    job =>
      job.role.toLowerCase().includes(searchRole.toLowerCase()) &&
      job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      !savedJobs.some(saved=>saved.id===job.id)
  );

  const saveJob=(job)=>{
    setSavedJobs([...savedJobs,job]);
  };

  const removeJob=(job)=>{
    setSavedJobs(savedJobs.filter(j=>j.id!==job.id));
  };

  return (

    <div className="container">

      <h1 className="title">Job Portal</h1>

      <p className="subtitle">
        Search and save your favorite tech roles across India.
      </p>

      <div className="search-section">

        <input
          type="text"
          placeholder="Search role (e.g. Developer)"
          value={searchRole}
          onChange={(e)=>setSearchRole(e.target.value)}
        />

        <input
          type="text"
          placeholder="Search location (e.g. Bangalore)"
          value={searchLocation}
          onChange={(e)=>setSearchLocation(e.target.value)}
        />

      </div>

      <h2 className="heading">
        Available Jobs
        <span className="count">{filteredJobs.length}</span>
      </h2>

      <div className="job-grid">

        {filteredJobs.map((job)=>(

          <div className="job-card" key={job.id}>

            <h3>{job.role}</h3>

            <div className="info">
              <span>{job.company}</span>
              <span>{job.location}</span>
              <span>{job.salary}</span>
            </div>

            <div className="buttons">

              <button
                className="view-btn"
                onClick={() =>
                setSelectedJob(
                selectedJob?.id===job.id ? null : job
                )
              }>
                View Details
              </button>

              <button
                className="save-btn"
                onClick={()=>saveJob(job)}
              >
                Save Job
              </button>

            </div>

            {selectedJob?.id===job.id && (

              <div className="details">

                <p><b>Company:</b> {job.company}</p>

                <p><b>Location:</b> {job.location}</p>

                <p><b>Salary:</b> {job.salary}</p>

                <p><b>Description:</b> {job.details}</p>

              </div>

            )}

          </div>

        ))}

      </div>

      <h2 className="heading">Saved Jobs</h2>

      <div className="job-grid">

      {savedJobs.map((job)=>(

        <div className="job-card" key={job.id}>

          <h3>{job.role}</h3>

          <p>{job.company}</p>

          <button
            className="save-btn"
            onClick={()=>removeJob(job)}
          >
            Remove
          </button>

        </div>

      ))}

      </div>

    </div>
  );
}

export default App;
