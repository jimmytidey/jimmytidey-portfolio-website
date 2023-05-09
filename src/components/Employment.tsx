import styled from "styled-components";
import employmentDiagram from "./../assets/images/employment.svg";

const EmploymentDiagram = styled.img`
  max-width: 70em;
  margin: auto;
  display: block;
`;

const Employment = () => {
  return (
    <>
      <EmploymentDiagram src={employmentDiagram} />
    </>
  );
};

export default Employment;
