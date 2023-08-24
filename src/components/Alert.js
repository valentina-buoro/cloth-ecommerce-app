import Alert from 'react-bootstrap/Alert';

function InfoAlert(props) {
  return (
    <>
      
        <Alert key={props.variant} variant={props.variant}>
          This is a alert—check it out!
        </Alert>
   
    </>
  );
}

export default InfoAlert;