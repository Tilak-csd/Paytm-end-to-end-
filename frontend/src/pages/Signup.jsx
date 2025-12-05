import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    return (
        <div className='flex justify-center items-center bg-sky-300 w-full h-screen'>
            <div className='w-80 sm:w-120 sm:p-10 p-5 bg-white rounded-xl'>
                <Heading label={"Sign Up"} />
                <Subheading label={"Create your account and send money or lend money through Paytm."} />
                <InputBox placeholder={"Tilak"} label={"First Name"}
                    onChange={(e) => {
                        setFirstname(e.target.value)
                    }} />
                <InputBox placeholder={"Gubhaju"} label={"Last Name"}
                    onChange={(e) => {
                        setLastname(e.target.value)
                    }} />
                <InputBox placeholder={"abc@gmail.com"} label={"Email"}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <InputBox placeholder={"password"} label={"Password"}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <div className='my-3'>
                    <Button label={"Sign Up"}
                        onClick={async () => {
                            try {
                                const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                                    firstname,
                                    lastname,
                                    email,
                                    password
                                })
                                localStorage.setItem('token', response.data.token)
                                navigate('/dashboard')
                            } catch (error) {
                                alert("Could not SignUp! Please try again")
                                console.log("Error in Signup", error);
                            }
                        }
                        }

                    />
                </div>
                <BottomWarning label={"Already have an account."} buttonText={"Sign In"} to={'/signin'} />

            </div>
        </div>
    )
}
