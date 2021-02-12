import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardLink,
} from 'reactstrap';
import Carousel from '../components/Carousel';
import HairsprayImg from '../assets/hairspray.png';
import FundopolisImg from '../assets/fundopolis.png';
import ShatteredImg from '../assets/shattered.png';
import NoterImg from '../assets/noter.png';

const items = [
  {
    src: FundopolisImg,
    altText: 'Fundopolis website screepcap',
    caption: '',
    description: 'About page built with GatsbyJS and Ghost CMS. Deployed with AWS using Lightsail and ',
    href: 'https://about.fundopolis.com/'
  },
  {
    src: NoterImg,
    altText: '',
    caption: '',
    description: 'Note taking application built with React. Styled with Material-UI and deployed to Heroku',
    href: 'https://johnc-noter.herokuapp.com/'
  },
  // {
  //   src: HairsprayImg,
  //   altText: '',
  //   caption: '',
  //   description: 'Full Stack Application used to book appointments. React, Node, Mongo, deployed to Heroku and Netlify',
  //   href: '#'
  // },
  {
    src: ShatteredImg,
    altText: '',
    caption: '',
    description: 'Video Game built with Unity for a hackathon. Deployed to Heroku. (Resource intensive, takes time to load)',
    href: 'https://shattered-iron.herokuapp.com/'
  },
];

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <Container>
      <Row>
        <Col>
          <Card className='px-5 mt-5'>
            <CardBody className='text-center'>
              <CardTitle tag='h5'>
                I'm John, a professional software developer. I specialize in
                building apps in React, Node, GraphQL, and much more. Please
                check out my projects!
              </CardTitle>
              <Carousel items={items} setCurrentSlide={setCurrentSlide}/>
            </CardBody>
            <CardBody>
              <CardText>{items[currentSlide].description}</CardText>
              <CardLink href={items[currentSlide].href}>Visit Site</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
