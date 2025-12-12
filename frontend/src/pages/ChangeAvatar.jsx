import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
export default function ChangeAvatar() {
    const navigate = useNavigate()
    const [searchparams] = useSearchParams()
    const [avatar, setAvatar] = useState(null)
    const firstname = searchparams.get("firstname")
    console.log(firstname);

    const handleInput = (e) => {
        setAvatar(e.target.files[0])
    }

    const handleUpload = async ()=>[
        
    ]
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[80%] flex justify-center items-center flex-col sm:w-[50%] lg:w-[40%] xl:w-[30%] h-auto rounded-2xl p-3 bg-amber-50 gap-5'>
            {avatar ? <Avatar /> : <InitialAvatar firstname={firstname} /> }
                <p className='text-gray-500 text-center'>Edit the avatar</p>
                <input type="file" accept='images/*' onChange={handleInput} className="block w-full text-sm text-gray-300
         file:mr-4 file:py-2 file:px-4
         file:rounded-lg file:border-0
         file:bg-white/10 file:text-black
         file:backdrop-blur-lg file:shadow-lg
         file:hover:bg-white
         cursor-pointer"/>
                <div className='w-full my-3 flex justify-center gap-3 items-center'>
                    <button onClick={() => navigate('/dashboard')}
                        className='w-full py-2 cursor-pointer rounded-md border border-gray-500 text-black text-xl hover:bg-gray-700 hover:text-white'>
                        Cancel
                    </button>
                    <Button label={"Change"}></Button>
                </div>
            </div>
        </div>
    )
}

function Avatar(){
    return <img src=''/>
}

function InitialAvatar({firstname}){
    return <div className='w-30 h-30 rounded-full flex justify-center items-center bg-gray-200'>
        {firstname[0].toUpperCase()}
    </div>
}