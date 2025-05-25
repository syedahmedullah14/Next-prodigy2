"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import AnimatedProductCard from "@/components/animated-product-card"
import AnimatedWhyChooseCard from "@/components/animated-why-choose-card"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const allProducts = [
  {
    name: "HPE (Hewlett Packard Enterprise)",
    description: "Enterprise servers, storage systems, and hybrid cloud solutions for modern data environments.",
    slug: "hpe",
    logoPath: "/logos/hpe.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Dell EMC",
    description: "Servers, hyper-converged infrastructure, and storage built for agility, performance, and intelligent data management.",
    slug: "dell-emc",
    logoPath: "/logos/dell.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Lenovo",
    description: "Reliable servers, workstations, and infrastructure solutions for modern IT operations.",
    slug: "lenovo",
    logoPath: "/logos/lenovo.png",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Hitachi",
    description: "Scalable storage systems and infrastructure for high-volume, mission-critical workloads with built-in resilience.",
    slug: "hitachi",
    logoPath: "/logos/hitachi.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Cisco",
    description: "Industry-standard switches, routers, unified communications, and secure wireless infrastructure.",
    slug: "cisco",
    logoPath: "/logos/cisco.svg",
    category: "Networking Solutions"
  },
  {
    name: "Cisco Meraki",
    description: "Cloud-managed networking for simplified deployment, visibility, and control.",
    slug: "cisco-meraki",
    logoPath: "/logos/cisco-meraki.png",
    category: "Networking Solutions"
  },
  {
    name: "Juniper",
    description: "High-performance routing, switching, and security for scalable enterprise networks.",
    slug: "juniper",
    logoPath: "/logos/juniper.png",
    category: "Networking Solutions"
  },
  {
    name: "Huawei",
    description: "High-performance networking, storage, and compute solutions tailored for efficient and cost-effective IT operations.",
    slug: "huawei",
    logoPath: "/logos/huawei.svg",
    category: "Networking Solutions"
  },
  {
    name: "Fortinet",
    description: "Enterprise-grade cybersecurity including firewalls, endpoint protection, and threat intelligence platforms.",
    slug: "fortinet",
    logoPath: "/logos/fortinet.svg",
    category: "Security & Wireless"
  },
  {
    name: "Aruba Networks",
    description: "Enterprise-grade wireless networking solutions including access points, switches, and network management tools for secure and reliable connectivity.",
    slug: "aruba",
    logoPath: "/logos/aruba.svg",
    category: "Networking Solutions"
  },
  {
    name: "Palo Alto Networks",
    description: "Next-generation security platforms providing advanced threat prevention and comprehensive network security for modern enterprises.",
    slug: "palo-alto",
    logoPath: "/logos/palo.png",
    category: "Security & Wireless"
  },
  {
    name: "VMware",
    description: "Virtualization and cloud computing software for optimized data center operations and digital workspace solutions.",
    slug: "vmware",
    logoPath: "/logos/vm.png",
    category: "Enterprise Infrastructure"
  },
  {
    name: "NetApp",
    description: "Data management and storage solutions enabling organizations to accelerate digital transformation with cloud-led innovation.",
    slug: "netapp",
    logoPath: "/logos/net.png",
    category: "Enterprise Infrastructure"
  },
  {
    name: "F5 Networks",
    description: "Application delivery and security solutions ensuring fast, secure, and reliable access to applications and data.",
    slug: "f5",
    logoPath: "/logos/f5.png",
    category: "Security & Wireless"
  },
  {
    name: "Check Point",
    description: "Comprehensive security solutions protecting organizations from cyber threats with advanced firewall and threat prevention capabilities.",
    slug: "checkpoint",
    logoPath: "/logos/checkpoint.png",
    category: "Security & Wireless"
  },
  {
    name: "MikroTik",
    description: "Cost-effective, feature-rich networking equipment with versatile RouterOS for ISPs and enterprises.",
    slug: "mikrotik",
    logoPath: "/logos/mikrotik.png",
    category: "Networking Solutions"
  },
  {
    name: "Polycom (HP | Poly)",
    description: "Professional-grade video conferencing and unified communications solutions for modern collaboration.",
    slug: "polycom",
    logoPath: "/logos/polycom.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Quantum",
    description: "Specialized storage and data protection solutions for high-volume environments and long-term archiving.",
    slug: "quantum",
    logoPath: "/logos/quantum.png",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Sophos",
    description: "Integrated cybersecurity platform with AI-powered protection for endpoints, networks, and cloud workloads.",
    slug: "sophos",
    logoPath: "/logos/sophos.png",
    category: "Security & Wireless"
  },
  {
    name: "Ubiquiti",
    description: "High-performance networking solutions with unified management through the UniFi platform.",
    slug: "ubiquiti",
    logoPath: "/logos/ubiquiti.svg",
    category: "Networking Solutions"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/overview.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto px-4 pt-32">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              <span className="text-blue-400">FUTURE-READY</span>
              <br />
              IT INFRASTRUCTURE
              <br />
              STARTS HERE
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              At Next Prodigy, We help businesses scale and secure their IT environments with enterprise-grade hardware,
              networking, and cybersecurity solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button
                asChild
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-6 text-xl transition-all duration-300"
              >
                <Link href="/products">OUR PRODUCTS</Link>
              </Button>
              <Button
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-6 text-xl transition-all duration-300"
              >
                <Link href="/contact">REACH OUT TO US</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-32"
        style={{
          backgroundImage: "url('/products.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              OUR <span className="text-blue-400">PRODUCTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover our comprehensive range of enterprise-grade solutions from industry-leading manufacturers.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allProducts.map((product) => (
              <AnimatedProductCard
                key={product.slug}
                {...product}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-20"
        style={{
          backgroundImage: "url('/whyus.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              WHY CHOOSE <span className="text-blue-400">NEXT PRODIGY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              At Next Prodigy, we're more than just an IT distributor — we're your technology partner. Here's what sets
              us apart:
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <AnimatedWhyChooseCard
              title="Top-Tier Partnerships"
              description="We work directly with trusted brands to offer the best IT products available in the global market."
            />
            <AnimatedWhyChooseCard
              title="Tailored Recommendations"
              description="We don't just sell — we advise, aligning our solutions to your exact business needs."
            />
            <AnimatedWhyChooseCard
              title="Fast & Reliable Fulfillment"
              description="Your time matters. We ensure timely delivery and ongoing support for every order."
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <AnimatedWhyChooseCard
              title="Expertise You Can Trust"
              description="Our team understands both the products and the problems they solve."
            />
            <AnimatedWhyChooseCard
              title="Scalability for the Future"
              description="Our solutions are designed to grow with your business, not hold it back."
            />
            <AnimatedWhyChooseCard
              title="End-to-End Infrastructure Support"
              description="We assist through every stage — from product selection to post-deployment service."
            />
          </motion.div>
        </div>
      </motion.section>

      <ContactForm />

      <Footer />
    </div>
  )
}
