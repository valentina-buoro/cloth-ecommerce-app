import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Example from "./ProductDetailsModal";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [modal, setModal] = useState(false);
  const handleShowMessage = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  },[data]);
 //

  // const filteredData = data.filter(
  //   (item) =>
  //     item.category.toLowerCase().includes(filterParam)
    
  // );
  
  const [filteredData, setFilteredData] = useState(data);
  const handleFilter = (category) => {
    
      const filtered = data.filter((item) => item.category === category);
     setFilteredData(filtered);
  
    const newColor = buttonColor === '' ? 'black' : '';
    setButtonColor(newColor);
    const newTextColor = buttonColor === '' ? 'white' : '';
    setButtonText(newTextColor);
  };
  const [buttonColor, setButtonColor] = useState('');
  const [buttonText, setButtonText]=useState('')
 

  return (
    <div>
      <div className="flex gap-5 px-5 mt-4">
        <button  style={{ backgroundColor: buttonColor, color:buttonText }} onClick={() => handleFilter("all")} value='all' className={`px-4 py-2 rounded-3xl border border-black active:bg-black`}>All</button>
        <button onClick={() => handleFilter("women's clothing")}  value="women's clothing" className="px-4 py-2 rounded-3xl border border-black">Women's clothing</button>
        <button onClick={() => handleFilter("men's clothing")} value="men's clothing" className="px-4 py-2 rounded-3xl border border-black">Men's clothing</button>
        <button onClick={() => handleFilter("jewelery")} value='jewelry' className="px-4 py-2 rounded-3xl border border-black">Jewelry</button>
        <button onClick={() => handleFilter("electronics")} value='electronics 'className="px-4 py-2 rounded-3xl border border-black">Electronics</button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-12 p-6 md:p-12">
        { filteredData.map((e) => {
          return (
            <Card item={e} key={e.id} onClick={handleShowMessage}>
              <Example item={e} key={e.id} onclick={closeModal} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
