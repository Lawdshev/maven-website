"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import ProductCard from "./product-card"
import { products as allProducts } from "../data/products"

export default function ProductListing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [productsPerPage, setProductsPerPage] = useState("10")
  const [sortOrder, setSortOrder] = useState("most-popular")

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // Basic sorting (placeholder for 'most-popular')
    if (sortOrder === "most-popular") {
      // In a real app, this would involve a more complex sorting algorithm
      // For dummy data, we'll just keep the original order for now.
    }

    return filtered
  }, [searchTerm, sortOrder])

  const displayedProducts = useMemo(() => {
    const limit = Number.parseInt(productsPerPage)
    return filteredProducts.slice(0, limit)
  }, [filteredProducts, productsPerPage])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-[#0054aa] -500 focus:border-[#0054aa] -500 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <p className="text-gray-700 dark:text-gray-300">
            {displayedProducts.length} - {Math.min(Number.parseInt(productsPerPage), filteredProducts.length)} of{" "}
            {filteredProducts.length} products
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="products-per-page" className="text-gray-700 dark:text-gray-300 text-sm">
                Products per page:
              </label>
              <Select value={productsPerPage} onValueChange={setProductsPerPage}>
                <SelectTrigger id="products-per-page" className="w-[80px]">
                  <SelectValue placeholder="30" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-order" className="sr-only">
                Sort by:
              </label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger id="sort-order" className="w-[120px]">
                  <SelectValue placeholder="Most Popular" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="most-popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
