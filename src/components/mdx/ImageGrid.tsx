import Image from 'next/image';
import React from 'react'

type Props ={
  images: string;
  columns?: number; 
  caption?: string;
}

function ImageGrid({images, columns=2, caption}: Props) {

    const imageList = typeof images === 'string' 
        ? images.split(',').map(src => src.trim()) 
        : (Array.isArray(images) ? images : []);

    if (imageList.length === 0) return null;
    const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
   }[columns] || 'grid-cols-2';

  return (
    <div className="my-10 w-full">
      <div className={`grid grid-cols-1 md:${gridCols} gap-4`}>
        {imageList.map((src, index) => (
          <div key={index} className="relative aspect-[5/3] rounded-xl overflow-hidden border dark:border-slate-800 shadow-md">
            <Image 
              src={src} 
              alt={`screenshot-${index}`} 
              className="object-container"
              fill 
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        ))}
      </div>
      {caption && <p className="text-center text-sm text-slate-500 mt-3">{caption}</p>}
    </div>
  )
}

export default ImageGrid