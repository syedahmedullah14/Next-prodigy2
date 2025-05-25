import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const allProducts = [
  {
    name: "HPE (Hewlett Packard Enterprise)",
    description: "HPE delivers a full stack of IT infrastructure designed to support modern workloads from edge to cloud. At Next Prodigy, we supply HPE servers (ProLiant, Apollo, Synergy), storage platforms (Nimble, Primera), and networking equipment — helping businesses achieve agility, speed, and centralized control across hybrid environments. HPE solutions are ideal for businesses that require performance and scalability without complexity.",
    slug: "hpe",
    logoPath: "/logos/hpe.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Dell EMC",
    description: "Dell EMC empowers organizations with world-class infrastructure including PowerEdge servers, PowerVault and VxRail systems, and converged storage platforms. We supply Dell EMC solutions that simplify data center operations, increase workload performance, and ensure flexible deployment across on-prem, hybrid, or multi-cloud setups.",
    slug: "dell-emc",
    logoPath: "/logos/dell.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Lenovo",
    description: "Lenovo delivers enterprise-grade servers, storage systems, and end-user computing hardware built for performance, reliability, and efficiency. Whether you're managing a data center, deploying edge servers, or upgrading workstations, Lenovo solutions offer the flexibility and support needed to drive digital transformation.",
    slug: "lenovo",
    logoPath: "/logos/lenovo.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Hitachi",
    description: "Hitachi infrastructure is engineered for high-performance, high-availability environments where data is mission-critical. We provide Hitachi Vantara storage platforms, backup systems, and data protection technologies that support continuous availability, compliance, and long-term scalability for enterprise applications.",
    slug: "hitachi",
    logoPath: "/logos/hitachi.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Cisco",
    description: "Cisco is the backbone of secure, scalable networking. We provide Cisco switches, routers, access points, and security appliances that enable seamless communication, intelligent traffic management, and enterprise-wide connectivity. Ideal for both data center and branch-level networking, Cisco products are built for uptime and reliability.",
    slug: "cisco",
    logoPath: "/logos/cisco.svg",
    category: "Networking Solutions"
  },
  {
    name: "Cisco Meraki",
    description: "Cisco Meraki provides a comprehensive suite of cloud-managed networking products including switches, firewalls, wireless access points, and security appliances. With centralized management, built-in analytics, and seamless scalability, Meraki solutions simplify network administration while enhancing visibility and security across distributed environments.",
    slug: "cisco-meraki",
    logoPath: "/logos/cisco-meraki.svg",
    category: "Networking Solutions"
  },
  {
    name: "Juniper",
    description: "Juniper Networks offers cutting-edge networking and security infrastructure designed for high-performance and mission-critical applications. From advanced routing platforms and data center switches to software-defined security, Juniper enables scalable and automated networks that meet the demands of modern enterprises and service providers.",
    slug: "juniper",
    logoPath: "/logos/juniper.svg",
    category: "Networking Solutions"
  },
  {
    name: "Huawei",
    description: "Known for delivering powerful networking and cloud solutions, Huawei offers scalable and cost-efficient technology suited for modern enterprise needs. We provide Huawei switches, storage solutions, rack servers, and cloud infrastructure components that streamline IT environments for maximum performance and availability.",
    slug: "huawei",
    logoPath: "/logos/huawei.svg",
    category: "Networking Solutions"
  },
  {
    name: "Fortinet",
    description: "Security is no longer optional — it's a necessity. Fortinet provides integrated and automated cybersecurity solutions that protect data, users, and applications. We offer next-gen firewalls (FortiGate), endpoint protection (FortiClient), SD-WAN, and centralized management systems — all designed to defend against evolving threats in real-time.",
    slug: "fortinet",
    logoPath: "/logos/fortinet.svg",
    category: "Security & Wireless"
  },
  {
    name: "Aruba Networks",
    description: "As a leader in wireless and edge networking, Aruba delivers fast, intelligent, and secure connectivity. We offer Aruba Wi-Fi 6 access points, secure SD-WAN solutions, network access control, and cloud-managed networking tools that transform the way teams connect and collaborate — especially in mobile-first and hybrid office environments.",
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
    logoPath: "/logos/mikrotik.svg",
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
    logoPath: "/logos/quantum.svg",
    category: "Enterprise Infrastructure"
  },
  {
    name: "Sophos",
    description: "Integrated cybersecurity platform with AI-powered protection for endpoints, networks, and cloud workloads.",
    slug: "sophos",
    logoPath: "/logos/sophos.svg",
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

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32"
        style={{
          backgroundImage: "url('/product1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(15, 23, 42, 0.3)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="relative container mx-auto px-4 pt-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              OUR <span className="text-[#4B8BF4]">PRODUCTS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              At Next Prodigy, we bring you industry-proven IT hardware and infrastructure backed by the world's most
              respected technology providers. Whether you're building a new network, securing your systems, or
              modernizing your data infrastructure, we have the right tools for the job.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: "url('/product2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(15, 23, 42, 0.3)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid gap-8">
            {allProducts.map((product) => (
              <div
                key={product.slug}
                className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-slate-700 hover:bg-slate-800/50 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    <div className="w-full md:w-48 h-24 bg-white/5 rounded-lg p-4 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={product.logoPath}
                        alt={product.name}
                        width={160}
                        height={80}
                        className="object-contain max-h-16"
                      />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div className="text-sm text-[#4B8BF4] mb-2">{product.category}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{product.name}</h3>
                      <p className="text-gray-300 mb-6">{product.description}</p>
                      <Button
                        asChild
                        className="bg-transparent border-2 border-[#4B8BF4] text-[#4B8BF4] hover:bg-[#4B8BF4] hover:text-white transition-all duration-300"
                      >
                        <Link href={`/products/${product.slug}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
