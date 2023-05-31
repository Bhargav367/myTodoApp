import React, { useState } from 'react'

const Student = () => {

  let [state , setState] = useState({
    username : 'reddy'
  });

  let bhargavInput=(event)=>{
    setState((state) => ({
      username : event.target.value
    }))
  }
  return (
    <div>
      <div className="row">
        <div className='col-md-3'>
          <div className='card'>
            <div className='card-header bg-primary text white'>
              <p className='h4'>user name</p>
            </div>
            <div className='card-body'>
              <form>
                <input 
                value={state.username}
                onChange={bhargavInput}
                type='text' className='form-control'/>
              </form>
              <h3>{state.username}</h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student