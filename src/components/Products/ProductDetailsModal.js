import { useState } from "react";
//import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { useCart } from 'react-use-cart'

function Example(props) {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const subtract = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const {addItem } = useCart()

  return (
    <>
      <Modal show={props.show} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex justify-between">
            <div className="w-[40%]">
              <img src={props.image} alt="product" />
            </div>
            <div className="w-[40%] flex flex-col justify-between">
              <div className="text-2xl mt-5">${count === 0? props.price : props.price * count}</div>
              <div className="flex flex-col justify-between gap-4">
                <div className="flex justify-between ">
                  <span className="text-xl">
                    <button
                      className="px-3 py-2 bg-red-500 text-white rounded-[0.625rem] text-[0.75rem] md:text-[1rem]"
                      onClick={subtract}
                    >
                      {" "}
                      -{" "}
                    </button>
                  </span>
                  <span className="text-3xl">{count}</span>

                  <span className="text-xl">
                    <button
                      className="px-3 py-2 bg-[#07775D] text-white rounded-[0.625rem] text-[0.75rem] md:text-[1rem]"
                      onClick={add}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </span>
                </div>
                <button onClick={()=>addItem(props.item)}  className="px-3 py-2 bg-[#07775D] text-white rounded-[0.625rem] text-[0.75rem] md:text-[1rem]">
                  {" "}
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
          <div className="text-left">
          <h6 >Product details</h6>
          </div>
         <div className="text-left">
         <p className="text-[0.825rem]"> {props.description}</p>
         </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
