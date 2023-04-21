import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import "../components/css/style.css"

function AddSales() {
  return (
    <>
      <Container>
      <div className='text'>
      <h3>Add Sale Entry</h3></div>
      <div className='fm'>
    <Form>
  
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Product Name</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Quantity</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Amount</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

     

      <Button className='btn' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </Container>
</>  );
}

export default AddSales;