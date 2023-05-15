import styled from "styled-components";
import HeadShot from "../assets/images/headshot.jpg";
import Github from "../assets/images/github-mark.svg";
import LinkedIn from "../assets/images/linkedin-mark.svg";

const HeadShotContainerStyles = styled.div`
  box-sizing: border-box;
  width: calc(var(--narrow-width) * 0.4);
  flex-basis: calc(var(--narrow-width) * 0.4);
  border-radius: 50%;
  border: 20px solid hsl(48, 100%, 95%);
  align-self: start;
`;

const IntroStyles = styled.div`
  box-sizing: border-box;
  width: calc(var(--narrow-width) * 0.6);
  flex-basis: calc(var(--narrow-width) * 0.6);
  padding-top: 2em;
  padding-right: 2em;
`;

const HeadShotImageStyles = styled.img`
  border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 1);
  width: 100%;
  box-sizing: border-box;
  height: auto;
`;

const DetailsContinerStyles = styled.div`
  text-align: center;
`;

const LogoImageStyles = styled.img`
  height: 2.5em;
  padding: 2em 0.5em 0em 0.5em;
`;

const Intro = () => {
  return (
    <>
      <IntroStyles>
        <p>
          I bring technical knowledge and academic rigour to user experience
          research and service design.
        </p>
        <p>
          I love bridging across cultures and specialisms, my divergent
          background has helped me to make unique contributions in settings
          ranging from startups to my PhD research to working at Google.
        </p>

        <ul>
          <li>
            <span>
              <strong>Research skills </strong> - Planning and executing
              research projects, in-depth user interviews, focus groups, concept
              testing, service mapping, running design sprints.
            </span>
          </li>
          <li>
            <span>
              <strong>Written communication </strong> - literature reviews and
              writing for academic, business and user-facing settings.
            </span>
          </li>

          <li>
            <span>
              <strong>Technical project management </strong> - reviewing
              technical designs, managing Google Cloud Platform projects,
              managing agencies delivering technical projects.
            </span>
          </li>
          <li>
            <span>
              <strong>Prototyping </strong> - Python, Front-end development and
              Figma.
            </span>
          </li>
          <li>
            <span>
              <strong>Data analysis </strong> - Python, SQL.
            </span>
          </li>
        </ul>
      </IntroStyles>
      <DetailsContinerStyles>
        <HeadShotContainerStyles>
          <HeadShotImageStyles src={HeadShot} />
        </HeadShotContainerStyles>
        <a href="https://github.com/jimmytidey/">
          <LogoImageStyles src={Github} />
        </a>
        <a href="https://uk.linkedin.com/in/jimmytidey">
          <LogoImageStyles src={LinkedIn} />
        </a>
      </DetailsContinerStyles>
    </>
  );
};

export default Intro;
