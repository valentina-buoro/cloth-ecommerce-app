import React from "react";
//import { BsCartPlus } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import Example from "./ProductDetailsModal";
import { useCart } from 'react-use-cart';
import InfoAlert from "../Alert";

const Card = (props) => {
  const [modal, setModal] = React.useState(false)
  const [alert, setAlert] = React.useState(false)
  const handleShowMessage = ()=>{
    setModal(!modal)
  }
  
  const closeModal = ()=>{
    setModal(!modal)
  }

  const {addItem } = useCart()
  const AddItem= ()=>{
    addItem(props.item)
    setAlert(!alert)
  }

  const closeAlert = ()=>{
    setAlert(!alert)
  }



  return (
    <div class="flex flex-col justify-between bg-white p-3 rounded-md shadow-md ">
      <div className=" h-[150px] md:h-[300px] self-center">
        <img className="w-auto h-full object-contain " src={props.item.image} alt="pic" />
      </div>
     <div className="py-2 md:py-4">
     <div className="flex flex-col md:flex-row md:justify-between">
      <div className="">
      <p className="font-semibold align-middle text-lg pb-1 md:pb-2">N {props.item.price}</p>
      </div>
        <div><button onClick={AddItem} className="px-3 py-2 bg-[#43766C] text-white rounded-[0.625rem] text-[0.75rem] md:text-[1rem]">Add to cart</button></div>
      </div>
      <div className="text-normal text-sm text-gray-500 pt-2 md:pt-4 " onClick={handleShowMessage}>
        <NavLink className='text-gray-500'>Product Details</NavLink>
      </div>
     </div>
      {modal? (<Example 
      image={props.item.image}
      price={props.item.price}
      title={props.item.title}
      description={props.item.description}
      item={props.item}
      show={modal}
            closeModal={closeModal}
            />): null}

            {alert? (<InfoAlert closeAlert={closeAlert} show={alert} item={props.item} variant={'success'}/>):''}
    </div>
  );
};

export default Card;
