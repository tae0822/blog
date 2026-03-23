'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import DarkModeButton from './DarkModeButton'

function ThemChanger() {
    const {theme, setTheme} = useTheme();
  return (
    <DarkModeButton status={theme} setStatus={setTheme}/>

  )

}

export default ThemChanger