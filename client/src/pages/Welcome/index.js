import React from "react";
// import mePicMed from "../../assets/images/johnpic_medium.jpg";
import mePicMed from "../../assets/images/johnpic_medium_circle.png";
import mePicSmall from "../../assets/images/johnpic_small_circle.png";

const Welcome = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Welcome</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12 text-center">
          <p>
            {`Hello! Thank you for visiting my portfolio. On the left sidebar, you'll find buttons to different pages demonstrating my current skillset and past experiences! Feel free to reach out (hernandez.d.john@gmail.com) if you have any questions.`}
            <br/>
            <br/>
            <a
                href="mailto:hernandez.d.john@gmail.com"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me an Email!
              </a>

              <br/>
              <br/>
          </p>
          <div className="text-center">
            <picture>
              <source media="(max-width:850px)" srcSet={mePicMed} />
              <source media="(max-width:465px)" srcSet={mePicSmall} />
              <img
                src={mePicMed}
                className="img-fluid rounded"
                style={{ align: "center" }}
                alt="pic of John"
              />
            </picture>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Welcome;
