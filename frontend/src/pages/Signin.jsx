import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center bg-sky-300 w-full h-screen'>
            <div className='w-[25%] p-10 bg-white rounded-xl'>
                <Heading label={"Sign In"} />
                <Subheading label={"Welcome back to Paytm, Access your account."} />
                <InputBox placeholder={"abc@gmail.com"} label={"Email"}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <InputBox placeholder={"password"} label={"Password"}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <div className='my-3'>
                    <Button label={"Sign In"}
                        onClick={async () => {
                            try {
                                const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                                    email,
                                    password
                                })
                                localStorage.setItem('token', response.data.token)
                                navigate('/dashboard')
                            } catch (error) {
                                alert("Sorry! User Doesn't exist. Please try again.")
                                console.log("Error in signin.", err);
                                
                            }
                        }} />
                </div>
                <BottomWarning label={"Doesn't have any account."} buttonText={"Sign Up"} to={'/signup'} />

            </div>
        </div>
    )
}
