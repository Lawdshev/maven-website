import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Product } from "../data/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4 flex flex-col justify-between">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">{product.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{product.description}</p>
      </div>
      <div className="flex flex-col space-y-4">
        {product.freeTrial && (
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            Free Trial
          </span>
        )}
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium"
        >
          <span className="sr-only">Learn more about {product.title}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
