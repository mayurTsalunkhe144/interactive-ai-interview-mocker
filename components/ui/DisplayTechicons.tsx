import { cn, getTechLogos } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

const DisplayTechicons = async({techStack}:TechIconProps) => {
  const techIcons = await getTechLogos(techStack);
    return (
    <div className='flex flex-row gap-2'>
      {
        techIcons.slice(0,3).map(({tech,url},index)=>(
            <div key={tech} className={cn("relative group bg-dark-300 rounded-full p-2 flex-center ", index>=1 && "-ml-3")}>
                <span className='tech-tooltip'>{tech}</span>
                <Image src={url} width={100} height={100} alt={tech} className="size-5" />
            </div>
        ))
      }
    </div>
  )
}

export default DisplayTechicons
