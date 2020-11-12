import React from 'react';
import PDF from '../../assets/images/pdf_logo.png'
import Resume from "../../components/PDFCard/Hernandez_John_Resume.pdf";

const Download = () => {
    return ( <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Download Links</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12">
        <div class="card text-center" style={{width: "18rem"}}>
            <div class="card-header">My Resume</div>
            <img src={PDF} class="card-img-top" alt="Resume" />
            <div class="card-body">
              {/* <h5 class="card-title">Card title</h5> */}
              <p class="card-text">
Download my Resume Here!              </p>
              <a href={Resume} class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Go To Resume
              </a>
            </div>
          </div>
</div>
</div>
    </> );
}
 
export default Download;