import React from 'react';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';
import { ProjectConsumer } from '../../../context/provider';
import { ProjectRow } from './ProjectsListStyled';

const ProjectsList = () => {
  return (
    <ProjectConsumer>
      {(value) => {
        const { projects, type, industry, technology } = value;

        let filteredProjects = projects.filter(
          (project) =>
            project.type === type.value ||
            project.industry === industry.value ||
            project.technology === technology.value
        );

        return filteredProjects.length > 0 ? (
          <ProjectRow>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
              />
            ))}
          </ProjectRow>
        ) : (
          <ProjectRow>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
              />
            ))}
          </ProjectRow>
        );
      }}
    </ProjectConsumer>
  );
};

export default ProjectsList;
