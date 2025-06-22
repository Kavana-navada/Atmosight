import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=' sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur py-2  supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto flex h-12 items-center justify-between px-4'>
            <Link to ={"/"}>
                <img src="/lg.png" alt="Logo" className="h-8 w-8  inline-block " />
                <span className="text-xl font-bold ml-2">Atmosight</span>
            </Link>

            <div>
                
            </div>
        </div>
      
    </header>
  )
}

export default Header;
