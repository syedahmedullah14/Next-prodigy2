"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface QuoteFormProps {
  productName: string
}

export default function QuoteForm({ productName }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: `Quote Request for ${productName}`,
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: `Quote Request for ${productName}`,
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
    <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
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
            placeholder="Please describe your requirements"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500 resize-none"
          />
        </div>

        <Button type="submit" className="bg-[#4B8BF4] hover:bg-blue-600 text-white px-8 py-3 w-full">
          Send Quote Request
        </Button>
      </form>
    </div>
  )
} 