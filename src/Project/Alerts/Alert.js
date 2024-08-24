import React from 'react'
import AlertComponent from '../components/AlertComponent'

function Alert() {
  return <div className="container mx-auto">



    <AlertComponent type={"success"} message={"successful login"}/>
    <AlertComponent type={"info"} message={"Time triggered"} delay={true}
    delayTime={2000}
    />
  </div>
}

export default Alert
