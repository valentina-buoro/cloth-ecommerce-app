import React from "react";
//import { BsCartPlus } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import Example from "./ProductDetailsModal";
const Card = (props) => {
  const [modal, setModal] = React.useState(false)
  const handleShowMessage = ()=>{
    setModal(!modal)
  }
  
  const closeModal = ()=>{
    setModal(!modal)
  }

  return (
    <div class="flex flex-col justify-between bg-white p-3 rounded-md shadow-md">
      <div className="w-11/12 h-3/4 self-center">
        <img className="h-full" src={props.item.image} alt="pic" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
      <div className="">
      <p className="font-semibold text-lg pb-2">N {props.item.price}</p>
      </div>
        <div><button className="px-3 py-2 bg-lime-600 text-white rounded-[0.625rem]">Add to cart</button></div>
      </div>
      <div className="text-normal text-sm text-gray-500 pt-4 " onClick={handleShowMessage}>
        <NavLink className='text-gray-500'>Product Details</NavLink>
      </div>
      {modal? (<Example 
      image={props.item.image}
      price={props.item.price}
      title={props.item.title}
      description={props.item.description}
      show={modal}
            closeModal={closeModal}
            />): null}
    </div>
  );
};

export default Card;
