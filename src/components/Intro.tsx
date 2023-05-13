import styled from "styled-components";
import HeadShot from "../assets/images/headshot.jpg";

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
  padding-right: 1em;
`;

const HeadShotImageStyles = styled.img`
  border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 1);
  width: 100%;
  box-sizing: border-box;
  height: auto;
`;

const Intro = () => {
  return (
    <>
      <IntroStyles>
        <p>
          I bring academic rigor and technical knowledge to user experience
          research and service design. Industry experience and a design research
          PhD inform my approach to UXR and service design.
        </p>
        <ul>
          <li>
            <span>
              Planning and executing research projects, In-depth user
              interviews, focus groups, concept testing, design sprints.
            </span>
          </li>
          <li>
            <span>Data analysis: Python, SQL.</span>
          </li>
          <li>
            <span>Prototyping, including Front-end development and Figma.</span>
          </li>
          <li>
            <span>
              Written communication and literature reviews, including writing
              for academic, business and user-facing settings.
            </span>
          </li>
          <li>
            <span>
              Interdisplinary / cross-functional projects between engeineering,
              academia and marketing.
            </span>
          </li>
        </ul>
      </IntroStyles>
      <HeadShotContainerStyles>
        <HeadShotImageStyles src={HeadShot} />
      </HeadShotContainerStyles>
    </>
  );
};

export default Intro;
