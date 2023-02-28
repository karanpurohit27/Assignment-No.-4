import React, { useState } from 'react'
import './LoginOption.css'
import {Link} from 'react-router-dom'
function LoginOption() {
  
  return (
    <div>
        <div className='outer-box'>
            <div className='card'>
                <div className='middle-box'>
                  <strong>Login as</strong>  
                </div>
                <div className='inner-box'>
                    <div>
                      <Link to='/stuLogin'>
                    <button className='btn btn-primary'> Student</button>
                      </Link>
                    </div>
                    <div>
                      <Link to='/teacherLogin'>
                    <button className='btn btn-primary'> Teacher</button>
                      </Link>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default LoginOption