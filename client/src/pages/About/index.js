import React from "react";
import ChartSelector from "../../components/ChartSelector";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12 text-center">
        <p>
            {`I am a highly motivated technical engineer with an extensive background across a variety of software environments, such as software integration, cloud infrastructure, cybersecurity and full-stack development. With a strong commitment to continuous learning, I focus on delivering secure solutions, removing organizational friction by diagnosing distributed system issues at scale and communicating effectively across leadership, Product, Development and Infrastructure. My experiences include large multi-system Go-Live deployments, deeply specialized technical consulting for customers and using monitoring and logging tools to troubleshoot a variety of platform issues.
`}
          </p>
          <div className="text-left">

  
          </div>


          
        </div>
      </div>
      <br/>
      <div className="row">

          <div className="col-lg-5 col-sm-5 col-md-5">
                <div className="card text-center" style={{ marginBottom: "10px" }}>
                  <div className="card-body">
                    <p className="card-text">
                      <ChartSelector category={"languages"} chartType={"horizontalBar"} />
                    </p>
                  </div>
                  <div className="card-footer">
                    <h4>Spoken Languages</h4>
                  </div>
                </div>
                </div>

                <div className="col-lg-5 col-sm-5 col-md-5">


                <div className="card text-center" style={{ marginBottom: "10px" }}>
                  <div className="card-body">
                    <p className="card-text">
                      <ChartSelector category={"birdsEyeView"} chartType={"horizontalBar"} />
                    </p>
                  </div>
                  <div className="card-footer">
                    <h4>Overview</h4>
                  </div>
                </div>
              </div>
              </div>

    </>
  );
};

export default About;