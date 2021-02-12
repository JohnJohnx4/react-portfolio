import { Container, Row, Col, Card, Media } from 'reactstrap';
import ProfileImg1 from '../assets/profile1.jpg';
import ProfileImg2 from '../assets/profile2.jpg';

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className='p-5 mt-5'>
            <Media>
              <Media left>
                <Media
                  className='mx-3'
                  object
                  src={ProfileImg1}
                  alt='Generic placeholder image'
                  style={{ height: '300px', width: 'auto' }}
                />
              </Media>
              <Media body className='ml-5 mt-2'>
                <Media heading className='mx-5'>
                  About Me
                </Media>
                <Media className='mt-5 ml-5'>
                  My name is John P. Correia, and I have been a professional Web
                  Developer for more than two years now. I enjoy creating user
                  interfaces in React, developing APIs in Node and Express, and
                  utilizing MongoDB, GraphQL, and MySQL databases. I have a
                  large amount of experience turning design docs into functional
                  apps.
                  <br />
                  <br />I have worked mainly for startups and am very
                  comfortable in that fast-paced environment. Tools I have used
                  include Github, Bitbucket, Jira, Trello, and I am comfortable
                  in both Windows and macOS environments. I am comfortable in
                  React and Javascript but can pick up new frameworks and
                  languages quickly.
                </Media>
              </Media>
            </Media>
            <Media className='mt-5'>
              <Media body className='mx-3 mt-2'>
                <Media heading>Media heading</Media>
                <Media className='mt-5 mr-5'>
                  In my spare time, I enjoy playing games online with friends,
                  streaming on Twitch occasionally. I also enjoy watching anime
                  and tv shows. I try to stay active by working out in my garage
                  gym, lifting weights. When I have time, I like to fiddle with
                  Unity and aspire to create my own game one day.
                  <br />
                  <br />
                  I also play trumpet in a community orchestra and jazz band
                  every Sunday evening. I love playing music and make time to
                  practice outside of rehearsal as often as I can.
                  <br />
                  <br />
                  Thank you for taking the time to read about me!
                </Media>
              </Media>
              <Media right>
                <Media
                  className='mx-3'
                  object
                  src={ProfileImg2}
                  alt='Generic placeholder image'
                  style={{ height: '300px', width: 'auto' }}
                />
              </Media>
            </Media>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
