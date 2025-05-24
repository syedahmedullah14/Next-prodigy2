"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Next Prodigy" width={180} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
              ABOUT US
            </Link>
            <Link href="/products" className="text-white hover:text-blue-400 transition-colors">
              PRODUCTS
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              CONTACT
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">GET STARTED</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
                ABOUT US
              </Link>
              <Link href="/products" className="text-white hover:text-blue-400 transition-colors">
                PRODUCTS
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
                CONTACT
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">GET STARTED</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
