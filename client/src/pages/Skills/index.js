import React, { useEffect, useState } from "react";
import {HorizontalBar} from "react-chartjs-2";

const Skills = () => {

const [chartData, setChartData] = useState({});  
const chart = () => {
  setChartData({
    labels:["English/Spanish", "PowerPoint/Slides", "Word/Docs", "Excel/Sheets", "JSON/XML", "Flatfile/CSV", "API/REST", "Browser Dev Tools", "JavaScript", "VS Code", "SSO", "HL7v2/CCDA/HL7v3", "SQL/MySQL", "HTTP", "TCP/IP"],
    datasets: [
      {
      label: "Years of Experience",
      data: [29, 15, 15, 15, 5, 8, 4, 5, 2, 2, 3, 4, 3, 4, 2],
      backgroundColor: "#dab370",
      borderWidth: 4,
      hoverBackgroundColor: "#d5a350",
      minBarLength: 2,
    }
  ]
  })
}

useEffect(()=> {
  chart();
}, []);
  return <>
  <div className="row">
  <h1>Technical Skill Set</h1>
  </div>
  <div className="row">
    <div className="col-10">
    <HorizontalBar data={chartData}/>
    </div>
  </div>
  </>;
};

export default Skills;
