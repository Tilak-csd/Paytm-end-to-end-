import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'


export default function Signup() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='flex justify-center items-center bg-sky-300 w-full h-screen'>
            <div className='w-[25%] p-10 bg-white rounded-xl'>
                <Heading label={"Sign Up"} />
                <Subheading label={"Create your account and send money or lend money through Paytm."} />
                <InputBox placeholder={"Tilak"} label={"First Name"}
                onChange={(e)=>{
                    setFirstname(e.target.value)
                }} />
                <InputBox placeholder={"Gubhaju"} label={"Last Name"}
                  onChange={(e)=>{
                    setLastname(e.target.value)
                }} />
                <InputBox placeholder={"abc@gmail.com"} label={"Email"} 
                  onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <InputBox placeholder={"password"} label={"Password"}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                }} />
                <div className='my-3'>
                    <Button label={"Sign Up"}
                     />
                </div>
                <BottomWarning label={"Already have an account."} buttonText={"Sign In"} to={'/signin'} />

            </div>
        </div>
    )
}
