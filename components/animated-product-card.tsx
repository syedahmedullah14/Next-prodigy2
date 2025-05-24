"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface AnimatedProductCardProps {
  name: string
  description: string
  slug: string
  logoPath: string
  category: string
}

export default function AnimatedProductCard({ name, description, slug, logoPath, category }: AnimatedProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="transform transition-all duration-300"
    >
      <motion.div
        className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:bg-slate-800/50 hover:border-blue-400/50 transition-all duration-300 flex flex-col h-full"
        whileHover={{ boxShadow: "0 0 20px rgba(75, 139, 244, 0.2)" }}
      >
        <motion.div
          className="w-full h-32 bg-white/5 rounded-lg p-6 flex items-center justify-center mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={logoPath}
            alt={name}
            width={180}
            height={90}
            className="object-contain max-h-20"
          />
        </motion.div>

        <div className="flex-grow flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-[#4B8BF4] mb-2"
          >
            {category}
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-white mb-3"
          >
            {name}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 mb-6 flex-grow"
          >
            {description}
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto"
          >
            <Button
              asChild
              className="w-full bg-transparent border-2 border-[#4B8BF4] text-[#4B8BF4] hover:bg-[#4B8BF4] hover:text-white transition-all duration-300"
            >
              <Link href={`/products/${slug}`}>Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
} 