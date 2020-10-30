import React, { useEffect, useState } from "react";
// import {HorizontalBar} from "react-chartjs-2";
import Chart from "../../components/Chart";
import athena from "../../assets/images/athena_logo.png";
import usds from "../../assets/images/usds_logo.png";
import usds2 from "../../assets/images/usds_logo_text_2.png";
import glytec from "../../assets/images/glytec_logo.png";
import twoU from "../../assets/images/2U_logo.png"; 

const Skills = () => {
  return (
    <>
      <div className="row">
        <h1>Technical Skill Set</h1>
      </div>
      <h2 className="text-center">Overview</h2>
      <div className="row">
        <div className="col-8">
          <div class="card text-center">
            {/* <div class="card-header">Technical Summary</div> */}
            <div class="card-body">
              <p class="card-text">
                <Chart category={"summary"} chartType={"horizontalBar"} />
              </p>
            </div>
            <div class="card-footer">Technical Summary</div>
          </div>
        </div>
        <div className="col-4">
          <div class="card text-center">
            <div class="card-body">
              <p class="card-text">
                <Chart category={"languages"} chartType={"horizontalBar"} />
              </p>
            </div>
            <div class="card-footer">Languages</div>
          </div>
        </div>
      </div>
      <br />
      <h2 className="text-center">By Organization</h2>
      <div className="row">
      <div class="card text-center" style={{margin:"10px"}}>
          <div class="card-body">
            <p class="card-text">
              <Chart category={"twoU"} chartType={"doughnut"} />
            </p>
          </div>
          <div class="card-footer">
            <img src={twoU} alt="2U" style={{ height: "50px" }} />
          </div>
        </div>
      
        <div class="card text-center" style={{margin:"10px"}}>
          <div class="card-body">
            <p class="card-text">
              <Chart category={"glytec"} chartType={"doughnut"} />
            </p>
          </div>
          <div class="card-footer">
            <img src={glytec} alt="Glytec" style={{ height: "50px" }} />
          </div>
        </div>
        <div class="card text-center" style={{margin:"10px"}}>
          <div class="card-body">
            <p class="card-text">
              <Chart category={"athena"} chartType={"doughnut"} />
            </p>
          </div>
          <div class="card-footer">
            <img src={athena} alt="Athenahealth" style={{ height: "50px" }} />
          </div>
        </div>
        <div class="card text-center" style={{margin:"10px"}}>
          <div class="card-body">
            <p class="card-text">
              <Chart category={"usds"} chartType={"doughnut"} />
            </p>
          </div>
          <div class="card-footer">
            <img src={usds} alt="United States Department of State" style={{ height: "50px" }} />
            <img src={usds2} alt="United States Department of State" style={{ height: "25px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
