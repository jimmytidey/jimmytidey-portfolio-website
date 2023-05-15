import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  projectName: string;
  projectImage: string;
  children: ReactNode;
}

const ProjectNameStyles = styled.h3`
  padding-top: 0;
  margin-top: 0;
`;

const ProjectDescriptionStyles = styled.div`
  box-sizing: border-box;
  width: 50%;
  min-width: calc(var(--narrow-width) / 2);
  flex-grow: 200;
  padding-right: 1em;
`;

const ProjectImageContainerStyles = styled.div`
  box-sizing: border-box;
  width: 50%;
  min-width: calc(var(--narrow-width) / 2);
  flex-grow: 200;
`;

const ProjectImageStyles = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectSeparatorStyles = styled.div`
  border-top: 1px dashed black;
  width: 100%;
  height: 1em;
  margin-top: 1em;
`;

function Project({ projectName, projectImage, children }: Props) {
  return (
    <>
      <ProjectSeparatorStyles></ProjectSeparatorStyles>
      <ProjectDescriptionStyles>
        <ProjectNameStyles>{projectName}</ProjectNameStyles>
        {children}
      </ProjectDescriptionStyles>
      <ProjectImageContainerStyles>
        <ProjectImageStyles src={projectImage} />
      </ProjectImageContainerStyles>
    </>
  );
}

export default Project;
