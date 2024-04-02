'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function Modal() {
 const router = useRouter()
    const handleClick=()=>{
   router.back()
    }
  return (
    <div className='absolute top-10 left-[50%] h-64 border-4 border-red-900 '>
        <button onClick={handleClick}>Close</button>
        
        Modal page</div>
  )
}
