import React from 'react'
import { useState } from 'react'

function ForgetPassword() {

     const [step,setStep] = useState(1)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        {step==1 && <div>

        </div>}


        {step==2 && <div>

        </div>}


        {step==3 && <div>

        </div>}
        
        
        
        
        
        </div>
  )
}

export default ForgetPassword