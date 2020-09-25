import React, { Component } from 'react';
import {ProjectContext} from '../../Context';
import ProjectThumbnail from './projectThumbnail';
import styled from "styled-components/macro";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class faeturesProjects extends Component {
  static contextType = ProjectContext;

  render() {
    let {featuredProjects: projects} = this.context;
    projects = projects.map(project => {
      return <ProjectThumbnail key={project.id} project={project} />
    });
    return (
      <ProjectWrapper>
        {projects}
      </ProjectWrapper>
    )
  }
}
