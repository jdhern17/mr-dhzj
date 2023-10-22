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
            {`Thank you for the interest in my profile. I come from a background in project management, systems integration, cybersecurity and web development and will always sustain a strong appreciation for continuous learning. These diverse experiences, both professionally as well as personally, prepare me uniquely for challenges ranging from troubleshooting an escalated code issue with a dev team in India at 2AM to building a presentation in Spanish with a group of industry professionals taking a cybersecurity bootcamp. I am a digital nomad and a technical consultant at heart. I care about every client I work with and look at prioritizing their issues to meet Go-Live as part of my morning routine. Positivity is my natural self, and I look for it in every setting, no matter the obstacle. I do not let my team down, internal or external, and communicate carefully to ensure expectations are set as accurately as possible throughout an engagement.`}
          </p>
          <p>
           {` My clients, whether aspiring developers or director-level leaders at large enterprise systems, would all agree that we deserve champagne for fixing that bug! If you are interested in any of my experiences, please reach out, I would love to talk and learn more!
`}
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
