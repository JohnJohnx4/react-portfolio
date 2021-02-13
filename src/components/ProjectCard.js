import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
} from 'reactstrap';

const ProjectCard = ({ project }) => {
  const { img, title, subtitle, description, href } = project;
  return (
      <Card className='mb-4' style={{ minWidth: '315px' }}>
        <CardImg top width='100%' src={img} alt='Card image cap' />
        <CardBody>
          <CardTitle tag='h5'>{title}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            {subtitle}
          </CardSubtitle>
          <CardText>{description}</CardText>
          {href ? (
            <CardLink href={href} target='_blank'>
              Visit Site &#8811;
            </CardLink>
          ) : (
            <CardText>{' '}</CardText>
          )}
        </CardBody>
      </Card>
  );
};

export default ProjectCard;
