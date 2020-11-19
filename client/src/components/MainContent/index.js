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
import Welcome from "../../pages/Welcome";
import Sidebar from "../Sidebar";

import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 20vw;
  margin-right: 6em;
  grid-auto-rows: minmax(25px, auto);
    @media (max-width: 543px) {
    margin-left: 25vw;
  }
`; 

const MainContent = () => {
  const componentsList = {
    Welcome: Welcome,
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
    <GridWrapper>
      <div style={{marginBottom: "100px"}}>
      <CurrComp />
      </div>
      </GridWrapper>
    </>
  );
};

export default MainContent;
