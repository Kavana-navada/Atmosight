import React from 'react'
import { Link } from "react-router-dom";
import { useTheme } from "@/context/theme-provider";
import { Sun, Moon } from 'lucide-react';
import CitySearch from './ui/city-search';

const Header = () => {

    const {theme,setTheme}=useTheme();
    const isDark=theme==="dark";
    return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
  <div className="container mx-auto px-4">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 h-auto">
      
      {/* Logo and Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-blue-700">Atmosight</span>
      </Link>

      {/* Search + Theme Toggle */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
        
        {/* City Search should stretch on small screens */}
        <div className="w-full sm:w-auto">
          <CitySearch />
        </div>

        {/* Theme Toggle */}
        <div
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`flex items-center justify-center cursor-pointer transition-transform duration-500 ${
            isDark ? "rotate-180" : "rotate-0"
          }`}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text-blue-500 transition-all" />
          )}
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header;
