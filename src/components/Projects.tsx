import styled from "styled-components";
import Project from "../components/Project";
import LTNImage from "../assets/images/ltn.webp";
import LocalNetsImage from "../assets/images/localnets.png";
import GaleShapleyImage from "../assets/images/gale-shapley.webp";
import WhoCitesImage from "../assets/images/whocites.png";
import StoryMap from "../assets/images/storymap.webp";
import MPD from "../assets/images/mpd.jpeg";
import BBC from "../assets/images/bbc.gif";
import WTM from "../assets/images/wtm.png";
import OpenCare from "../assets/images/opencare.png";

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
          For a detailed portfolio of my most recent work, please contact me at
          jimmytidey@gmail.com.
        </ProjectsIntroStyles>
      </div>
      <div className="narrow-wrapper">
        <Project
          projectName={
            "How have Low Traffic Neighbourhoods ignited a culture war on Twitter?"
          }
          projectImage={LTNImage}
        >
          <p>
            <a href="How have Low Traffic Neighbourhoods ignited a culture war on Twitter?">
              Link to write up
            </a>
          </p>
          <p>
            Many cities across the UK are implemetning Low Traffic
            Neighbourhoods - roads closed to through traffic. It's been a
            devisive issue, I used the LocalNets software I developed in PhD to
            analyse the discussion on Twitter.
          </p>

          <p>
            The project was picked up by{" "}
            <a href="https://www.forbes.com/sites/carltonreid/2020/12/12/handful-of-twitter-users-can-sway-council-decisions-finds-data-analysis-of-low-traffic-neighborhood-posts/?sh=7dcf5c7d70e5">
              Forbes
            </a>
            , and lead to research projects with two sustainable transport
            advocacy organisations: Sustrans in the UK and People for Bikes in
            the US.
          </p>
        </Project>

        <Project
          projectName={"LocalNets / Design Research PhD"}
          projectImage={LocalNetsImage}
        >
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

        <Project projectName={"StoryMap"} projectImage={StoryMap}>
          <p>
            <a href="https://jimmytidey.wordpress.com/2016/05/18/storymap-participatory-mapping/">
              Link to writeup
            </a>
          </p>
          <p>
            StoryMap was a digital/physical installation developed as part of
            the Shakespeare in Shoreditch festival. Participants used
            typewriters to record anecdotes from around Shoreditch and locate
            them on a semi-fictional map of east London. It featured local
            Twitter activity drawn from Localnets. This project was lead by
            fellow PhD candidate Benjamin Koslowski.
          </p>
        </Project>

        <Project projectName={"Million Pound Drop"} projectImage={MPD}>
          <p>
            I worked on integrating an online game with Channel 4's Million
            Pound Drop TV show. It was one of the most successful integrations
            of its type, on some occasions over 10% of TV viewers were also
            playing along online.
          </p>
        </Project>

        <Project projectName={"BBC Lab UK"} projectImage={BBC}>
          <p>
            While at the BBC I worked on Brain Test Britain, an online
            experiment to see if brain training works (it doesn't!) with over
            100,000 participants. The work resulted in a paper in the journal
            Nature and was one of the first psychology experiments carried out
            on the web.
          </p>

          <p>
            I also worked on the Great British Class Survey, which generated
            unique insights into emerging class structures in the UK.
          </p>
        </Project>

        <Project projectName={"Who Targets Me?"} projectImage={WTM}>
          <p>
            Who Targets Me is a browser extension that collects data about the
            political adverts people see on Facebook. It was developed in the
            run up to the 2017 general election to combat ‘dark adverts’. It had
            over 20,000 installs and has since been deployed in Austria and
            Germany. It was supported by The Bureau of Investigative Journalism
            and The Guardian.
          </p>
          <p>
            I helped the team with communications, writing blog posts and
            appearing on Radio 4 and BBC World Service to describe the project.
          </p>
        </Project>

        <Project projectName={"Open Care"} projectImage={OpenCare}>
          <p>
            The OpenCare report investigated non-traditional healthcare
            projects. LocalNets mapped Twitter activity around projects
            developing open source insulin pumps, 3D printed prosthetics &
            smartphone based healthcare in developing countries.
          </p>

          <p>
            It contributed to Edgeryders’ (a ‘distributed think tank’) report on
            open healthcare innovation, commissioned by the EU.
          </p>
        </Project>
      </div>
    </>
  );
};

export default Projects;
