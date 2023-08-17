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
    <div>
        <header>
            <span>welcome to <i>Zoren</i></span>
        </header>
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