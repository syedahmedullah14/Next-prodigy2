import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface Product {
  name: string
  description: string
  slug: string
  logoPath?: string
  imageUrl?: string
  hasCustomImage?: boolean
}

interface ProductShowcaseProps {
  products: Product[]
  title: string
  backgroundImage?: string
}

export default function ProductShowcase({ products, title, backgroundImage }: ProductShowcaseProps) {
  return (
    <section
      className="relative py-20"
      style={
        backgroundImage
          ? {
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <div className="absolute inset-0 bg-slate-900/80"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-400 transition-colors overflow-hidden"
            >
              {/* Product Image Section */}
              {product.hasCustomImage && product.imageUrl && (
                <div className="h-48 relative">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={`${product.name} technology`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/40"></div>
                </div>
              )}

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {product.logoPath ? (
                    <div className="w-16 h-16 bg-white rounded-lg p-2 mr-4 flex items-center justify-center">
                      <Image
                        src={product.logoPath || "/placeholder.svg"}
                        alt={`${product.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-slate-700 rounded-lg p-2 mr-4 flex items-center justify-center">
                      <div className="w-12 h-12 bg-slate-600 rounded"></div>
                    </div>
                  )}
                  <h3 className="text-blue-400 text-2xl font-bold">{product.name}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href={`/products/${product.slug}`}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
