import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert && <div className='alert'>Please enter a city</div>
    )
}

export default Alert
