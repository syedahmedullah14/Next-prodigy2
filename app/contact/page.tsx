"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Contact Section */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: "url('/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="relative container mx-auto px-4 pt-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">CONTACT US</h1>
              <p className="text-xl text-gray-300 mb-12">
                Have questions or looking for a tailored IT solution? Reach out to our team today.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Address</h3>
                    <div className="text-gray-300">
                      <div className="font-medium">NEXT PRODIGY TRADING LLC</div>
                      <div>Insurance Building, Office#57</div>
                      <div>Deira, Dubai, United Arab Emirates.</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Mail</h3>
                    <a
                      href="mailto:sales@next-prodigy.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors underline"
                    >
                      sales@next-prodigy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                    <a href="tel:+971524692184" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +971 52 469 2184
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-8">SEND US A MESSAGE</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500 resize-none"
                  />
                </div>

                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-full">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
