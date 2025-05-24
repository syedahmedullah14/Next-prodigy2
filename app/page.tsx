import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

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
    logoPath: "/logos/lenovo.svg",
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
    logoPath: "/logos/cisco-meraki.svg",
    category: "Networking Solutions"
  },
  {
    name: "Juniper",
    description: "High-performance routing, switching, and security for scalable enterprise networks.",
    slug: "juniper",
    logoPath: "/logos/juniper.svg",
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
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/overview.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto px-4 pt-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-blue-400">FUTURE-READY</span> IT INFRASTRUCTURE
              <br />
              STARTS HERE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              At Next Prodigy, We help businesses scale and secure their IT environments with enterprise-grade hardware,
              networking, and cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
              >
                <Link href="/products">OUR PRODUCTS</Link>
              </Button>
              <Button
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
              >
                <Link href="/contact">REACH OUT TO US</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/products.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OUR <span className="text-blue-400">PRODUCTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover our comprehensive range of enterprise-grade solutions from industry-leading manufacturers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700 flex flex-col"
              >
                <div className="flex items-center justify-center h-24 mb-6 bg-white/5 rounded-lg p-4">
                  <Image
                    src={product.logoPath}
                    alt={product.name}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  {/* <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3> */}
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-sm text-blue-400 mb-6">{product.category}</div>
                </div>
                <Button
                  asChild
                  className="w-full bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <Link href={`/products/${product.slug}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/whyus.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              WHY CHOOSE <span className="text-blue-400">NEXT PRODIGY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              At Next Prodigy, we're more than just an IT distributor — we're your technology partner. Here's what sets
              us apart:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 text-2xl font-bold mb-4">Top-Tier Partnerships</h3>
              <p className="text-gray-300">
                We work directly with trusted brands to offer the best IT products available in the global market.
              </p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 text-2xl font-bold mb-4">Tailored Recommendations</h3>
              <p className="text-gray-300">
                We don't just sell — we advise, aligning our solutions to your exact business needs.
              </p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 text-2xl font-bold mb-4">Fast & Reliable Fulfillment</h3>
              <p className="text-gray-300">
                Your time matters. We ensure timely delivery and ongoing support for every order.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 text-2xl font-bold mb-4">Expertise You Can Trust</h3>
              <p className="text-gray-300">Our team understands both the products and the problems they solve.</p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 text-2xl font-bold mb-4">Scalability for the Future</h3>
              <p className="text-gray-300">Our solutions are designed to grow with your business, not hold it back.</p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 text-2xl font-bold mb-4">End-to-End Infrastructure Support</h3>
              <p className="text-gray-300">
                We assist through every stage — from product selection to post-deployment service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  )
}
