import { Container, Row, Col, CardDeck } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import DashboardImg from '../assets/dashboard.png';
import MenuImg from '../assets/menu.png';
import FundopolisImg from '../assets/fundopolis.png';
import NoterImg from '../assets/noter.png';
import HairsprayImg from '../assets/hairspray.png';
import ShatteredImg from '../assets/shattered.png';

const ProjectsPage = () => {
  const projectsData = [
    {
      img: FundopolisImg,
      title: 'Fundopolis',
      subtitle: 'GatsbyJS, GhostCMS',
      description: 'Custom blog site deployed to AWS Amplify and Lightsail.',
      href: 'https://about.fundopolis.com/',
    },
    {
      img: DashboardImg,
      title: 'Social Media Dashboard',
      subtitle: 'MVP for a React Admin Dashboard',
      description:
        'Alpha version built using React to model the Admin side of a social media app. Primarily used to moderate flagged user content. (Blurred for client privacy)',
      href: false,
    },
    {
      img: MenuImg,
      title: 'Restaurant App',
      subtitle: 'MVP for an Ionic App',
      description:
        'Alpha version built using Ionic. I was able to integrate an AR package called Wikitude to get the app to recognize specific target images and render a 3D model. (Styles changed for client privacy)',
      href: false,
    },
    {
      img: NoterImg,
      title: 'Noter',
      subtitle: 'MERN Stack',
      description:
        'Note taking application built with MERN as a personal project. Users are able to add, edit, and delete notes. Currently reworking API.',
      href: 'https://noter.johnpcorreia.com/',
    },
    {
      img: HairsprayImg,
      title: 'Hairspray',
      subtitle: 'MERN Stack',
      description:
        'A fullstack application built with React, Node, Express, and MongoDB, deployed to Heroku. (Was originally hosted by school, working on rehosting on personal domain)',
      href: false,
    },
    {
      img: ShatteredImg,
      title: 'Shattered Iron',
      subtitle: 'Unity WebGL Game',
      description:
        'Hackathon project of an attempt to build a Twisted Metal type game in less than 48 hours. (May take a while to load, hardware intensive)',
      href: 'https://shattered-iron.herokuapp.com/',
    },
  ];

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <div className='mb-5 h3 text-muted text-center'> My Projects</div>
        </Col>
      </Row>
      <Container>
        <CardDeck className='m-auto'>
          {projectsData.map((project, i) => (
              <ProjectCard project={project} />
          ))}
        </CardDeck>
      </Container>
    </Container>
  );
};

export default ProjectsPage;
