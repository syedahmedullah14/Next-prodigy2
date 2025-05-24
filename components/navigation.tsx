"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Next Prodigy"
              width={240}
              height={60}
              className="h-16 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
