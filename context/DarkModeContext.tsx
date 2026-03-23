import { ThemeProvider } from 'next-themes'
import React from 'react'

type Props ={
    children : React.ReactNode
}

function DarkModeContext({children}: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
    </ThemeProvider>
    )
}

export default DarkModeContext