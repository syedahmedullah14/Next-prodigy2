import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  name: string
  description: string
  slug: string
  logoUrl: string
}

export default function ProductCard({ name, description, slug, logoUrl }: ProductCardProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-blue-400 transition-colors">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-white rounded-lg p-2 mr-4 flex items-center justify-center">
          <Image
            src={logoUrl || "/placeholder.svg"}
            alt={`${name} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-blue-400 text-2xl font-bold">{name}</h3>
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
        <Link href={`/products/${slug}`}>
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </div>
  )
}
