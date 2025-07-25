import React from "react";
import ChartSelector from "../../components/ChartSelector";
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
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Technical Skillset</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-sm-10 col-md-10">
          <div className="card text-center">
            <div className="card-body">
              <p className="card-text">
                <ChartSelector category={"summary"} chartType={"horizontalBar"} />
              </p>
            </div>
            <div className="card-footer">
              <h4>Breakdown</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12">
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
          <div className="card text-center" style={{ marginBottom: "10px" }}>
            <div className="card-body">
              <p className="card-text">
                <ChartSelector category={"birdsEyeView"} chartType={"horizontalBar"} />
              </p>
            </div>
            <div className="card-footer">
              <h4>Overiew</h4>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">By Organization</h1>
        </div>
      </div>
      <div className="row">
        <Card image={<img src={twoU} alt="2U" className="imgStyle" />}>
          <ChartSelector category={"twoU"} chartType={"doughnut"} />
        </Card>
        <Card image={<img src={glytec} alt="Glytec" className="imgStyle" />}>
          <ChartSelector category={"glytec"} chartType={"doughnut"} />
        </Card>
        <Card
          image={<img src={athena} alt="athenahealth" className="imgStyle" />}
        >
          <ChartSelector category={"athena"} chartType={"doughnut"} />
        </Card>
        <Card
          image={
            <img src={usds} alt="US Department of State" className="imgStyle" />
          }
          imageTwo={
            <img
              src={usds2}
              alt="US Department of State"
              className="imgStyle"
            />
          }
        >
          <ChartSelector category={"usds"} chartType={"doughnut"} />
        </Card>
        <Card
          image={
            <img
              src={usc}
              alt="University of Southern California"
              className="imgStyle"
            />
          }
        >
          <ChartSelector category={"usc"} chartType={"doughnut"} />
        </Card>
      </div>
    </>
  );
};

export default Skills;

{
  /* <div className="card text-center" style={{ margin: "10px" }}>
  <div className="card-body">
    <p className="card-text">
      <Chart category={"athena"} chartType={"doughnut"} />
    </p>
  </div>
  <div className="card-footer">
    <img src={athena} alt="Athenahealth" className="imgStyle" />
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
</div> */
}
