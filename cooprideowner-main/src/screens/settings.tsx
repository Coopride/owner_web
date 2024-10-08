import React, { useState } from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.js'

const Settings = () => {
    const [passModalOpen, setPassModalOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    


  return(
    <div className="p-5 sm:p-10 w-full">
    <div className="flex w-full">
    <div className="w-96 hidden lg:flex"></div>
    <div className="w-16 lg:hidden "></div>
  <div className='w-full'>
      <div>
      <h5 className="font-semibold text-xl">Settings</h5>
      </div> 
      <div>
      <div className='bg-white rounded-xl shadow-sm mt-8 p-4 cursor-pointer' onClick={() =>setPassModalOpen(true)}>
        <div className='flex justify-between items-center'>
            <div>
            <h4 className='text-[14px] font-medium'>Change Password</h4>
            </div>
            <div className='flex justify-center items-center'>
            <Icon icon="iconamoon:arrow-right-2-light" width="1.5em" height="1.5em" />
            </div>
        </div>
      </div>
      </div>
      </div>
  </div>
  {passModalOpen &&
  <div className='fixed inset-0 z-50 w-full h-full bg-transparent flex justify-center items-center drop-shadow-md p-10'>
    <div className="bg-white rounded-xl drop-shadow-md p-3  pb-5 lg:w-1/3 w-full">
    <div className="flex justify-between items-center pb-3">
            <h2 className="text-[22px] font-bold">Change Password</h2>
            <div className="cursor-pointer bg-white rounded-full p-1 shadow-md flex items-center" onClick={() => setPassModalOpen(false)}>
            <Icon icon="iconoir:cancel" width="1.2em" height="1.2em" />
            </div>
            </div>
            <div className='relative flex items-center p-1'>
          <Icon icon="prime:lock" width="1.6em" height="1.6em" className='absolute flex flex-col justify-evenly pl-3 opacity-60' style={{color: '#110000'}} />
          <input type={showPassword ? "text" : "password"} placeholder='Password' className='w-full p-3 rounded-xl bg-transparent border border-[#E2E2E2] pl-12 text-sm' />
         <div className='absolute flex justify-end right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
         {showPassword ? <Icon icon="iconamoon:eye-off-thin" width="1.2em" height="1.2em" className=''   /> :
          <Icon icon="mdi-light:eye" width="1.2em" height="1.2em" className='' style={{}} />}
         </div>
          </div>

          <div className='relative flex items-center p-1'>
          <Icon icon="prime:lock" width="1.6em" height="1.6em" className='absolute flex flex-col justify-evenly pl-3 opacity-60' style={{color: '#110000'}} />
          <input type={showPassword ? "text" : "password"} placeholder=' Confirm Password' className='w-full p-3 rounded-xl bg-transparent border border-[#E2E2E2] pl-12 text-sm' />
         <div className='absolute flex justify-end right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
         {showPassword ? <Icon icon="iconamoon:eye-off-thin" width="1.2em" height="1.2em" className=''   /> :
          <Icon icon="mdi-light:eye" width="1.2em" height="1.2em" className='' style={{}} />}
         </div>
          </div>

          <div className='bg-yellow rounded-2xl p-3 cursor-pointer w-full mt-5' onClick={() => proceedWithdrawal()}>
            <h3 className='text-center text-[15px] font-medium'>Change Password</h3>
          </div>
            </div>
    </div>}
  </div>
  )
}

export default Settings