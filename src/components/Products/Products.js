import React from "react";
import Card from "./Card";
import Example from "./ProductDetailsModal";
//import { NavLink } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InfoAlert from "../Alert";

const Products = () => {
  const { data, isLoading, error } = useFetch("products");
  // const [filteredData, setFilteredData] = React.useState(data);
  const [search, setSearch] = React.useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-[#810551] via-black to-[#810551] w-[80%] flex flex-1 flex-col min-h-screen">
      {/* <div className="flex gap-5 px-5 mt-4">
        <button  style={{ backgroundColor: buttonColor, color:buttonText }} onClick={() => handleFilter("all")} value='all' className={`px-4 py-2 rounded-3xl border border-black active:bg-black`}>All</button>
        <button onClick={() => handleFilter("women's clothing")}  value="women's clothing" className="px-4 py-2 rounded-3xl border border-black">Women's clothing</button>
        <button onClick={() => handleFilter("men's clothing")} value="men's clothing" className="px-4 py-2 rounded-3xl border border-black">Men's clothing</button>
        <button onClick={() => handleFilter("jewelery")} value='jewelry' className="px-4 py-2 rounded-3xl border border-black">Jewelry</button>
        <button onClick={() => handleFilter("electronics")} value='electronics 'className="px-4 py-2 rounded-3xl border border-black">Electronics</button>
  </div>*/}

      <Header />
      <div className="px-6 md:px-12 py-4 md:py-8 flex items-center justify-center">
        <input
          type="search"
          className="border outline-none rounded-xl md:rounded-3xl p-3 w-full md:w-1/2"
          placeholder="Search for products"
          onChange={onSearchChange}
        />
      </div>
      <div class=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-12 p-6 md:p-12">
        {isLoading ? (
          <div> fetching your items !</div>
        ) : error ? (
          <div>something went wrong </div>
        ) : (
          filteredData.map((e) => {
            return (
              <>
                <Card item={e} key={e.id}>
                  <Example item={e} key={e.id} />
                  <InfoAlert item={e} key={e.id} variant={"success"} />
                </Card>
              </>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
