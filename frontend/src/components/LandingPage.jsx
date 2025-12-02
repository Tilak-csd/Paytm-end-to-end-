import React from 'react'
import { useRecoilState } from 'recoil'
import { DefaultAtom } from '../../store/atoms/main'

export default function LandingPage() {
    const [open, setOpen] = useRecoilState(DefaultAtom)
  return (
    <div>
        
    </div>
  )
}
