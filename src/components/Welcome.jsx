import React from 'react'
import topSecretImage from '../assets/TS.jpg'

function Welcome() {
  return (
    <div className="container my-3 text-center">
        <h2>
            Welcome to the app
        </h2>
        <img src={topSecretImage} alt="img" style={{width:'200px' , height:'200px' , objectFit:'cover'}} />
    </div>
  )
}

export default Welcome