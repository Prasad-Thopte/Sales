import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import "./css/style.css"

function Top() {
  return (
    <>
      <Container>
        <div className='text'>
          <h3>Top 5 Sales</h3></div>
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Sales id:</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Sale Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>S1212</td>
              <td>Laptop</td>
              <td>2</td>
              <td>90000</td>

            </tr>
            <tr>
              <td>2</td>
              <td>S1423</td>
              <td>Mobile</td>
              <td>5</td>
              <td>85000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>D2541</td>
              <td>Desktop</td>
              <td>2</td>
              <td>60000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>A1488</td>
              <td>AC</td>
              <td>2</td>
              <td>50000</td>
            </tr>
            <tr>
              <td>5</td>
              <td>C4562</td>
              <td>Cooler</td>
              <td>3</td>
              <td>35000</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Top;