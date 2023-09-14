import React from "react";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <h1 className="text-center">About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-sm-12 col-md-12 text-center">
        <p>
            {`Coming from a background in project & process management, systems
            integration, cybersecurity and web development as well as a strong appreciation for
            continuous learning, I hope to leverage these diverse experiences towards positively impacting organizations and clients at all technical levels..`}
          </p>
          <p>
           {` If you are interested in any of my experiences, please reach out, I would love to talk and learn
            more!`}
          </p>
          <div className="text-left">
          {/* <ul>
            <li>BIPOC</li>
            <li>The Incarcerated/Released</li>
            <li>The Homeless</li>
            <li>Refugees</li>
            <li>Immigrants</li>
            <li>Sexual Minorities & Gender Non-Conforming Individuals</li>
            <li>The Trans Community and Transgender Individuals</li>
            <li>Addiction-afflicted Individuals</li>
            <li>Substance Abuse Victims</li>
            <li>Fostered Youth</li>
            <li>Endangered Ecosystems & Wildlife</li>
            <li>Endangered Animal Species</li>
            <li>The Mentally Incapacitated</li>
            <li>The Physically Incapacitated</li>
          </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
