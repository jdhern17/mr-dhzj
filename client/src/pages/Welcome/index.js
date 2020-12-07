import React from "react";
import mePic from "../../assets/images/johnpic.jpg";

const Welcome = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Welcome!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12 text-center">
          <p>
            {`Hello my people! Thank you for visiting my portfolio. On the left sidebar, you'll find some buttons to different pages demonstrating my current skillset and past experiences! Feel free to reach out via the contact information provided if you have any questions.`}
          </p>
          <div className="text-center">
          <img src={mePic} className="img-fluid rounded" style={{ align: "center" }} />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Welcome;
