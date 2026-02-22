'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  onNotifyClick: () => void
}

export default function Hero({ onNotifyClick }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToForm = () => {
    onNotifyClick()
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-td-grey-900 via-td-black to-td-black" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 bg-td-grey-900 border border-td-grey-800 rounded-full mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-td-grey-400">
            Drop Coming Soon
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className={`heading-display mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="block">ThreadDrop</span>
          <span className="block text-td-grey-500 mt-2">For The Culture</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-body max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Premium streetwear crafted for those who set trends, not follow them. 
          Join the waitlist for exclusive access to our first drop.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="btn-primary w-full sm:w-auto"
          >
            Notify Me
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>
          <a 
            href="#products" 
            className="btn-outline w-full sm:w-auto"
          >
            View Collection
          </a>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-td-grey-900 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-td-white">100%</div>
            <div className="text-xs sm:text-sm text-td-grey-500 uppercase tracking-wider mt-1">Premium Cotton</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-td-white">Limited</div>
            <div className="text-xs sm:text-sm text-td-grey-500 uppercase tracking-wider mt-1">Edition Drops</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-td-white">Pakistan</div>
            <div className="text-xs sm:text-sm text-td-grey-500 uppercase tracking-wider mt-1">Made Local</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-6 h-10 border-2 border-td-grey-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-td-grey-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}