import React, { useState } from 'react'
import './App.css'


const Tod = () => {

    let[state,setState] = useState(
        [
            {
                id : 1,
                task : 'Learn react'
            },
            {
                id : 2,
                task : 'Learn mysql'
            }
        ]
    )

    function addNewTodo(){
        
    }
  return (
    <React.Fragment>
        <div className='container mt-5 '>
            <div className='row'>
            <div className='col-md-9'>
                        <div className='input-group'>
                            <input className='form-control' type="text"/> <br/>
                            <button onClick={() => {
                                addNewTodo
                            }

                            } className='btn btn-success'>Add</button>  
                        </div> 
                        
                        <ul className='list-group mt-4'>
                            {
                                state.map(
                                    (state) =>{
                                        return (
                                            <li className='list-group-item'>
                                            <p>{state.task}</p> 
                                            <button className='btn'>❌</button>
                                         </li>
                                        )
                                    }

                                )
                            }
                            
                           

                        </ul>

                    
                
            </div>
            </div>
        </div>
    
    </React.Fragment>
  )
}

export default Tod