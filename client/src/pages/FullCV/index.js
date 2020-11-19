import React from "react";
import Collapse from "../../components/Collapse";
import athena from "../../assets/images/athena_logo.png";
import usds from "../../assets/images/usds_logo.png";
import usds2 from "../../assets/images/usds_logo_text_2.png";
import glytec from "../../assets/images/glytec_logo.png";
import twoU from "../../assets/images/2U_logo.png";
import usc from "../../assets/images/usc_logo.png";
import harvard from "../../assets/images/harvard_logo.png";
import scheck from "../../assets/images/scheck_logo.png";

const FullCV = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1 className="text-center">Full Resume / Curriculum Vitae (CV)</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="justify-content-center">
            <div className="accordion" id="accordionExample">
              <Collapse
                image={<img src={twoU} alt="2U" class="imgStyle"/>}
                idNum={"One"}
              >
                <strong>Senior Tutor</strong>
                <li>
                  Ensure student success by providing troubleshooting support
                  for tools such as VS Code, GitHub, JavaScript, Node.js, MySQL,
                  MongoDB and React.js as well as coaching concepts such as
                  algorithms, MVC architecture, object-oriented programming,
                  code design and version control while maintaining above a
                  4.8/5.0 student feedback rating for all metrics.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={harvard}
                    alt="Harvard University"
                    class="imgStyle"
                  />
                }
                idNum={"Two"}
              >
                <strong>Full-Stack Web Developer</strong>
                <li>
                  Completed a six-month full-stack coding bootcamp implementing
                  web development tools and practices such as VS Code, GitHub,
                  Postman, React, MySQL and MongoDB as well as version control
                  and code reviews for both independent and team-based projects.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img src={glytec} alt="Glytec" class="imgStyle" />
                }
                idNum={"Three"}
              >
                <strong>Solution Architect</strong>
                <li>
                  Project managed the technical delivery of five (5) hospital
                  implementations for interface types such as ADFS SSO, SMART on
                  FHIR, ADT, and ORU through collaboration with clinical,
                  engineering, networking and business teams.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={athena}
                    alt="athenahealth"
                    class="imgStyle"
                  />
                }
                idNum={"Four"}
              >
                <strong>Network Connectivity Consultant</strong>
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
                <strong>Integration Project Engineer</strong>
                <li>
                  Built over 150 integrations involving solutions scoping,
                  message format analysis, interface engine build, product
                  enhancements, connectivity troubleshooting, unit testing,
                  Production deployment and Go-Live coordination.
                </li>
                <li>
                  Managed the business operations of a team of 18 Offshore
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
              </Collapse>
              <Collapse
                image={
                  <img
                    src={usds}
                    alt="US Department of State"
                    class="imgStyle"
                  />
                }
                imageTwo={
                  <img
                    src={usds2}
                    alt="US Department of State"
                    style={{ height: "25px" }}
                  />
                }
                idNum={"Five"}
              >
                <strong>Fulbright Teaching Assistant</strong>
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
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={scheck}
                    alt="Scheck Hillel Community School"
                    class="imgStyle"
                  />
                }
                idNum={"Six"}
              >
                <strong>Standardized Test Instructor</strong>
                <li>
                  Supported the ACT and SAT exam preparation for over 167
                  students by conducting lectures with class sizes of up to 17
                  students as well as providing college application readiness
                  and tutoring services.
                </li>
              </Collapse>
              <Collapse
                image={
                  <img
                    src={usc}
                    alt="University of Southern California"
                    class="imgStyle"
                  />
                }
                idNum={"Seven"}
              >
                <strong>Pullias Research Assistant</strong>
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
