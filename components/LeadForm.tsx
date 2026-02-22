'use client'

import { useState, useRef, useEffect, forwardRef } from 'react'
import { supabase } from '@/lib/supabaseClient'

const LeadForm = forwardRef<HTMLElement>(function LeadForm(_, ref) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please fill in all fields')
      setSubmitStatus('error')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ name: name.trim(), email: email.trim() }])

      if (error) {
        if (error.code === '23505') {
          setErrorMessage('This email is already on the waitlist!')
        } else {
          setErrorMessage('Something went wrong. Please try again.')
        }
        setSubmitStatus('error')
      } else {
        setSubmitStatus('success')
        setName('')
        setEmail('')
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      ref={(node) => {
        // Handle both refs
        sectionRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      }}
      id="waitlist" 
      className="py-24 sm:py-32 bg-td-grey-900"
    >
      <div className="section-padding max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-td-grey-500 mb-4 block">
              Join The Waitlist
            </span>
            <h2 className="heading-section mb-4">
              Be The First To Know
            </h2>
            <p className="text-body">
              Get exclusive early access to Drop 001 and future releases. 
              No spam, just drops.
            </p>
          </div>

          {/* Form */}
          <form 
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-td-black border border-td-grey-800 text-td-white placeholder-td-grey-500 focus:outline-none focus:border-td-white transition-colors duration-300"
                disabled={isSubmitting}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-5 py-4 bg-td-black border border-td-grey-800 text-td-white placeholder-td-grey-500 focus:outline-none focus:border-td-white transition-colors duration-300"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg 
                    className="animate-spin -ml-1 mr-3 h-5 w-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Joining...
                </>
              ) : (
                'Join Waitlist'
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-900/30 border border-green-800 text-green-400 text-center">
                <p className="font-medium">You&apos;re on the list!</p>
                <p className="text-sm mt-1">We&apos;ll notify you when Drop 001 goes live.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-900/30 border border-red-800 text-red-400 text-center">
                <p>{errorMessage}</p>
              </div>
            )}
          </form>

          {/* Privacy Note */}
          <p 
            className={`text-center text-xs text-td-grey-600 mt-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            By joining, you agree to receive updates about ThreadDrop. 
            Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
})

export default LeadForm