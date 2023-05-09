import styled from "styled-components";
import Project from "../components/Project";
import LTNImage from "../assets/images/ltn.png";
import LocalNetsImage from "../assets/images/localnets.png";
import GaleShapleyImage from "../assets/images/gale-shapley.png";
import WhoCitesImage from "../assets/images/whocites.png";

const ProjectsTitleStyles = styled.h2``;

const ProjectsIntroStyles = styled.p`
  width: 100%;
`;

const Projects = () => {
  return (
    <>
      <div className="narrow-wrapper">
        <ProjectsTitleStyles>Selected Projects</ProjectsTitleStyles>
        <ProjectsIntroStyles>
          Please as for a copy of my porfolio for my most recent work.
        </ProjectsIntroStyles>
      </div>
      <div className="narrow-wrapper">
        <Project projectName={"LTN network analysis"} projectImage={LTNImage}>
          <p>Copy coming up</p>
        </Project>

        <Project projectName={"LocalNets / PhD"} projectImage={LocalNetsImage}>
          <p>
            Localnets is a Twitter analytics tool designed for use by local
            government institutions. I developed Localnets in the course of my
            PhD, using Mongo, Node & the Neo4j graph database.
          </p>

          <p>
            It has been piloted with NHS Birmingham Clinical Commissioning
            Group, the RSA, the Department for Communities and Local Government,
            DemSoc, the Greenwich Driverless autonomous vehicle trial and in
            numerous other projects."
          </p>
        </Project>

        <Project
          projectName={"Gale-Shapley Algorithm"}
          projectImage={GaleShapleyImage}
        >
          <p>
            The RCA architecture department wanted a method to match students
            with tutors based on both groups voting on each other. I implemented
            the Gale-Shapley algorithm, which achieves an optimal matching (for
            a particular definition of optimal...). Image from XKCD.
          </p>
        </Project>

        <Project projectName={"Who Cites"} projectImage={WhoCitesImage}>
          <p>
            Who Cites is a web app that visualises citation networks for
            academic publications using Google Scholar.
          </p>

          <p>
            Developed to answer a personal need, nearly 300 other academics have
            registered to use the tool.
          </p>
        </Project>
      </div>
    </>
  );
};

export default Projects;
