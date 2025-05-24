import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: "url('/about-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-6">
              <div className="text-4xl md:text-[72px] font-bold text-[#4B8BF4] leading-tight">WE ARE</div>
              <Image 
                src="/logo.png" 
                alt="Next Prodigy" 
                width={350} 
                height={150} 
                className="h-[72px] md:h-[132px] w-auto" 
              />
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Next Prodigy is an IT trading and technology enablement company, helping organizations build secure and
              scalable infrastructure using enterprise-grade solutions. We partner with global tech leaders to supply
              trusted, future-proof hardware and network systems that power modern business operations.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        className="relative py-16 md:py-20"
        style={{
          backgroundImage: "url('/about-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-[#4B8BF4]">WHAT WE DO</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
              From high-performance servers and secure networking to intelligent storage and cybersecurity, we deliver
              products and guidance that help businesses thrive in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section
        className="relative py-16 md:py-20"
        style={{
          backgroundImage: "url('/about-3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(15, 23, 42, 0.3)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">OUR APPROACH</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 md:mb-16">
              Whether you're upgrading legacy systems or building new infrastructure, Next Prodigy delivers confidence,
              clarity, and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-slate-700 h-full hover:bg-slate-800/50 hover:border-blue-400/50 transition-all duration-300">
                <h3 className="text-[#4B8BF4] text-xl md:text-2xl font-bold mb-4">
                  Strategic Sourcing From Top-Tier Manufacturers
                </h3>
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-slate-700 h-full hover:bg-slate-800/50 hover:border-blue-400/50 transition-all duration-300">
                <h3 className="text-[#4B8BF4] text-xl md:text-2xl font-bold mb-4">
                  Personalized Recommendations To Match Business Needs
                </h3>
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-slate-700 h-full hover:bg-slate-800/50 hover:border-blue-400/50 transition-all duration-300">
                <h3 className="text-[#4B8BF4] text-xl md:text-2xl font-bold mb-4">
                  Fast, Reliable Delivery And Product Support
                </h3>
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-slate-700 h-full hover:bg-slate-800/50 hover:border-blue-400/50 transition-all duration-300">
                <h3 className="text-[#4B8BF4] text-xl md:text-2xl font-bold mb-4">
                  Scalable Systems For Long-Term Growth
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  )
}
