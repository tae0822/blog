'use client'

import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'


type Props ={
    status?: string;
    setStatus: (status: string)=> void;
}

function DarkModeButton({status, setStatus}: Props) {
  return (
    <button 
    
    onClick={()=>setStatus(status === 'light' ? 'dark' : 'light')}>
        {status === 'light' ? <FaMoon className="w-6 h-6"/> : <FaSun className="w-6 h-6"/>}
    </button>
  )
}

export default DarkModeButton