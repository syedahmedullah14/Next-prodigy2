import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import Image from "next/image"
import QuoteForm from "@/components/quote-form"

const productDetails = {
  hpe: {
    name: "HPE (Hewlett Packard Enterprise)",
    logoPath: "/logos/hpe.svg",
    description: [
      "HPE delivers robust IT infrastructure solutions designed to power modern workloads — from core data centers to the edge. Their product range includes industry-trusted servers like ProLiant, scalable storage systems such as Nimble and Primera, and software-defined infrastructure built for flexibility and control. At Next Prodigy, we help businesses deploy HPE hardware that offers seamless integration and performance.",
      "Whether you're moving to hybrid cloud, building a virtualized environment, or modernizing your compute strategy, HPE technologies are engineered to adapt and grow with your business. With centralized management, enhanced security, and automation tools, HPE helps reduce complexity while maximizing return on investment."
    ]
  },
  huawei: {
    name: "Huawei",
    logoPath: "/logos/huawei.svg",
    description: [
      "Huawei offers cost-effective, high-performance infrastructure that includes networking switches, rack servers, storage systems, and cloud platforms. Their innovative approach to digital transformation has helped enterprises around the world deploy reliable, scalable IT solutions tailored to their unique business goals.",
      "Next Prodigy integrates Huawei's solutions for customers looking to optimize their IT environments for speed, security, and value. Whether it's building smart networks or enabling cloud-native workflows, Huawei technologies support evolving enterprise needs with impressive efficiency and performance."
    ]
  },
  "dell-emc": {
    name: "Dell EMC",
    logoPath: "/logos/dell.svg",
    description: [
      "Dell EMC brings next-gen infrastructure to life with solutions that cover everything from high-performance servers and storage to hyperconverged systems. Their PowerEdge servers and PowerVault storage offer flexibility and dependability for workloads ranging from virtualization and databases to AI.",
      "At Next Prodigy, we deliver Dell EMC systems that enable digital transformation through simplified management and robust architecture. Their scalable platforms help businesses evolve IT strategies, reduce operational overhead, and support both on-prem and cloud-based deployments."
    ]
  },
  fortinet: {
    name: "Fortinet",
    logoPath: "/logos/fortinet.svg",
    description: [
      "Fortinet leads in integrated cybersecurity with solutions that cover network security, endpoint protection, secure access, and threat intelligence. Their flagship FortiGate firewalls provide multi-layered defense against modern attacks, while products like FortiClient and FortiAnalyzer extend visibility and control across the enterprise.",
      "We offer Fortinet systems that empower organizations to proactively detect and neutralize threats, secure remote workforces, and meet compliance standards. Their centralized management and automation tools allow businesses to maintain agility without compromising on security posture."
    ]
  },
  cisco: {
    name: "Cisco",
    logoPath: "/logos/cisco.svg",
    description: [
      "Cisco is the global standard for enterprise networking, offering switches, routers, and collaboration tools designed for seamless communication and resilient connectivity. From campus networks to large-scale data centers, Cisco solutions ensure maximum uptime and performance across all layers of the IT stack.",
      "Next Prodigy implements Cisco technology to build secure, high-speed infrastructures for our clients. Whether you're scaling network capacity, enabling voice-over-IP, or deploying hybrid work environments, Cisco provides the backbone for connected business operations."
    ]
  },
  "cisco-meraki": {
    name: "Cisco Meraki",
    logoPath: "/logos/cisco-meraki.png",
    description: [
      "Cisco Meraki delivers cloud-managed IT that simplifies network configuration, monitoring, and scaling. With Meraki's web-based dashboard, managing switches, firewalls, access points, and security cameras becomes intuitive and streamlined across distributed sites.",
      "At Next Prodigy, we implement Meraki solutions for clients seeking fast deployment, real-time insights, and reliable performance. Perfect for growing businesses, remote operations, and organizations with multiple locations — Meraki makes enterprise IT management effortless and efficient."
    ]
  },
  juniper: {
    name: "Juniper",
    logoPath: "/logos/juniper.png",
    description: [
      "Juniper Networks provides high-performance networking and security products for enterprises and service providers. Their switches, routers, and security platforms enable intelligent, automated, and secure infrastructure at scale.",
      "Next Prodigy partners with Juniper to deliver enterprise-grade solutions that optimize performance and reduce operational complexity. Juniper's software-defined networking and strong security framework are ideal for data-driven organizations looking to modernize their core infrastructure."
    ]
  },
  hitachi: {
    name: "Hitachi",
    logoPath: "/logos/hitachi.svg",
    description: [
      "Hitachi offers enterprise-class storage and data infrastructure optimized for speed, resilience, and scalability. Their high-performance systems support mission-critical applications and data-intensive environments, with platforms built for seamless integration and consistent uptime.",
      "We supply and integrate Hitachi solutions that help businesses simplify data management, improve backup reliability, and support digital workloads with confidence. Whether it's for high-availability infrastructure or long-term archiving, Hitachi delivers where it matters most."
    ]
  },
  lenovo: {
    name: "Lenovo",
    logoPath: "/logos/lenovo.png",
    description: [
      "Lenovo offers powerful computing infrastructure including ThinkSystem servers, edge computing devices, and enterprise workstations. Their products are known for reliability, security, and energy efficiency, making them a smart choice for data centers and IT modernization.",
      "We provide Lenovo solutions to businesses that require scalable performance with low TCO. Whether for virtualization, analytics, or high-density compute, Lenovo delivers the flexibility and control today's IT environments demand."
    ]
  },
  mikrotik: {
    name: "MikroTik",
    logoPath: "/logos/mikrotik.png",
    description: [
      "MikroTik specializes in cost-effective, feature-rich networking equipment suitable for ISPs, SMBs, and tech-forward enterprises. Known for its versatile RouterOS and configurable routers and access points, MikroTik solutions provide customizability, reliability, and performance for dynamic network environments.",
      "We help organizations implement MikroTik solutions to build efficient and scalable networks without compromising on features or performance. Whether you need routing, switching, or wireless solutions, MikroTik offers enterprise capabilities at competitive price points."
    ]
  },
  polycom: {
    name: "Polycom (HP | Poly)",
    logoPath: "/logos/polycom.svg",
    description: [
      "Polycom (now part of HP | Poly) offers industry-leading collaboration technology including video conferencing systems, conference phones, and unified communications hardware. Ideal for hybrid teams and global enterprises, Polycom products enable clear, secure, and productive real-time communication across platforms and devices.",
      "We provide Polycom solutions to help organizations create seamless collaboration experiences, whether in conference rooms, at desks, or in remote settings. Their professional-grade audio and video quality ensures every participant can communicate effectively."
    ]
  },
  quantum: {
    name: "Quantum",
    logoPath: "/logos/quantum.png",
    description: [
      "Quantum provides intelligent data storage, protection, and archiving solutions designed for high-volume and high-value data environments. From tape storage and backup appliances to object storage and video surveillance archiving, Quantum helps businesses manage their data lifecycle with performance, scalability, and compliance.",
      "We implement Quantum solutions for organizations that need reliable, long-term data management and protection. Their specialized storage solutions are particularly valuable for industries dealing with large media files, research data, or compliance-driven archiving requirements."
    ]
  },
  sophos: {
    name: "Sophos",
    logoPath: "/logos/sophos.png",
    description: [
      "Sophos delivers an integrated cybersecurity platform with endpoint protection, firewalls, email security, and cloud workload protection. With centralized management via Sophos Central, businesses can deploy AI-powered security across all environments to proactively prevent, detect, and respond to threats in real time.",
      "We help organizations implement Sophos security solutions to create a comprehensive defense strategy. Their synchronized security approach ensures all security components work together to provide enhanced protection and automated threat response."
    ]
  },
  ubiquiti: {
    name: "Ubiquiti",
    logoPath: "/logos/ubiquiti.svg",
    description: [
      "Ubiquiti offers high-performance wireless access points, switches, and routers designed for scalable network deployments. Known for its UniFi platform, Ubiquiti enables seamless network configuration, management, and monitoring — making it ideal for businesses seeking a balance between enterprise performance and cost-efficiency.",
      "We deploy Ubiquiti solutions for organizations that need reliable, manageable networking infrastructure without excessive complexity. Their unified management platform and extensive product ecosystem provide excellent value for businesses of all sizes."
    ]
  },
  "palo-alto": {
    name: "Palo Alto Networks",
    logoPath: "/logos/palo.png",
    description: [
      "Palo Alto Networks is a global leader in cybersecurity, delivering cutting-edge solutions that secure networks, clouds, and endpoints through AI-powered threat intelligence and automation. Their next-generation firewalls and advanced threat prevention tools help organizations build a resilient, zero-trust architecture across distributed environments.",
      "Whether you're protecting cloud-native apps, remote workforces, or critical enterprise data, Palo Alto's platform provides centralized visibility, real-time response, and policy-based control — making it a trusted choice for businesses focused on proactive, intelligent security."
    ]
  },
  vmware: {
    name: "VMware",
    logoPath: "/logos/vmware.svg",
    description: [
      "VMware is the industry pioneer in virtualization and cloud infrastructure, helping businesses modernize their IT environments with agility and cost-efficiency. From data center virtualization to cloud management platforms, VMware enables seamless operations across hybrid and multi-cloud ecosystems.",
      "With solutions like vSphere, NSX, and VMware Cloud, enterprises gain the ability to scale workloads, enhance application delivery, and improve operational efficiency while maintaining full control and security across environments."
    ]
  },
  netapp: {
    name: "NetApp",
    logoPath: "/logos/netapp.svg",
    description: [
      "NetApp provides intelligent data storage and management solutions that help organizations harness, protect, and optimize their data — whether on-prem, in the cloud, or across hybrid environments. With a focus on simplicity, scalability, and speed, NetApp delivers robust infrastructure built for demanding workloads.",
      "Their ONTAP software, AFF systems, and cloud integrations empower businesses to accelerate digital transformation while ensuring data availability, efficiency, and security — making NetApp a go-to solution for enterprises that treat data as a strategic asset."
    ]
  },
  f5: {
    name: "F5 Networks",
    logoPath: "/logos/f5.svg",
    description: [
      "F5 Networks delivers secure application delivery and performance optimization solutions that ensure apps are fast, available, and protected — whether hosted on-premises, in the cloud, or in hybrid environments. Their application delivery controllers (ADCs) and web application firewalls are industry standards.",
      "F5 helps organizations manage traffic intelligently, defend against DDoS and bot attacks, and scale digital services reliably. With a growing focus on automation and API security, F5 empowers businesses to deliver modern applications with confidence and control."
    ]
  },
  checkpoint: {
    name: "Check Point",
    logoPath: "/logos/checkpoint.svg",
    description: [
      "Check Point is a recognized leader in network, cloud, and endpoint security, providing unified threat management across complex IT environments. Their solutions defend enterprises against the most advanced cyber threats using real-time intelligence and AI-powered prevention.",
      "With product families like Quantum, Harmony, and CloudGuard, Check Point delivers scalable, integrated security for enterprise networks, remote users, and multi-cloud environments — making them a preferred choice for organizations requiring layered, adaptive protection."
    ]
  },
  aruba: {
    name: "Aruba Networks",
    logoPath: "/logos/aruba.svg",
    description: [
      "Aruba provides modern, intelligent networking solutions focused on wireless, secure access, and edge connectivity. Their Wi-Fi 6 access points, SD-WAN platforms, and cloud-managed network solutions deliver enterprise-level performance with AI-powered efficiency.",
      "With Aruba's solutions, businesses can simplify network operations, strengthen security, and enhance mobile user experiences. At Next Prodigy, we help customers deploy Aruba infrastructure that scales easily and adapts to changing business needs — especially in mobile-first and hybrid work environments"
    ]
  }
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productDetails[params.slug as keyof typeof productDetails]

  if (!product) {
    return notFound()
  }

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
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-24 bg-white/5 rounded-lg p-4 flex items-center justify-center mb-8">
              <Image
                src={product.logoPath}
                alt={product.name}
                width={160}
                height={80}
                className="object-contain max-h-16"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{product.name}</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {product.description.map((paragraph, index) => (
              <p key={index} className="text-xl text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: "url('/product-quote.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(15, 23, 42, 0.3)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Request a Quote</h2>
              <p className="text-lg md:text-xl text-gray-300">
                Interested in {product.name} solutions? Let's discuss your requirements and find the perfect fit for your business.
              </p>
            </div>
            
            <QuoteForm productName={product.name} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
