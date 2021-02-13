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
import DashboardImg from '../assets/dashboard.png';
import MenuImg from '../assets/menu.png';
import FundopolisImg from '../assets/fundopolis.png';
import NoterImg from '../assets/noter.png';
import HairsprayImg from '../assets/hairspray.png';
import ShatteredImg from '../assets/shattered.png';

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      src: FundopolisImg,
      altText: 'Fundopolis website screepcap',
      caption: '',
      description:
        'About page built with GatsbyJS and Ghost CMS. Deployed with AWS using Lightsail and Amplify',
      href: 'https://about.fundopolis.com/',
    },
    {
      src: DashboardImg,
      altText: 'Social Media Dashboard',
      caption: '',
      description:
        'Alpha version for a React Admin Dashboard to moderate content on social media platform',
      href: false,
    },
    {
      src: MenuImg,
      altText: 'Restaurant App',
      caption: '',
      description:
        'Alpha version for an Ionic App that features AR scanning on uploaded target images',
      href: false,
    },
    {
      src: NoterImg,
      altText: 'Noter App Logo',
      caption: '',
      description:
        'Note taking application built with React. Styled with Material-UI and deployed to Heroku',
      href: 'https://johnc-noter.herokuapp.com/',
    },
    {
      src: HairsprayImg,
      altText: 'Hairspray App Logo',
      caption: '',
      description: 'Full Stack Application used to book appointments. React, Node, Mongo, deployed to Heroku and Netlify',
      href: false
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Card className='px-5 mt-5'>
            <CardBody className='text-center'>
              <CardTitle tag='h5' className='mb-4'>
                I'm John, a professional software developer. I specialize in
                building apps in React, Node, GraphQL, and much more. Please
                check out my projects!
              </CardTitle>
              <Carousel items={items} setCurrentSlide={setCurrentSlide} />
            </CardBody>
            <CardBody>
              <CardText>{items[currentSlide].description}</CardText>
              {items[currentSlide].href ? (
                <CardLink href={items[currentSlide].href} target='_blank'>
                  Visit Site &#8811;
                </CardLink>
              ) : (
                <CardText> </CardText>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
