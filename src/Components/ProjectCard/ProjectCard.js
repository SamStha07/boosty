import React from 'react';
import { Card } from './ProjectCardStyled';

const ProjectCard = ({ name, description, image }) => {
  return (
    <Card>
      <img src={image} alt={image} />
      <h4>{name}-</h4>
      <p>{description}</p>
    </Card>
  );
};

export default ProjectCard;
