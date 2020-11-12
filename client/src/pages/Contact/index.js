import React from 'react';
import mail from '../../assets/images/mail_logo.png'

const Contact = () => {
    return ( <>
          <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12">
        <div class="card text-center" style={{width: "18rem"}}>
            <div class="card-header">My Email</div>
            <img src={mail} class="card-img-top" alt="Resume" />
            <div class="card-body">
              {/* <h5 class="card-title">Card title</h5> */}
              <p class="card-text">
hernandez.d.john@gmail.com              </p>
              <a href="mailto:hernandez.d.john@gmail.com" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Send me an Email!
              </a>
            </div>
          </div>
</div>
</div>

    </> );
}
 
export default Contact;