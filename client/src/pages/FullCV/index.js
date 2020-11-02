import React from "react";
import Collapse from "../../components/Collapse";

const FullCV = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1 className="text-center">About Me</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-sm-12 col-md-12"></div>
        <div className="accordion" id="accordionExample">
          <Collapse title={"2U"} idNum={"One"}>
            Ensure student success by providing troubleshooting support for
            tools such as VS Code, GitHub, JavaScript, Node.js, MySQL, MongoDB
            and React.js as well as coaching concepts such as algorithms, MVC
            architecture, object-oriented programming, code design and version
            control while maintaining above a 4.8/5.0 student feedback rating
            for all metrics.
          </Collapse>
          <Collapse title={"Glytec"} idNum={"Two"}>
            Project managed the technical delivery of five (5) hospital
            implementations for interface types such as ADFS SSO, SMART on FHIR,
            ADT, and ORU through collaboration with clinical, engineering,
            networking and business teams.
          </Collapse>
          <Collapse title={"athenahealth"} idNum={"Three"}>
            Guaranteed client SLAs and Go-Live adherence metrics of Integration
            Project Engineers by providing Tier II network connectivity
            consulting to partner systems on over 60 escalated connectivity,
            cron job and system networking issues. Addressed Single Sign-On and
            Connectivity product and process gaps by implementing a mixed
            methods Scrum & Kanban framework in JIRA resulting in the completion
            of 115 user stories executed across 18 sprints in 2018. Lowered
            integration connectivity and Single Sign-On costs by building a
            knowledge base of offerings, system settings, troubleshooting best
            practices, and available diagnostic tools such as packet captures,
            http traces, ping, traceroute, access-list, debug and config
            outputs.
          </Collapse>
          <Collapse title={"athenahealth"} idNum={"Three"}>
            Guaranteed client SLAs and Go-Live adherence metrics of Integration
            Project Engineers by providing Tier II network connectivity
            consulting to partner systems on over 60 escalated connectivity,
            cron job and system networking issues. Addressed Single Sign-On and
            Connectivity product and process gaps by implementing a mixed
            methods Scrum & Kanban framework in JIRA resulting in the completion
            of 115 user stories executed across 18 sprints in 2018. Lowered
            integration connectivity and Single Sign-On costs by building a
            knowledge base of offerings, system settings, troubleshooting best
            practices, and available diagnostic tools such as packet captures,
            http traces, ping, traceroute, access-list, debug and config
            outputs.
          </Collapse>
          <Collapse title={"athenahealth"} idNum={"Three"}>
            Guaranteed client SLAs and Go-Live adherence metrics of Integration
            Project Engineers by providing Tier II network connectivity
            consulting to partner systems on over 60 escalated connectivity,
            cron job and system networking issues. Addressed Single Sign-On and
            Connectivity product and process gaps by implementing a mixed
            methods Scrum & Kanban framework in JIRA resulting in the completion
            of 115 user stories executed across 18 sprints in 2018. Lowered
            integration connectivity and Single Sign-On costs by building a
            knowledge base of offerings, system settings, troubleshooting best
            practices, and available diagnostic tools such as packet captures,
            http traces, ping, traceroute, access-list, debug and config
            outputs.
          </Collapse>
          <Collapse title={"athenahealth"} idNum={"Three"}>
            Guaranteed client SLAs and Go-Live adherence metrics of Integration
            Project Engineers by providing Tier II network connectivity
            consulting to partner systems on over 60 escalated connectivity,
            cron job and system networking issues. Addressed Single Sign-On and
            Connectivity product and process gaps by implementing a mixed
            methods Scrum & Kanban framework in JIRA resulting in the completion
            of 115 user stories executed across 18 sprints in 2018. Lowered
            integration connectivity and Single Sign-On costs by building a
            knowledge base of offerings, system settings, troubleshooting best
            practices, and available diagnostic tools such as packet captures,
            http traces, ping, traceroute, access-list, debug and config
            outputs.
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default FullCV;
