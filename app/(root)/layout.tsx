import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
       <Link href='/' className='flex items-center gap-2'>
       <Image src='/logo.svg' width={38} height={30} alt='logo' />
       <h2 className=' text-primary-100'>Ai Interview Mocker</h2>
       </Link>
      </nav>
      {children}
      
    </div>
  )
}

export default RootLayout
