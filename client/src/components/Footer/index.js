import React, { Component } from "react";
import LinkedIn from "../../assets/images/linkedin_logo.png";
import GitHub from "../../assets/images/github_logo.png";
import PDF from "../../assets/images/pdf_logo.png";
import Resume from "../PDFCard/Hernandez_John_Resume.pdf";


const Footer = () => {
  return (
    <>
            <div className="footer">
                <a href="https://www.linkedin.com/in/dhzj00/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" style={{height:"50px", width:"50px", marginRight:"5px"}}/></a>
                <a href="https://github.com/jdhern17" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" style={{height:"50px", width:"50px", marginRight:"5px"}}/></a>
                <a href={Resume} target="_blank" rel="noopener noreferrer"><img src={PDF} alt="PDF" style={{height:"50px", width:"50px", marginRight:"5px"}}/></a>
            </div>
    </>
  );
};

export default Footer;
