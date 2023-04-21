import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

function Register() {
  return (
    <>
      <Container>
      <div className='text'>
      <h3>Add Sale Entry</h3></div>
      <div className='fm'>
    <Form  autoComplete='off'>
    <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="" autoComplete="off" />
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="" autoComplete='off' />
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="" autoComplete="off" />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder=""  autoComplete="off"  />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </Container>
    </>
  );
}

export default Register;