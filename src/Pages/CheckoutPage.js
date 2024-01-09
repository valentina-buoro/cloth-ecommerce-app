import React from "react";
import Cart from "../components/Cart/Cart";
import { Link } from "react-router-dom";

const CheckoutPage = (props) => {
  return (
    <div className="bg-gradient-to-r from-[#810551] via-black to-[#810551]">
      <h2>
        <Link to="/" className="text-2xl no-underline m-4 text-white">
          Go to HomePage
        </Link>
      </h2>
      {props.loggedIn ? (
        <Cart />
      ) : (
        <>
          <h2>
            Please <Link to="/login">log in</Link>
          </h2>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
