import React, { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [NewUser, setNewUser] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault(); //prevents the browswer from refreshing
    setError(false);

    if (NewUser) { 
      createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        localStorage.setItem('username', username)
      }).catch((error)=>{
        setError(true)
        const errorMessage = error.message;
        setErrorMsg(errorMessage)

      });
    } else {
      signInWithEmailAndPassword(auth, email, password).then(
     navigate('/')
      )
      .catch((error)=>{
        setError(true)
        const errorMessage = error.message;
        setErrorMsg(errorMessage)
      })
    }
  };

  const container =
    'relative flex flex-col justify-center items-center m-auto  bg-red-300 w-[400px] aspect-[1] rounded-[10px] py-[60px] px-[80px] before:absolute before:content-[""] before:h-[calc(100%-3px)] before:w-[calc(100%-3px)] before:bg-black before:rounded-[9px] ';
  const inputStyle =
    "w-full  bg-transparent pt-[20px] pb-[10px] px-[3px] border-b-2 border-b-[#810551] text-white focus:outline-none peer";
  const labelStyle =
    "absolute  text-[13px] top-[18px] left-[3px] text-white transition ease duration-200 peer-focus:top-0  peer-focus:text-red-500 peer-valid:top-0  ";
  return (
    <div className="bg-black h-screen pt-5">
    <div className={`${container}`}>
      <header className="absolute top-2.5 flex items-center">
        <span className="text-base text-white ">
          welcome to <i className="text-3xl ml-1"> Zoren</i>
        </span>
      </header>
      <h2>Create your account</h2>
      <form
        onSubmit={submit}
        className="relative flex flex-col gap-[15px] w-full mt-[30px]"
      >
        {NewUser &&(
          <div className="relative">
          <input
            className={`${inputStyle}`}
            onChange={(e)=>setUsername(e.target.value)}
            name="username"
            type="username "
            id="username"
            required
          />
          <label className={`${labelStyle}`} htmlFor="username">
            Username
          </label>
        </div>
        )}
        <div className="relative">
          <input
            className={`${inputStyle}`}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            type="text"
            id="email"
            required
          />
          <label className={`${labelStyle}`} htmlFor="email">
            Email
          </label>
        </div>

        <div className="relative">
          <input
            className={`${inputStyle}`}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            type="text"
            id="password"
            required
          />
          <label className={`${labelStyle}`} htmlFor="password">
            Password
          </label>
        </div>
        {error && (
          <div>
            <IoWarningOutline
              size={50}
              className="text-red-500 mt-2 mx-auto scale-0 animate-bounce duration-75"
            />
            <span className="text-red-500 text-[0.75rem] my-0 mx-auto text-center ">
              Process failed{" "}
            </span>
            <span className="text-red-500 text-[0.75rem] my-0 mx-auto text-center ">
              {errorMsg}
            </span>
          </div>
        )}
        <button
          type="submit"
          className="bg-[#810551] border-none rounded-[3px] mt-5 text-white p-[10px] cursor-pointer active:scale-95"
        >
          {NewUser ? "Sign up" : "Log in"}
        </button>

        {NewUser ? (
          <span className="text-white text-[0.825rem] my-0 mx-auto">
            Already have an account?{" "}
            <b
              onClick={() => {
                setNewUser(false);
                setError(false);
              }}
              className="text-[#aa0c6e] cursor-pointer"
            >
              Log In
            </b>
          </span>
        ) : (
          <span className="text-white text-[0.825rem] my-0 mx-auto">
            Don't have an account?{" "}
            <b
              onClick={() => {
                setNewUser(true);
                setError(false);
              }}
              className="text-[#aa0c6e] cursor-pointer"
            >
              Sign up
            </b>
          </span>
        )}
      </form>
    </div>
    </div>
  );
};

export default Login;
