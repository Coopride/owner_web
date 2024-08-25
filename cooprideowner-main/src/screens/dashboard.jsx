import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { useEffect, useState } from "react"
import { useAppState } from "../context/AppContext"
import { useQuery } from "../../node_modules/@tanstack/react-query/build/legacy/useQuery"
import { getOwnerData } from "../api/dashboard.api"
import { getCachedData } from "../helpers/storage"

const Dashboard = () => {
  const {user} = useAppState();


  const {data} = useQuery({
    queryFn:getOwnerData
  })  

  const [fullName, setFullName] = useState(`${user.user_details.first_name} ${user.user_details.last_name}`)
  const [mail, setMail] = useState(user.user_details.email)
  const [editProfileOpen, setEditProfileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [country, setCountry] = useState({"country":"Nigeria","countrylogo":"twemoji:flag-nigeria","countrycode":"+234"})
  const [profilePic, setProfilePic] = useState("")
  const [state, setState] = useState("Lagos")
  const [phone, setPhone] = useState(user.phone_number)
  return (
    <div className="p-5 sm:p-10 w-full">
    <div className="flex w-full">
    <div className="w-96 hidden lg:flex"></div>
    <div className="w-16 lg:hidden"></div>
   <div className="w-full">
   <div className="">
      <h5 className="font-semibold text-xl">Dashboard</h5>
    </div>
   <div className="flex flex-col sm:flex-row mt-10 w-full gap-10">
   <div className="w-full">
   <div className="flex sm:flex-row flex-col gap-10">
      <div className="bg-white shadow-lg w-full rounded-xl">
        <div className="flex justify-between p-5 items-center">
          <h2>Total Earning</h2>
          <div className="bg-green-light rounded-md flex justify-center items-center p-2">
          <Icon icon="uit:bag" width="1.2em" height="1.2em" className="" />
          </div>
         </div>
         <div className="px-5 pb-5">
         <h1 className="text-5xl font-semibold"><span className="pr-2"> N</span>{data?.total_earnings}</h1>
         </div>
         </div>

         <div className="bg-white shadow-lg w-full rounded-xl">
        <div className="flex justify-between p-5 items-center">
          <h2>Total Vehicles</h2>
          <div className="bg-green-light rounded-md flex justify-center items-center p-2">
          <Icon icon="uit:bag" width="1.2em" height="1.2em" className="" />
          </div>
         </div>
         <div className="px-5 pb-5">
         <h1 className="text-5xl font-semibold"><span className="pr-2"></span>{data?.total_vehicles}</h1>
         </div>
         </div>
    </div>
    <div className="bg-white rounded-xl w-full flex shadow-lg mt-3 p-5 flex-col">
      <h2>Company Code</h2>
      <span className="text-[#119001] pt-4 ">{data?.company_code}</span>
    </div>
   </div>

    <div className="bg-white shadow-md rounded-2xl flex sm:w-1/2 justify-content items-center flex-col p-5">
      <div className="w-full flex flex-col items-center my-auto">
      <div className="w-20 h-20 bg-red rounded-md"></div>
      <h2 className="font-bold">{fullName}</h2>
      <h3>{mail}</h3>
      <div className='bg-yellow rounded-2xl p-3 cursor-pointer w-full mt-5' onClick={() => setEditProfileOpen(true)}>
            <h3 className='text-center'>Edit Profile</h3>
          </div>
      </div>
    </div>
   </div>
   </div>
   </div>
   {editProfileOpen && 
    <div className='fixed inset-0 z-50 w-full h-full bg-transparent flex justify-center items-center drop-shadow-md p-5'>
        <div className='bg-white rounded-xl drop-shadow-md p-3 lg:p-5 pb-10 lg:w-1/3 w-full'>
        <div className="flex justify-between items-center">
            <h2 className="text-[22px] font-bold">Edit Profile</h2>
            <div className="cursor-pointer bg-white rounded-full p-1 shadow-md flex items-center" onClick={() => setEditProfileOpen(false)}>
            <Icon icon="iconoir:cancel" width="1.2em" height="1.2em" />
            </div>
            </div>

            <div className="flex  flex-col gap-2 justify-center items-center p-2">

              <div className=' rounded-xl bg-blue flex flex-col justify-center items-center m-5 relative cursor-pointer bg-contain bg-no-repeat' style={{backgroundImage:`${profilePic}`}}>
                <input type="file" className='w-16 h-16 rounded-xl bg-red flex flex-col justify-end items-end opacity-0 z-50 cursor-pointer' onChange={(e) => setProfilePic(e)} />
              <div className="bg-black rounded-full flex justify-center items-center p-1 absolute bottom-0 right-0 cursor-pointer">
                <Icon icon="circum:edit" className="flex" width="1em" height="1em"  style={{color: "white"}} />
                </div>
              </div>

              
              <div className='w-full'>
          <input type="text" value={fullName} placeholder='Your full name' className='w-full p-3 rounded-xl bg-transparent border border-gray text-sm' />
          </div>

          {/* <div className='w-full'>
          <input type="text" placeholder='Your last name' className='w-full p-3 rounded-xl bg-transparent border border-gray text-sm' />
          </div> */}

          <div className='w-full'>
          <input type="text" value={mail} placeholder='Your email' className='w-full p-3 rounded-xl bg-transparent border border-gray text-sm' />
          </div>

          <div className='relative flex items-center cursor-pointer w-full' onClick={() => setDropdownOpen(!dropdownOpen)}>
          <Icon icon={country.countrylogo} width="1.6em" height="1.6em"  className='absolute flex flex-col justify-evenly pl-3' style={{color: '#119001'}} />
          
           {/* {country.countrylogo} */}
          <input type="text" value={country.country} placeholder='City' className='w-full p-3 rounded-xl bg-transparent border border-gray pl-12 text-sm' />
          <Icon icon={dropdownOpen ? "fe:arrow-up" : "fe:arrow-down"} width="1.2em" height="1.2em"  className='absolute flex justify-end right-2' style={{color: '#119001'}} />
          </div>

          <div className='relative flex items-center cursor-pointer w-full' onClick={() => setDropdownOpen(!dropdownOpen)}>
          {/* <Icon icon="solar:global-linear" width="1.6em" height="1.6em"  className='absolute flex flex-col justify-evenly pl-3' style={{color: '#119001'}} /> */}
          <h2 className="absolute flex flex-col justify-evenly pl-3 pr-5">{country.countrycode}</h2>
          <input type="text" value={phone} placeholder='City' className='w-full p-3 rounded-xl bg-transparent border border-gray pl-16 text-sm' />
          {/* <Icon icon={dropdownOpen ? "fe:arrow-up" : "fe:arrow-down"} width="1.2em" height="1.2em"  className='absolute flex justify-end right-2' style={{color: '#119001'}} /> */}
          </div>

          <div className='relative flex items-center cursor-pointer w-full' onClick={() => setDropdownOpen(!dropdownOpen)}>
          {/* <Icon icon="solar:global-linear" width="1.6em" height="1.6em"  className='absolute flex flex-col justify-evenly pl-3' style={{color: '#119001'}} /> */}
          <input type="text" value={state} placeholder='City' className='w-full p-3 rounded-xl bg-transparent border border-gray text-sm' />
          <Icon icon={dropdownOpen ? "fe:arrow-up" : "fe:arrow-down"} width="1.2em" height="1.2em"  className='absolute flex justify-end right-2' style={{color: '#119001'}} />
          </div>
          </div>

            <div className='bg-yellow rounded-2xl p-3 cursor-pointer w-full mt-5' onClick={() => proceedWithdrawal()}>
            <h3 className='text-center text-[15px] font-medium'>Submit</h3>
          </div>
        </div>
    </div>}
    </div>
  )
}

export default Dashboard