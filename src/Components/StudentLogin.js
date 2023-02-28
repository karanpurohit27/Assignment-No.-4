import React,{useState} from 'react'
import axios from 'axios'
import './StudentLogin.css'

function StudentLogin() {
  const [user,setUser]=useState("")
  const [pass,setpass]=useState("")
  function handleSubmit( e){
  axios.post('',{
    username:user,
    password:pass
  })
  .then(()=>{
    console.log("success")
  })
  }
  return (
    <div>
    <div>
        <div className='outer-box'>
            <div className='card'>
                <div className='middle-box'>
                  <strong>Login as Student</strong>
                  
                </div>
                <div className='inner-box'>
                    <form onSubmit={handleSubmit}>
                        <div className='content'>
                        <div className='content1'>
                        <span><strong>Username</strong></span>
                        <input type={'text'} placeholder='Username' value={user} onChange={(e)=>setUser(e.target.value)}></input>   
                        </div>
                        <div className='content1'>
                        <span><strong>Password</strong></span>
                        <input type={'password'} placeholder='PassWord' value={pass} onChange={(e)=>setpass(e.target.value)}></input>
                        </div>
                        </div>
                        <div className='content2'><input type='submit' className='btn btn-primary'></input></div>
                    </form>
                </div>
            </div>
            </div>
    </div>
    </div>
  )
}

export default StudentLogin