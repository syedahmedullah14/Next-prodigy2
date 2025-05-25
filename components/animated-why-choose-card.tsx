"use client"

import { motion } from "framer-motion"

interface AnimatedWhyChooseCardProps {
  title: string
  description: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function AnimatedWhyChooseCard({ title, description }: AnimatedWhyChooseCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        backgroundColor: "rgba(30, 41, 59, 0.5)"
      }}
      className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700 transform transition-all duration-300 hover:border-blue-400"
    >
      <h3 className="text-blue-400 text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
} 