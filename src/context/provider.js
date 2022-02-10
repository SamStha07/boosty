import React, { Component } from 'react';
import {
  industryData,
  technologyData,
  typesData,
} from '../Pages/ProjectsPage/ProjectFilter/Data';
import ProjectContext from './context';

import { projectsList } from './projectsList';

class ProjectProvider extends Component {
  state = {
    type: {
      value: typesData[0]?.value || '',
      label: typesData[0]?.label || '',
    },
    industry: { value: industryData[0]?.value, label: industryData[0]?.label },
    technology: {
      value: technologyData[0]?.value,
      label: technologyData[0]?.label,
    },
    projects: [],
    filteredProjects: [],
  };

  componentDidMount() {
    this.setProjects(projectsList);
  }

  handleType = (event) => {
    this.setState({
      type: { value: event.value, label: event.label },
    });
  };
  handleIndustry = (event) => {
    this.setState({
      industry: { value: event.value, label: event.label },
    });
  };
  handleTechnology = (event) => {
    this.setState({
      technology: { value: event.value, label: event.label },
    });
  };

  setProjects = (projects) => {
    let projectsList = projects.map((item) => {
      const product = { ...item };
      return product;
    });

    let filteredProjects = projects.filter(
      (project) => project.type === this.state.type.value
    );

    this.setState({
      projects: projectsList,
      filteredProjects: filteredProjects,
    });
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{
          type: this.state.type,
          industry: this.state.industry,
          technology: this.state.technology,
          projects: this.state.projects,
          updateType: this.handleType,
          updateIndustry: this.handleIndustry,
          updateTechnology: this.handleTechnology,
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer };
