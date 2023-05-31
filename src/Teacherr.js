import React, { useState } from 'react'

const Teacherr = () => {

    let [state,setState] = useState({
        user :{
            username : '',
            password : '',
        }
    });

    let {user} = state;

    let changeUsername = (event) => {
        setState((state) => ({
            user : {
                ...state.user,
                username:event.target.value
        

            }
        }))

        let changePassword = (event) => {
            setState((state) => ({
                user : {
                    ...state.user,
            password:event.target.value
            
    
                }
            }))

    }

    let submitLogin = (event) => {
        event.preventDefault();
        console.log(user);

    }
  return (
    <div>
        <p>hai</p>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-header bg-success text-white'>
                            <p className='h4'>Login Here</p>

                        </div>
                        <div className='card-body'>
                            <form onSubmit={submitLogin}>
                                <input
                                value={user.username}
                                onChange={changeUsername}
                                 type='text' className='form-control' placeholder='username'/> <br/>
                                <input 
                                value={user.password}
                                onChange={changePassword}
                                type='password' className='form-control' placeholder='password'/> <br/>
                                <input type='Submit' className='btn btn-success btn-sm' value='Login'/>
                            </form> 
                          

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}}

export default Teacherr