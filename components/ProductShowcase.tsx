'use client'

import { useEffect, useRef, useState } from 'react'

interface Product {
  id: number
  name: string
  price: string
  image: string
  tag?: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Essential Black Tee',
    price: 'PKR 2,499',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Oversized White',
    price: 'PKR 2,799',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
  },
  {
    id: 3,
    name: 'Washed Grey Drop',
    price: 'PKR 2,999',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop',
    tag: 'New',
  },
  {
    id: 4,
    name: 'Off-White Classic',
    price: 'PKR 2,499',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop',
  },
]

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-24 sm:py-32 bg-td-black"
    >
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-td-grey-500 mb-4 block">
            The Collection
          </span>
          <h2 className="heading-section mb-4">
            Drop 001
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Premium essentials designed for everyday wear. Each piece is crafted from 
            100% organic cotton with a focus on fit and feel.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-minimal overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-td-grey-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag */}
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-td-white text-td-black text-xs font-medium tracking-wider uppercase">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-td-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 border border-td-white text-td-white text-sm font-medium tracking-wider uppercase">
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-medium text-td-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-td-grey-500">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Size Guide Note */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm text-td-grey-500">
            All items are unisex and available in sizes S, M, L, XL
          </p>
        </div>
      </div>
    </section>
  )
}