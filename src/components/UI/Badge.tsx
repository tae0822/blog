import React from 'react'
type TextSize = 'small' | 'large'

type Props ={
    text: string;
    size?: TextSize
}

function Badge({text, size='small'}: Props) {
  return (
     <span className={`rounded-lg bg-green-100 px-2 rounded-xl text-black ${getSizeStyle(size)} text-sm md:text-md lg:text-lg` }>
            {text}
    </span>
  )
}

function getSizeStyle(size: TextSize){
    switch(size){
        case 'small':
            return 'text-xxs md:text-xs'
        case 'large':
            return 'text-sm md:text-base lg:text-lg'
    }
}
export default Badge

