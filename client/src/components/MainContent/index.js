import React, { Component } from "react";
import { useParams, Route } from "react-router-dom";
import titleArr from "../../pages.json";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Skills from "../../pages/Skills";
import FullCV from "../../pages/FullCV";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import Download from "../../pages/Download";
import Sidebar from "../Sidebar";

const MainContent = () => {
  const componentsList = {
    About: About,
    Resume: Resume,
    Skills: Skills,
    FullCV: FullCV,
    Projects: Projects,
    Contact: Contact,
    Download: Download,
  };
  const { linkId } = useParams();
  const currentPage = titleArr.filter((page) => {
    return linkId === page.linkName;
  });
  const CurrComp = componentsList[currentPage[0].pageName];
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12" style={{overflow:"scroll"}}>
      <CurrComp />
        </div>
      </div>
      </div>
    </>
  );
};

export default MainContent;
