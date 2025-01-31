import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {



  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })


  const [error, seterror] = useState('')

  const [user, setuser] = useState([])

  function handleChange(e) {
    const { name, value } = e.target
    setformData((prevvalue) => ({ ...prevvalue, [name]: value }))

  }

  const handleSumbit = (e) => {
    e.preventDefault()
    if (formData.password.length < 8) {
      seterror('Password must be 8 characters long')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      seterror('Password and Confirm Password must be same')
      return
    }

    if (!/[!@#$%^&*()<>."]/.test(formData.password)) {
      seterror('Password must contain special characters')
      return
    }

    if (!/[A-Z]/.test(formData.password)) {
      seterror('Password must contain uppercase letters')
      return
    }

    setuser((prevuser) => [...prevuser, {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    }])

    toast.success('Login Successfull!✅✅ ', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });

    seterror('')
    setformData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })


  }
  return (
    <>

<div>
      {user.map((item, index) => {
          return <div className='bg-emerald-300 w-full max-h-min p-4 gap-4 flex justify-center items-center flex-col'>
             <h1 key={index} className='text-black text-xl font-semibold '>
            Hello, {item.name}
          </h1>
          <h1 className='text-black text-xl font-semibold'>Your mail is:{item.email}</h1>
      
          </div>
        })}
      </div>
      <div className='h-screen bg-gray-100 w-full flex items-center justify-center '>
        <div className='bg-white drop-shadow-2xl w-96 rounded-xl flex flex-col items-center justify-center'>
          <h1 className='text-black text-4xl font-bold m-5'>React Project</h1>
          <h1 className='text-3xl text-black text-center font-bold underline mt-4'>Login Form</h1>
          <form
            onSubmit={(e) => {
              handleSumbit(e)
            }}
            className='flex flex-col items-center justify-center py-5 px-10 gap-4 w-full'>
            <input
              value={formData.name}
              onChange={handleChange}
              name='name'
              required
              className='rounded border-2 border-gray-400 placeholder-gray-400 focus:outline-offset-1 focus:outline-blue-500 disabled:bg-gray-400 w-full text-xl p-1'
              type="text"
              placeholder='Enter your Name' />
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='rounded border-2 border-gray-400 placeholder-gray-400 focus:outline-offset-1 focus:outline-blue-500 disabled:bg-gray-400 w-full text-xl p-1 '
              type="email"
              placeholder='Enter your Email' />
            <input
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='rounded border-2 border-gray-400 placeholder-gray-400 focus:outline-offset-1 focus:outline-blue-500 disabled:bg-gray-400 w-full text-xl p-1'
              type="password"
              placeholder='Enter your Password' />
            <input
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className='rounded border-2 border-gray-400 placeholder-gray-400 focus:outline-offset-1 focus:outline-blue-500 disabled:bg-gray-400 w-full text-xl p-1'
              type="password"
              placeholder='Confirm your Password' />


            {error && <p className='text-red-500 text-base'>{error}</p>}
            <button

              className='bg-emerald-500 py-2 px-4 w-full rounded-2xl cursor-pointer mt-4'>Sumbit</button>
               
          </form>
            <p className='text-center text-blue-800 font-bold'>This Project is all about to feel confident in Form Handlling and Validation</p>
        </div>

            
       
        <ToastContainer />
      </div>

    
    </>
  )
}

export default App
