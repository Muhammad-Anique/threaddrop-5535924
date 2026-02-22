ThreadDrop — Task List (Next.js, TypeScript, Tailwind, Supabase) | Repo: https://github.com/Muhammad-Anique/threaddrop-5535924 | Status: Complete

Tasks:
1. [x] Initialize Next.js project — deps: next, react, react-dom, typescript, tailwindcss, @supabase/supabase-js; files: package.json, next.config.mjs, tsconfig.json, .gitignore | Commit: `chore: initialize Next.js project`
2. [x] Configure Tailwind CSS — files: tailwind.config.ts, postcss.config.mjs; theme: minimalist streetwear (Black, White, Washed Grey, Off-White) | Commit: `chore: add Tailwind CSS config`
3. [x] Set up Supabase Client — file: lib/supabaseClient.ts; env vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY; create .env.example | Commit: `chore: add supabase client`
4. [x] Create Global Layout and Styles — files: app/layout.tsx (metadata, fonts), app/globals.css (Tailwind + streetwear styles) | Commit: `feat: add root layout and global styles`
5. [x] Implement WhatsApp CTA Component — file: components/WhatsAppCTA.tsx; link: https://wa.me/923204589040 (floating button) | Commit: `feat: add WhatsApp CTA component`
6. [x] Build Hero Component — file: components/Hero.tsx; features: product intro, "drop culture" messaging, "Notify Me" scroll trigger to lead form | Commit: `feat: add hero component`
7. [x] Build Product Showcase Component — file: components/ProductShowcase.tsx; grid layout, T-shirt designs, placeholder streetwear imagery, minimalist cards | Commit: `feat: add product showcase component`
8. [x] Build Lead Capture Form Component — file: components/LeadForm.tsx; fields: Name, Email; submission to Supabase `leads` table | Commit: `feat: add lead capture form`
9. [x] Assemble Main Landing Page — update app/page.tsx; compose: Hero, ProductShowcase, LeadForm, WhatsAppCTA | Commit: `feat: assemble landing page`
10. [x] Final CSS Refinements and Interactivity — update app/globals.css + components; premium streetwear: typography, spacing, hover states | Commit: `style: final UI refinements`
11. [x] Write README — file: README.md; content: ThreadDrop, features (waitlist, WhatsApp), tech stack, project structure, env vars | Commit: `docs: add comprehensive README`