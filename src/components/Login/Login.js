import React, { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'', 
        password:''
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
      };

  return (
    <div className='relative flex flex-col justify-center items-center m-auto bg-red-300 w-[400px] aspect-[1] rounded-[10px] py-[60px] px-[80px] before:absolute before:content-[""] before:h-[calc(100%-3px)] before:w-[calc(100%-3px)] before:bg-black before:rounded-[9px] '>
        <header>
            <span>welcome to <i>Zoren</i></span>
        </header>
        <h2>Create your account</h2>
        <form>
            <input onChange={handleChange} name='email' type='text' id='email' required/>
            <label htmlFor='email'>Email</label>

            <input onChange={handleChange} name='password' type='text' id='password' required/>
            <label htmlFor='password'>Password</label>
        </form>
    </div>
  )
}

export default Login