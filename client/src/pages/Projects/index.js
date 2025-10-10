import React from "react";
import dof from "../../assets/images/dumonfhir_logo.png";
import denver from "../../assets/images/codefordenver_logo.png"
import graph from "../../assets/images/GraphQL_Logo.svg.png"

const Projects = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Projects</h1>
        </div>
      </div>
<br/>
      <div className="row">
        {/* <div className="col-lg-10 col-sm-12 col-md-12"> */}
          {/* <div className="row"> */}
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/* CARD TWO START */}
              <div className="card text-center">
                <div className="card-header">Code For America - Denver Brigade</div>
                <div className="text-center">
                  <br/>
                  <img
                    src={denver}
                    className="card-img-top cardImgStyle"
                    alt="Code For America - Denver Brigade"
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
              </div>
                {/* CARD THREE START */}
                <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card text-center">
                <div className="card-header">LinuxQuizzer</div>
                <div className="text-center">
                  <br/>
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
              </div>
              {/* CARD THREE END */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Projects;
