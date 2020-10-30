import React, { useEffect, useState } from "react";
// import {HorizontalBar} from "react-chartjs-2";
import Chart from "../../components/Chart"

const Skills = () => {

  return <>
  <div className="row">
  <h1>Technical Skill Set</h1>
  </div>
  <div className="row">
    <div className="col-10">
    <div class="card">
  <div class="card-header">
    Summary of Skills
  </div>
  <div class="card-body">
    <p class="card-text"> <Chart category={"summary"}/></p>
  </div>
</div>
    </div>
  </div>
  </>;
};

export default Skills;
