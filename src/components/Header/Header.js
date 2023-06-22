import React from 'react'
import Navbar from './Navbar'
import CarouselFadeExample from './Banner'

const text = ["Fashion is an art form" , "Invest in timeless pieces","Fashion rules are meant to be broken","Black is always in style" ];
const colors = ['(to right, #8E24AA, #1E88E5)', '(to right, purple, red)','(to right,#aa076b,#61045f)']
const Header = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 4 ? 0 : v + 1;
      });
    }, 2700);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <Navbar/>
   
    <div style={{background:`linear-gradient${colors[value]}`, marginLeft:'24px', marginRight:'24px'}}>
   
    <CarouselFadeExample text={text[value]}/>
    </div>
    </>
  )
}

export default Header