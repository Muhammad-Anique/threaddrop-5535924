# ThreadDrop

A minimalist, high-conversion landing page for a streetwear brand. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

![ThreadDrop Preview](https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=600&fit=crop)

## Features

- **Premium Landing Experience**: Single-page application with smooth scroll animations and minimalist streetwear aesthetic
- **Waitlist System**: Lead capture form integrated with Supabase for collecting interested customers
- **WhatsApp Integration**: Direct messaging CTA for immediate customer communication
- **Product Showcase**: Grid layout displaying T-shirt collection with hover interactions
- **Responsive Design**: Mobile-first approach optimized for Gen Z audience
- **Dark Mode Aesthetic**: Premium black/white/grey color palette reflecting streetwear culture

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Deployment**: [Vercel](https://vercel.com/)
- **Font**: Inter (Google Fonts)

## Project Structure

```
/
├── app/
│   ├── layout.tsx        # Root layout with metadata and fonts
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx          # Hero section with CTA
│   ├── ProductShowcase.tsx  # Product grid display
│   ├── LeadForm.tsx      # Waitlist signup form
│   └── WhatsAppCTA.tsx   # Floating WhatsApp button
├── lib/
│   └── supabaseClient.ts # Supabase configuration
├── public/               # Static assets
├── supabase/
│   └── migrations/       # Database schema migrations
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Muhammad-Anique/threaddrop-5535924.git
cd threaddrop-5535924
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Supabase credentials to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## Database Schema

### Leads Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `name` | Text | Customer name |
| `email` | Text | Customer email (unique) |
| `created_at` | Timestamp | Record creation time |
| `updated_at` | Timestamp | Record update time |

### Row Level Security (RLS)

- **INSERT**: Public (anyone can join the waitlist)
- **SELECT**: Authenticated only (admin access)

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy!

The site will automatically deploy on every push to the main branch.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  'td-black': '#0a0a0a',
  'td-white': '#ffffff',
  'td-grey': { ... },
  'td-offwhite': '#fafafa',
  'td-washed': '#9ca3af',
}
```

### WhatsApp Number

Update the WhatsApp link in `components/WhatsAppCTA.tsx`:

```typescript
window.open('https://wa.me/YOUR_NUMBER', '_blank')
```

### Products

Modify the products array in `components/ProductShowcase.tsx` to update the displayed items.

## License

MIT License - feel free to use this template for your own projects.

## Contact

For questions or support, reach out via [WhatsApp](https://wa.me/923204589040).

---

Built with passion for the culture.