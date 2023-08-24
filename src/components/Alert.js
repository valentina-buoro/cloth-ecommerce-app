import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

function InfoAlert(props) {
  return (
    <>
      
        <Modal show={props.show} onHide={props.closeAlert}>
        <Alert  key={props.item} variant={props.variant} >
          Product successfully added

          <Button onClick={props.closeAlert}  variant="outline-success">
            Close me
          </Button>
        </Alert>
        </Modal>
   
    </>
  );
}

export default InfoAlert;

