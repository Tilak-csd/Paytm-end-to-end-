import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

export default function Signin() {
    return (
        <div className='flex justify-center items-center bg-sky-300 w-full h-screen'>
            <div className='w-[25%] p-10 bg-white rounded-xl'>
                <Heading label={"Sign In"} />
                <Subheading label={"Welcome back to Paytm, Access your account."} />
                <InputBox placeholder={"abc@gmail.com"} label={"Email"} />
                <InputBox placeholder={"password"} label={"Password"} />
                <div className='my-3'>
                <Button label={"Sign In"} />
                </div>
                <BottomWarning label={"Doesn't have any account."} buttonText={"Sign Up"} to={'/signup'} />

            </div>
        </div>
    )
}
