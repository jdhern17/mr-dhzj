import React, { useEffect, useState } from "react";
// import {HorizontalBar} from "react-chartjs-2";
import Chart from "../../components/Chart";
import athena from "../../assets/images/athena_logo.png";
import usds from "../../assets/images/usds_logo.png";
import usds2 from "../../assets/images/usds_logo_text_2.png";
import glytec from "../../assets/images/glytec_logo.png";
import twoU from "../../assets/images/2U_logo.png";
import usc from "../../assets/images/usc_logo.png";
import Card from "../../components/Card";

const Skills = () => {
  return (
    <>
      <h1 className="text-center">Technical Skill Set</h1>
      <div className="row"></div>
      {/* <h2 className="text-center">Overview</h2> */}
      <div className="row">
        <div className="col-8">
          <div className="card text-center">
            {/* <div className="card-header">Technical Summary</div> */}
            <div className="card-body">
              <p className="card-text">
                <Chart category={"summary"} chartType={"horizontalBar"} />
              </p>
            </div>
            <div className="card-footer">
              <h4>Breakdown</h4>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card text-center" style={{ margin: "10px" }}>
            <div className="card-body">
              <p className="card-text">
                <Chart category={"languages"} chartType={"horizontalBar"} />
              </p>
            </div>
            <div className="card-footer">
              <h4>Spoken Languages</h4>
            </div>
          </div>
          <div className="card text-center" style={{ margin: "10px" }}>
            <div className="card-body">
              <p className="card-text">
                <Chart category={"birdsEyeView"} chartType={"horizontalBar"} />
              </p>
            </div>
            <div className="card-footer">
              <h4>Bird's Eye View</h4>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h1 className="text-center">By Organization</h1>
      <div className="row">
        <Card image={<img src={twoU} alt="2U" style={{ height: "50px" }} />}>
          <Chart category={"twoU"} chartType={"doughnut"} />
        </Card>
        <Card
          image={<img src={glytec} alt="Glytec" style={{ height: "50px" }} />}
        >
          <Chart category={"glytec"} chartType={"doughnut"} />
        </Card>
        <Card
          image={<img src={athena} alt="athenahealth" style={{ height: "50px" }} />}
        >
          <Chart category={"athena"} chartType={"doughnut"} />
        </Card>
        <Card
        image={<img src={usds} alt="US Department of State" style={{ height: "50px" }} />}
        imageTwo={<img src={usds2} alt="US Department of State" style={{ height: "25px" }} />}
        >
          <Chart category={"usds"} chartType={"doughnut"} />
        </Card>
        <Card
          image={<img src={usc} alt="University of Southern California" style={{ height: "50px" }} />}
        >
          <Chart category={"usc"} chartType={"doughnut"} />
        </Card>
      </div>
    </>
  );
};

export default Skills;

{/* <div className="card text-center" style={{ margin: "10px" }}>
  <div className="card-body">
    <p className="card-text">
      <Chart category={"athena"} chartType={"doughnut"} />
    </p>
  </div>
  <div className="card-footer">
    <img src={athena} alt="Athenahealth" style={{ height: "50px" }} />
  </div>
</div>
<div className="card text-center" style={{ margin: "10px" }}>
  <div className="card-body">
    <p className="card-text">
      <Chart category={"usds"} chartType={"doughnut"} />
    </p>
  </div>
  <div className="card-footer">
    <img
      src={usds}
      alt="United States Department of State"
      style={{ height: "50px" }}
    />
    <img
      src={usds2}
      alt="United States Department of State"
      style={{ height: "25px" }}
    />
  </div>
</div>
<div className="card text-center" style={{ margin: "10px" }}>
  <div className="card-body">
    <p className="card-text">
      <Chart category={"usc"} chartType={"doughnut"} />
    </p>
  </div>
  <div className="card-footer">
    <img
      src={usc}
      alt="University of Southern California"
      style={{ height: "50px" }}
    />
  </div>
</div> */}