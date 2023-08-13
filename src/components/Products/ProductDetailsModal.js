//import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {


  return (
    <>
      

      <Modal className='bg-red-500' show={props.show} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='flex'>
            <div className='w-[40%]'>
            <img src={props.image} alt='product'/>
            </div>
            <div>
              <div>
                {props.price}
              </div>
              <div>
                <button>Add to cart</button>
              </div>
            </div>
            </div>
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