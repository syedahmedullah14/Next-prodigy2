import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="relative bg-slate-900 text-white py-12"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/80"></div>
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <Image src="/logo.png" alt="Next Prodigy" width={400} height={220} className="w-auto h-24" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-300">+971 52 469 2184</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Mail</div>
                  <div className="text-gray-300">sales@next-prodigy.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-gray-300">
                    NEXT PRODIGY TRADING LLC
                    <br />
                    Insurance Building, Office#57
                    <br />
                    Deira, Dubai, United Arab Emirates.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 NextProdigy. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
