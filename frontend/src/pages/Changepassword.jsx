import React, { useState } from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function EditUser() {
    const navigate = useNavigate()
    const [newpassword, setNewpassword] = useState("")
    return (
        <div className='flex justify-center items-center bg-sky-300 w-full h-screen'>
            <div className='w-[90%] sm:w-120 sm:p-10 p-5 bg-white rounded-xl'>
                <Heading label={"Change Password"} />
                <Subheading label={"Keep your password strong"} />
                <InputBox placeholder={"new password*"} label={"New Password"}
                    onChange={(e) => {
                        setNewpassword(e.target.value)
                    }}
                />

                <div className='my-3 flex justify-center gap-3 items-center'>
                    <button onClick={() => navigate('/dashboard')}
                     className='w-full py-2 cursor-pointer rounded-md border border-gray-500 text-black text-xl hover:bg-gray-700 hover:text-white'>
                        Cancel
                    </button>

                    <Button label={"Change"}
                        onClick={async () => {
                            try {
                                if(newpassword === ""){
                                 alert("Enter the new FirstName and LastName")  
                                 return  
                                }
                                const token = localStorage.getItem('token')
                                await axios.put('http://localhost:3000/api/v1/user/updatepassword', {
                                    password :newpassword
                                },{
                                    headers :{
                                        Authorization : token
                                    }
                                })
                                localStorage.removeItem('token')
                                navigate('/signin')
                            } catch(err){
                                alert("Cannnot Change the Password, Please Try Again!")
                                console.log("Error", err);
                                
                            }
                        }} />
                </div>

            </div>
        </div>
    )
}
