import React from 'react'
import Navbar from './Navbar'
import CarouselFadeExample from './Banner'

const text = ["#92c952", "#771796"];
const colors = ['(to right, #8E24AA, #1E88E5)', '(to right, purple, red)']
const Header = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 4 ? 0 : v + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{background:`linear-gradient${colors[value]}`}}>
    <Navbar/>
    <CarouselFadeExample text={text[value]}/>
    </div>
  )
}

export default Header