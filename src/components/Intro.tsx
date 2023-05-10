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
          I bring a user-centered approach to User Experience Research and
          Service Design. I have PhD in design research. My skills include:
        </p>
        <ul>
          <li>
            <span>
              Planning and executing user research programs, including user
              interviews, focus groups, design sprints.
            </span>
          </li>
          <li>
            <span>Data analysis: Python, SQL/BigQuery.</span>
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
