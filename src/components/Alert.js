import Alert from 'react-bootstrap/Alert';
import {Modal} from 'react-bootstrap';

function InfoAlert(props) {
  return (
    <>
      
        <Modal show={props.show} >
        <Alert  key={props.item} variant={props.variant} onClose={props.closeAlert} dismissible >
          Product successfully added
        </Alert>
        </Modal>
   
    </>
  );
}

export default InfoAlert;

