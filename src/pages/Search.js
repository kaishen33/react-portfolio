import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <form>
        <div className="container-fluid jumbotron">
          <div className="row">
            <div className="col-md-7 ml-5">

              <h4>Contact me!</h4>

              <div className="container">
                <div className="row">

                  <form className="col-sm-12" action="mailto:keshen@ucdavis.edu">
                    <div className="form-group">
                      <label className="inputName">Your Name</label>
                      <br></br>
                      <input type="name"></input>
                    </div>

                    <div className="form-group">
                      <label className="exampleInputEmail1">Email address</label>
                      <br></br>
                      <input type="email"></input>
                    </div>

                    <div className="form-group">
                      <label className="yourMessage">Message</label>
                      <br></br>
                      <textarea type="Message" cols="60" rows="10"></textarea>
                    </div>

                    <button className="btn btn-info">Submit</button>
                  </form>

                </div>
              </div>

            </div>

            <div className="col-md-4">
              <div className="container">
                <div className="row">
                  <div className="card col-sm-12" style-prop-object="width: 18rem;">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div id="list-example" className="list-group">
                        <a className="list-group-item list-group-item-action"
                          href="https://www.linkedin.com/in/edward-shen-41bab7176/">Linkedin</a>

                        <a className="list-group-item list-group-item-action"
                          href="https://github.com/kaishen33">GitHub</a>

                        <a className="list-group-item list-group-item-action image"
                          href="#list-item-3">Resume</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>

        <div className="container">
          <nav className="navbar">

            <span className="navbar-text">
              <h4>Thanks for checking it out!</h4>
            </span>

          </nav>
        </div>
      </form>
    );
  }
}

export default Search;
