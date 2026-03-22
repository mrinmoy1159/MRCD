# MR Catalog Designer

A full-stack luxury portfolio website built with Next.js App Router, Tailwind CSS, Framer Motion, MongoDB with Mongoose, Cloudinary, and axios.

## Features

- Dark luxury black and gold interface with glassmorphism styling
- Responsive mobile-first landing page
- Framer Motion powered hero, cards, and section reveals
- Sticky navigation with portfolio, services, and contact sections
- MongoDB-backed portfolio API using Mongoose
- Cloudinary image upload API
- Admin panel at `/admin` for uploading and saving portfolio items
- Optimized remote images with `next/image`

## Folder Structure

```text
app/
  api/
    portfolio/route.ts
    upload/route.ts
  admin/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  admin-form.tsx
  admin-panel.tsx
  contact-section.tsx
  footer.tsx
  hero.tsx
  navbar.tsx
  portfolio-grid.tsx
  services-section.tsx
  ui/section-heading.tsx
lib/
  cloudinary.ts
  constants.ts
  data.ts
  mongodb.ts
models/
  Portfolio.ts
types/
  portfolio.ts
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example` and add your values:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_FOLDER=mr-catalog-designer
```

3. Start the development server:

```bash
npm run dev
```

4. Open:

- `http://localhost:3000` for the main website
- `http://localhost:3000/admin` for the admin panel

## API Endpoints

- `GET /api/portfolio` returns all portfolio items
- `POST /api/portfolio` creates a new portfolio item
- `POST /api/upload` uploads an image to Cloudinary and returns the image URL

## Notes

- When the database is empty or unavailable, the homepage falls back to sample showcase entries.
- Portfolio uploads are stored on Cloudinary and the resulting image URL is saved in MongoDB.


