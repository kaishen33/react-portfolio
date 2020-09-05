import React, { Component } from "react";

class Portfolio extends Component {

  render() {
    return (
      <div className="jumbotron container">

        <h1>Portfolio</h1>

        <div className="row">

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src="assets/Music Project.JPG" className="card-img-top" alt="Music Project Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src="assets/Schedule.JPG" className="card-img-top" alt="Schedule Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src="assets/Weather.JPG" className="card-img-top" alt="Weather Logo"></img>

          </div>

        </div>

        <div className="row">

          <div className="card-body col-md-4">
            <h5 className="card-title">Music Project</h5>
            <a href="https://github.com/kaishen33/Spotify-Artist-Search" className="btn btn-primary">Github Link</a>
            <a href="https://kaishen33.github.io/Spotify-Artist-Search/index.html" className="btn btn-primary">View Page</a>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Schedule Maker</h5>
            <a href="https://github.com/kaishen33/schedulemaker" className="btn btn-primary">Github Link</a>
            <a href="https://kaishen33.github.io/schedulemaker/index.html" className="btn btn-primary">View Page</a>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Weather Report</h5>
            <a href="https://github.com/kaishen33/weather" className="btn btn-primary">Github Link</a>
            <a href="https://kaishen33.github.io/weather/index.html" className="btn btn-primary">View Page</a>
          </div>

        </div>

        <div className="row">

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src="assets/Employee Track.JPG" className="card-img-top" alt="Employee Tracker Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src="assets/Profile List.JPG" className="card-img-top" alt="Employee Profling Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src="assets/Rental.JPG" className="card-img-top" alt="Vacation Logo"></img>

          </div>

        </div>

        <div className="row">

          <div className="card-body col-md-4">
            <h5 className="card-title">Employee Tracker</h5>
            <a href="https://github.com/kaishen33/employeetracker" className="btn btn-primary">Github Link</a>
            <a href="https://github.com/kaishen33/Spotify-Artist-Search" className="btn btn-primary">View Page</a>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Employee Profiling</h5>
            <a href="https://github.com/kaishen33/OOP" className="btn btn-primary">Github Link</a>
            <a href="https://kaishen33.github.io/OOP/output/team.html" className="btn btn-primary">View Page</a>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Beyond Vacation</h5>
            <a href="https://beyondvacation.herokuapp.com/" className="btn btn-primary">Github Link</a>
            <a href="https://github.com/vanessabau/projectTwo" className="btn btn-primary">View Page</a>
          </div>

        </div>

      </div>
    );
  }
}

export default Portfolio;
