import React from 'react'

const Login = () => {
  return (
    <div>
        <header>
            <span>welcome to <i>Zoren</i></span>
        </header>
        <form>
            <input type='text' id='email' required/>
            <label htmlFor='email'>Email</label>

            <input type='text' id='password' required/>
            <label htmlFor='password'>Password</label>
        </form>
    </div>
  )
}

export default Login