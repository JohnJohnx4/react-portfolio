import {
  Container,
  Row,
  Col,
  Card,
  Media,
  CardTitle,
  CardText,
} from 'reactstrap';
import ProfileImg1 from '../assets/profile1.jpg';
import ProfileImg2 from '../assets/profile2.jpg';

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className='p-3 my-5'>
            <CardText tag='h4' className='ml-2 mb-3'>About Me</CardText>
            <div>
              <div className='w-50' style={{maxWidth: '350px'}}>
                <img
                  src={ProfileImg1}
                  className='img-fluid img-thumbnail float-left mr-4 mb-2'
                />
              </div>
              <div>
                <p>
                  My name is John P. Correia, and I have been a professional Web
                  Developer for more than two years now. I enjoy creating user
                  interfaces in React, developing APIs in Node and Express, and
                  utilizing MongoDB, GraphQL, and MySQL databases. I have a
                  large amount of experience turning design docs into functional
                  apps.
                </p>
                <p>
                  I have worked mainly for startups and am very
                  comfortable in that fast-paced environment. Tools I have used
                  include Github, Bitbucket, Jira, Trello, and I am comfortable
                  in both Windows and macOS environments. I am comfortable in
                  React and Javascript but can pick up new frameworks and
                  languages quickly.
                </p>
                <p>
                  In my spare time, I enjoy playing games online with friends,
                  streaming on Twitch occasionally. I also enjoy watching anime
                  and tv shows. I try to stay active by working out in my garage
                  gym, lifting weights. When I have time, I like to fiddle with
                  Unity and aspire to create my own game one day.
                </p>
                <p>
                </p>
                <p>
                  I also play trumpet in a community orchestra and jazz band
                  every Sunday evening. I love playing music and make time to
                  practice outside of rehearsal as often as I can.
                </p>
                <p>Thank you for taking the time to read about me!</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
