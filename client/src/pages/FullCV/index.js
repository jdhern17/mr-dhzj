import React from "react";
import Collapse from "../../components/Collapse";
import athena from "../../assets/images/athena_logo.png";
import usds from "../../assets/images/usds_logo.png";
import usds2 from "../../assets/images/usds_logo_text_2.png";
import glytec from "../../assets/images/glytec_logo.png";
import twoU from "../../assets/images/2U_logo.png";
import cka from "../../assets/images/cka.png";
import usc from "../../assets/images/usc_logo.png";
import harvard from "../../assets/images/harvard_logo.png";
import scheck from "../../assets/images/scheck_logo.png";
import denver from "../../assets/images/codefordenver_logo.png";
import blackduck from "../../assets/images/blackduck_logo.png";

const FullCV = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1 className="text-center">Full Resume / Curriculum Vitae (CV)</h1>
          <p className="text-center">Click on the tabs below for details.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="justify-content-center">
            <div
              className="accordion"
              id="accordionExample"
              style={{ maxWidth: "75vw" }}
            >
                           <Collapse
                image={<img src={blackduck} alt="Black Duck" className="imgStyle" />}
                idNum={"bd"}
              >
                <strong>Application Security Engineer</strong>
                <p>
                  <i>November 2025 - Present</i>
                </p>
                <li>
                Own the successful deployment and operation of DevSecOps engineering applications involving cloud platform installation, container and server configurations, CICD pipeline instrumentation, IAM architecture design, network security troubleshooting and SBOM reporting as well as microservice and embedded OS vulnerability remediation management.
                </li><li>
Deploy and troubleshoot Kubernetes and Docker Swarm installations, addressing issues such as ingress routing rules, helm commands, container settings, Postgres extensions, sizing, compatibility, service communications, certificates, load balancer settings and environment secret misconfigurations.
</li><li>
Operationalize vulnerability investigation, consulting, triage, remediation, reporting, automation and policy management for enterprise software applications and organizations.
                  </li>
              </Collapse>
                           <Collapse
                image={<img src={cka} alt="CKA" className="imgStyle" />}
                idNum={"cka"}
              >
                <strong>Certified Kubernetes Administrator</strong>
                <p>
                  <i>July 2025</i>
                </p>
                <li>
                  Managed and troubleshot Kubernetes clusters, demonstrating fluency across key stores, node and pod networking, RBAC configuration, log analysis, Helm and workload scheduling under real-time constraints.
                  </li>
              </Collapse>
              <Collapse
                image={<img src={twoU} alt="2U" className="imgStyle" />}
                idNum={"2u"}
              >
                <strong>Full-Stack Application Development & Cybersecurity Specialist</strong>
                <p>
                  <i>June 2021 - August 2024</i>
                </p>
                <li>
                Delivered full-stack technical services for software development and cybersecurity professional training programs across 100+ institutional partners, earning 4.9/5 CSAT score.
                </li>
                <li>
                Troubleshot and resolved 1000+ application misconfigurations and development issues across Azure, MERN, SQL, Ansible, Docker, Linux, Bash, Splunk, Wireshark, Burp Suite, Metasploit, Git and GraphQL via live debugging sessions.
                </li>
                <li>
                Performed code reviews, API endpoint automated testing, user acceptance testing, quality assessments and system command/configuration verification for 4000+ student deliverables within timed and audited ticketing workflows.
                </li>
<br/>
                <strong>Web Development Training Specialist</strong>
                <p>
                  <i>March 2020 - June 2021</i>
                </p>
                <li>
                Delivered specialized operation-ready technical training for junior developers across Node, MongoDB, MySQL, JavaScript and React, earning 4.9/5 CSAT score.                </li>
                <li>
                Enabled technical success, product engagement and program completion through 50+ relationship-managed engineering student customers.
                </li>
      
              
              </Collapse>
              <Collapse
                image={
                  <img
                    src={denver}
                    alt="Code For America (Denver)"
                    className="imgStyle"
                  />
                }
                idNum={"america"}
              >
                <strong>Developer</strong>
                <p>
                  <i>December 2020 - March 2021</i>
                </p>
                <li>
                Built a survey-based screening tool prototype for Expunge Colorado in collaboration with a team of four professional developers using tools such as AWS DynamoDB, AWS API Gateway, React.js, contentful, serverless and Survey.js.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={harvard}
                    alt="Harvard University"
                    className="imgStyle"
                  />
                }
                idNum={"harvard"}
              >
                <strong>Full-Stack Coding Bootcamp</strong>
                <p>
                  <i>March 2019 - September 2019</i>
                </p>
                <li>
                  Completed a six-month full-stack coding bootcamp implementing
                  web development tools and practices such as VS Code, GitHub,
                  Postman, React, MySQL and MongoDB as well as version control
                  and code reviews for both independent and team-based projects.
                </li>
              </Collapse>
              <Collapse
                image={<img src={glytec} alt="Glytec" className="imgStyle" />}
                idNum={"glytec"}
              >
                <strong>Solution Architect</strong>
                <p>
                  <i>March 2019 - September 2019</i>
                </p>
                <li>
                  Project managed the technical delivery of five (5) hospital
                  implementations for interface types such as ADFS SSO, SMART on
                  FHIR, ADT, and ORU through collaboration with clinical,
                  engineering, networking and business teams.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img src={athena} alt="athenahealth" className="imgStyle" />
                }
                idNum={"athena"}
              >
                <strong>Integration Connectivity Consultant</strong>
                <p>
                  <i>June 2016 - March 2019</i>
                </p>
                <li>
                  Guaranteed client SLAs and Go-Live adherence metrics of
                  Integration Project Engineers by providing Tier II network
                  connectivity consulting to partner systems on over 60
                  escalated connectivity, cron job and system networking issues.{" "}
                </li>
                <li>
                  Addressed Single Sign-On and Connectivity product and process
                  gaps by implementing a mixed methods Scrum & Kanban framework
                  in JIRA resulting in the completion of 115 user stories
                  executed across 18 sprints in 2018.
                </li>
                <li>
                  Lowered integration connectivity and Single Sign-On costs by
                  building a knowledge base of offerings, system settings,
                  troubleshooting best practices, and available diagnostic tools
                  such as packet captures, http traces, ping, traceroute,
                  access-list, debug and config outputs.
                </li>
                <br />
                <strong>Systems Integration Project Engineer</strong>
                <p>
                  <i>June 2016 - December 2017</i>
                </p>
                <li>
                  Built over 150 integrations involving solutions scoping,
                  message format analysis, interface engine build, product
                  enhancements, connectivity troubleshooting, unit testing,
                  Production deployment and Go-Live coordination.
                </li>
                <li>
                  Managed the business operations of a team of 7 Offshore
                  Partner Integration Engineers through process creation,
                  feedback cycles, escalation management, technical mentorship,
                  training, and product documentation.
                </li>
                <li>
                  Operationalized the delivery of the highest cost integration
                  offerings such as alpha/beta, non-HL7, report-based and custom
                  interfaces through research, documentation and partnering with
                  Product, Infrastructure and DevOps teams.
                </li>
                <li>
                  Provided end-user workflow demos and trainings to client
                  front-end, clinical, billing and IT staff for interfaces such
                  as bidirectional reports, patients (ADT), appointments (SIU),
                  charges (DFT), CCDA (PNR/QNR) & SSO (SP/IdP-init.).
                </li>
                <li>
                  Developed integration partnerships by relationship managing
                  HIEs, ACOs, enterprise clients, and global vendors.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={usds}
                    alt="US Department of State"
                    className="imgStyle"
                  />
                }
                imageTwo={
                  <img
                    src={usds2}
                    alt="US Department of State"
                    className="imgStyle"
                  />
                }
                idNum={"usds"}
              >
                <strong>IE University Fulbright Assistant</strong>
                <p>
                  <i>August 2014 - December 2015</i>
                </p>
                <li>
                  Project managed the creation of the Instituto de Empresa (IE)
                  language department’s student registration processes, internal
                  policies, language testing tools, reporting metrics and
                  interdepartmental workflows by collaborating with 28 language
                  professors and registrar staff to manage over 1500 students.
                </li>
                <li>
                  Lectured the Fall 2015 Academic Writing course for seven
                  undergraduate student groups totaling 193 students.
                </li>
                <li>
                  Strengthened faculty and staff Business English skills by
                  lecturing nightly workshops, case studies, and mock projects.
                </li><li>
                Led the full implementation of new test score scaling tools through vendor assessments, sample testing, workflow training and deployment.
                </li><li>
Strengthened operational resilience by collecting data from disparate departments and platforms in order to construct PivotTables and interactive workbooks for leadership reporting deliverables such as budget distribution, growth summaries and placement algorithms.
</li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={usc}
                    alt="University of Southern California"
                    className="imgStyle"
                  />
                }
                idNum={"usc"}
              >
                <strong>Pullias Research Assistant</strong>
                <p>
                  <i>May 2011 - March 2012</i>
                </p>
                <li>
                  Catalogued 23 research studies by reviewing and summarizing
                  details such as the literature review theoretical framework,
                  sample, methods, hypothesis, and results.
                </li>
                <li>
                  Created visualizations of math policy structures and
                  standardized test policies for the LACCD school district.
                </li>
                <br />
                <strong>McNair Research Fellow</strong>
                <p>
                  <i>January 2010 - August 2010</i>
                </p>
                <li>
                  Conducted a comparative cost-benefit study of economic policy
                  responses to recessions in Peru and Colombia.
                </li>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCV;
