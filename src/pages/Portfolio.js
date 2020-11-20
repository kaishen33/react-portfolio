import React, { Component } from "react";
import finalProject from "../assets/Controller.png"
import note from "../assets/Note.png"
import exercise from "../assets/Exercise.png"
import filter from "../assets/Filter List.png"
import music from "../assets/Music Project.png"
import list from "../assets/Profile List.png"
import rental from "../assets/Rental.png"
import schedule from "../assets/Schedule.png"
import weather from "../assets/Weather.png"
import "./style.css";

class Portfolio extends Component {

  render() {
    return (
      <div className="jumbotron container">

        <h1>Portfolio</h1>

        <div className="row">

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={music} className="card-img-top" alt="Music Project Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={schedule} className="card-img-top" alt="Schedule Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={weather} className="card-img-top" alt="Weather Logo"></img>

          </div>

        </div>

        <div className="row">

          <div className="card-body col-md-4">
            <h5 className="card-title">Music Project</h5>
            <a href="https://github.com/kaishen33/Spotify-Artist-Search" className="btn btn-primary">Github Link</a>
            <a href="https://kaishen33.github.io/Spotify-Artist-Search/index.html" className="btn btn-primary">View Page</a>
            <p>Search artists, songs, an albums associated with each other.</p>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Schedule Maker</h5>
            <a href="https://github.com/kaishen33/schedulemaker" className="btn btn-primary">Github Link</a>
            <a href="https://kaishen33.github.io/schedulemaker/index.html" className="btn btn-primary">View Page</a>
            <p>A way to schedule your day.</p>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Weather Report</h5>
            <a href="https://github.com/kaishen33/weather" className="btn btn-primary">Github Link</a>
            <a href="https://kaishen33.github.io/weather/index.html" className="btn btn-primary">View Page</a>
            <p>City weather forecast application</p>
          </div>

        </div>



        <div className="row">

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={note} className="card-img-top" alt="Employee Tracker Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={list} className="card-img-top" alt="Employee Profling Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={rental} className="card-img-top" alt="Vacation Logo"></img>

          </div>

        </div>

        <div className="row">

          <div className="card-body col-md-4">
            <h5 className="card-title">Note Taker</h5>
            <a href="https://github.com/kaishen33/Server" className="btn btn-primary">Github Link</a>
            <a href="https://kai-notes-db-hw.herokuapp.com/" className="btn btn-primary">View Page</a>
            <p>Notetaking application</p>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Employee Profiling</h5>
            <a href="https://github.com/kaishen33/OOP" className="btn btn-primary">Github Link</a>
            <a href="https://kaishen33.github.io/OOP/output/team.html" className="btn btn-primary">View Page</a>
            <p>Employee profile generator</p>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Beyond Vacation</h5>
            <a href="https://beyondvacation.herokuapp.com/" className="btn btn-primary">Github Link</a>
            <a href="https://github.com/vanessabau/projectTwo" className="btn btn-primary">View Page</a>
            <p>Outdoor rental application</p>
          </div>

        </div>



        <div className="row">

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={exercise} className="card-img-top" alt="Exercise Mongodb Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={filter} className="card-img-top" alt="React Filter List Logo"></img>

          </div>

          <div className="card col-md-4" style-prop-object="width: 18rem;">
            <img src={finalProject} className="card-img-top" alt="Final Phantasy Logo"></img>

          </div>

        </div>

        <div className="row">

          <div className="card-body col-md-4">
            <h5 className="card-title">Exercise Tracker</h5>
            <a href="https://github.com/kaishen33/mongodb" className="btn btn-primary">Github Link</a>
            <a href="https://kai-fitness-tracker-hw.herokuapp.com/?id=5f2caaf249a8574560f9cbb1" className="btn btn-primary">View Page</a>
            <p>Exercise planner and performance tracker</p>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Filter List React</h5>
            <a href="https://github.com/kaishen33/react" className="btn btn-primary">Github Link</a>
            <a href=" https://react-employee-filter.herokuapp.com/" className="btn btn-primary">View Page</a>
            <p>List organizer application</p>
          </div>

          <div className="card-body col-md-4">
            <h5 className="card-title">Final Phantasy Project</h5>
            <a href="https://github.com/kaishen33/Project3" className="btn btn-primary">Github Link</a>
            <a href="https://dry-mountain-58151.herokuapp.com/" className="btn btn-primary">View Page</a>
            <p>Free to play game application</p>
          </div>

        </div>

      </div>
    );
  }
}

export default Portfolio;
