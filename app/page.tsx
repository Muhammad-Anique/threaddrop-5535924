'use client'

import { useRef } from 'react'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import LeadForm from '@/components/LeadForm'
import WhatsAppCTA from '@/components/WhatsAppCTA'

export default function Home() {
  const leadFormRef = useRef<HTMLElement>(null)

  const scrollToLeadForm = () => {
    leadFormRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      <Hero onNotifyClick={scrollToLeadForm} />
      <ProductShowcase />
      <LeadForm ref={leadFormRef} />
      
      {/* Footer */}
      <footer className="py-12 bg-td-black border-t border-td-grey-900">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-xl font-bold tracking-tight">
              ThreadDrop
            </div>
            
            {/* Links */}
            <div className="flex items-center gap-8 text-sm text-td-grey-500">
              <a 
                href="#products" 
                className="hover:text-td-white transition-colors"
              >
                Collection
              </a>
              <a 
                href="#waitlist" 
                className="hover:text-td-white transition-colors"
              >
                Waitlist
              </a>
              <a 
                href="https://wa.me/923204589040"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-td-white transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-td-grey-600">
              © {new Date().getFullYear()} ThreadDrop
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppCTA />
    </main>
  )
}