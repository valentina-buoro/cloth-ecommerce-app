//import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {


  return (
    <>
      

      <Modal show={props.show} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.image} alt='product'/>
        </Modal.Body>
        <Modal.Footer>
            {props.description}
          {props.price}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;