import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <div>
        <h1> Your Cart is Empty.</h1>
        <Link to="/">
          <button>Add Items !</button>
        </Link>
      </div>
    );
  return (
    <div className="bg-gradient-to-r from-[#810551] via-black to-[#810551]">
      <div className="bg-gradient-to-r from-[#810551] via-black to-[#810551]">
        <h5>
          {" "}
          Cart ({totalUniqueItems}) total items: ({totalItems})
        </h5>
        <div className=" ">
          <div className="p:4 md:p-16">
            {items.map((item) => {
              return (
                <div key={item.id} className=" bg-white border flex m-4 justify-between p-4 md:p-5">
                  <div>
                    <div className=" h-[120px] md:h-[170px] flex flex-col md:flex-row gap-2 items-start ">
                      <img
                        className="w-auto h-[75%] md:h-[95%] object-contain "
                        src={item.image}
                        alt="pic"
                      />
                      <h6 className="mb-4">{item.title} </h6>
                    </div>
                    
                  </div>
                  <div>
                    <h5>{item.price * item.quantity}</h5>
                    <h5>Quantity({item.quantity})</h5>
                    <div className="">
                      <button
                        className="py-0.75 px-3 bg-transparent hover:bg-black hover:text-white border border-black rounded m-3 "
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="py-0.75 px-3 bg-transparent hover:bg-black hover:text-white border border-black rounded "
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="py-0.75 px-3 bg-red-500 hover:bg-red-500 hover:text-white rounded text-stone-800 mx-6 "
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h2>Total : $ {cartTotal}</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="px-3 py-2 bg-[#07775D] text-white rounded-[0.625rem] text-[0.75rem] md:text-[1rem] w-1/4">
          Buy Now
        </button>
        <button
          className="py-0.75 px-3 bg-red-600 hover:bg-red-500 hover:text-white rounded text-stone-800 mx-6 "
          onClick={() => emptyCart()}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
