import React from "react";
import dof from "../../assets/images/dumonfhir_logo.png"

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
          <div class="card text-center" style={{width: "18rem"}}>
            <div class="card-header">DUMonFHIR</div>
            <img src={dof} class="card-img-top" alt="DUMonFHIR" />
            <div class="card-body">
              {/* <h5 class="card-title">Card title</h5> */}
              <p class="card-text">
                A learning to support non-technical teams understand how FHIR works!
              </p>
              <a href="https://tranquil-fortress-53463.herokuapp.com" class="btn btn-primary" target="_blank">
                Visit Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
