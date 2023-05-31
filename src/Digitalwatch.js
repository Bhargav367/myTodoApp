import React, { useEffect, useState } from 'react'

const Digitalwatch = () => {

    let [state , setState] = useState({
        currentTime : new Date() . toLocaleTimeString()
    })

    useEffect(() => {
        setInterval (()=> {
            setState ( () => ({
                currentTime : new Date() . toLocaleTimeString()

            })) ; 

        },);

    })
  return (
    <React.Fragment>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card shadow-lg text-center'>
                        <div className='card-header bg-warning'>
                            <p className='h4'>Digitalwatch</p>
                        </div>
                        <div className='card-body'>
                            <h3 className='display-4'>{state
                            .currentTime}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </React.Fragment>
  )
}

export default Digitalwatch