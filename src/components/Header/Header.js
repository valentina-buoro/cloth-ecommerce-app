import React from "react";
//import Navbar from "./Navbar";
import CarouselFadeExample from "./Banner";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const text = [
  "Fashion is an art form",
  "Invest in timeless pieces",
  "Fashion rules are meant to be broken",
  "Black is always in style",
  "Wear your confidence.",
  "Fashion is art you wear.",
  "Dress for success.",
];
const colors = [
  "(to right, #603813, #b29f94)",
  "(to right, #8E24AA, #1E88E5)",
  "(to right, purple, red)",
  "(to right, #aa076b, #61045f)",
  "(to right, #603813, #b29f94)",
  "(to right, #2C3E50,#FD746C)",
  "(to right, #e65c00 ,#F9D423)",
  "(to right, #603813, #b29f94)",
];

const Header = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 6 ? 0 : v + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          background: `linear-gradient${colors[value]}`,
          marginLeft: "24px",
          marginRight: "24px",
          borderRadius: "12px",
          marginTop: "24px",
        }}
      >
        <div className="flex flex-row-reverse items-end m-1 md:m-4 text-end">
          <Link to="/checkout">
            <BsCart2  className="text-black w-5 md:w-7 h-7 m-1 md:m-2" />
          </Link>
        </div>
        <CarouselFadeExample text={text[value]} />
      </div>
    </>
  );
};

export default Header;
