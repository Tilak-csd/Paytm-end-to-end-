import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Signin() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await axios.post('http://localhost:3000/user/signUp', {
                    firstname: "Ayushaa",
                    lastname: "Shrestha",
                    email: "ayusha12@gmail.com",
                    password: "ayushababy",
                    phonenumber: "9810123123"
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

    }, [])

    return (
        <div>SignInCard</div>
    )
}
