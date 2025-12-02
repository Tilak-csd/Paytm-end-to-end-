import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function SignUpCard() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [email, setEmail] = useState("")
    const [submit, setSubmit] = useState(0)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('http://localhost:3000/user/signUp', {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    phonenumber: phonenumber
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                console.log("success crerat account", res.data);
            } catch (err) {
                console.log("Error in SignUp", err);

            }
        }
        fetchData()

    }, [submit])

    return (
        <div>
            <h1> SignUpCard </h1>
            <Firstname setFirstname={setFirstname} />
            <Lastname setLastname={setLastname} />
            <Email setEmail={setEmail} />
            <Phonenumber setPhonenumber={setPhonenumber} />
            <Password setPassword={setPassword} />
            <button onClick={()=>{
                setSubmit(prev => prev + 1)
            }} >Submit</button>
        </div>
    )
}

function Firstname({ setFirstname }) {
    return <input type="text" placeholder='Firstname'
        onChange={(e) => setFirstname(e.target.value)}
    />
}

function Lastname({ setLastname }) {
    return <input type="text" placeholder='Lastname'
        onChange={(e) => setLastname(e.target.value)}
    />
}

function Email({ setEmail }) {
    return <input type="text" placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
    />
}

function Phonenumber({ setPhonenumber }) {
    return <input type="text" placeholder='Phonenumber'
        onChange={(e) => setPhonenumber(e.target.value)}
    />
}

function Password({ setPassword }) {
    return <input type="text" placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
    />
}
