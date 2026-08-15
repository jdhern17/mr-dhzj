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
            {`I am a client-dedicated DevSecOps engineer with an extensive background across a variety of diverse software ecosystems, such as enterprise application security, systems integration and full-stack security training. With a strong commitment to continuous learning, I focus on delivering secure and scalable solutions, removing friction by diagnosing distributed system issues and communicating solutions effectively across Leadership, Engineering and Clients. My experiences include large multi-system Go-Live deployments as well as specialized technical consulting integrating monitoring and logging tools to troubleshoot a variety of platform issues.
`}
          </p>


          <p>
            {`With enterprise-level fluency across programming, networking, security, infrastructure and cloud as well as experience collaborating globally with distributed teams to address C-Suite-level P0 escalations on a near-24/7 basis, I have a proven ability to resiliently meet your organization's level of rigor and complexity. Whether the organization's environment prioritizes relationship-managing high-touch critical clients with pixel-perfect communications or delivering cost-effective deadline-based engineering solutions through rapid troubleshooting, I have consistently met and exceeded these challenges across multiple software environments.`}
          </p>
          <div className="text-left">

  
          </div>


          
        </div>
      </div>
      <br/>
      <div className="row">
      <br/>
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
                    <h4>Technical Overview</h4>
                  </div>
                </div>
              </div>
              </div>

    </>
  );
};

export default About;