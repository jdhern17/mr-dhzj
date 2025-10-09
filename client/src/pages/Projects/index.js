import React from "react";
import dof from "../../assets/images/dumonfhir_logo.png";
import expunge from "../../assets/images/expunge_logo_medium.png"
import graph from "../../assets/images/GraphQL_Logo.svg.png"

const Projects = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Projects</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/* CARD TWO START */}
              <div className="card text-center">
                <div className="card-header">Expunge Colorado Screener Tool</div>
                <div className="text-center">
                  <img
                    src={expunge}
                    className="card-img-top cardImgStyle"
                    alt="Expunge CO Screener"
                  />
                </div>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    Survey-based screening tool for Expunge Colorado!
                  </p>
                  <a
                    href="https://codefordenver.github.io/expunge-colorado-screener/"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
              {/* CARD TWO END */}
                {/* CARD THREE START */}
                <div className="card text-center">
                <div className="card-header">LinuxQuizzer</div>
                <div className="text-center">
                  <img
                    src={graph}
                    className="card-img-top cardImgStyle"
                    alt="Full-Stack Graph Security"
                  />
                </div>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    Full-Stack GraphQL Security Project!
                  </p>
                  <a
                    href="https://github.com/jdhern17/LinuxQuizzer"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
              {/* CARD THREE END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
