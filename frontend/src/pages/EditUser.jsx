import React, { useState } from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function EditUser() {
    const navigate = useNavigate()
    const [newfirstname, setNewfirstname] = useState("")
    const [newlastname, setNewlastname] = useState("")
    return (
        <div className='flex justify-center items-center bg-sky-300 w-full h-screen'>
            <div className='w-[90%] sm:w-120 sm:p-10 p-5 bg-white rounded-xl'>
                <Heading label={"Update User"} />
                <Subheading label={"Edit the user firstname and lastname "} />
                <InputBox placeholder={"Firstname"} label={"Firstname"}
                    onChange={(e) => {
                        setNewfirstname(e.target.value)
                    }}
                />
                <InputBox placeholder={"Lastname"} label={"Lastname"}
                    onChange={(e) => {
                        setNewlastname(e.target.value)
                    }} />
                <div className='my-3 flex justify-center gap-3 items-center'>
                    <button onClick={() => navigate('/dashboard')}
                     className='w-full py-2 cursor-pointer rounded-md border border-gray-500 text-black text-xl hover:bg-gray-700 hover:text-white'>
                        Cancel
                    </button>

                    <Button label={"Update"}
                        onClick={async () => {
                            try {
                                if(newfirstname === "" && newlastname === ""){
                                 alert("Enter the new FirstName and LastName")  
                                 return  
                                }
                                const token = localStorage.getItem('token')
                                await axios.put('http://localhost:3000/api/v1/user/updateuser', {
                                    firstname :newfirstname,
                                    lastname :newlastname
                                },{
                                    headers :{
                                        Authorization : token
                                    }
                                })
                                navigate('/dashboard')
                            } catch(err){
                                alert("Cannnot Change the Name, Please Try Again!")
                                console.log("Error", err);
                                
                            }
                        }} />
                </div>

            </div>
        </div>
    )
}
