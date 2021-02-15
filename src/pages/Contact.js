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
import Billboard from '../components/Billboard';

const ContactPage = () => {
  return (
    <Container className='px-3'>
      <Row>
        <Billboard />
      </Row>
    </Container>
  );
};

export default ContactPage;
