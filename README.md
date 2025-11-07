# GiftHub - E-Commerce Return Gifts Platform

A modern, scalable e-commerce platform for selling return gifts built with Next.js 14, TypeScript, PostgreSQL, and Prisma.

## Features

### User Features
- Browse products with advanced filtering (price range, occasion, category)
- Featured video section showcasing gift ideas
- Special offers and promotions
- User authentication (login/register)
- Shopping cart functionality
- Responsive design matching your mockup

### Admin Features
- Complete admin dashboard with analytics
- Product management (add, edit, delete)
- Category management
- User management
- Order tracking
- Video and offer management
- Role-based access control

### Technical Features
- **Scalable Architecture**: Built to handle lakhs (hundreds of thousands) of users
- **Database**: PostgreSQL with Prisma ORM for type-safe queries
- **Authentication**: NextAuth.js with secure password hashing
- **API**: RESTful API routes with proper error handling
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Tailwind CSS for responsive design

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Video Player**: React Player

## Project Structure

```
giftsphere/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── products/     # Product endpoints
│   │   ├── cart/         # Cart endpoints
│   │   └── admin/        # Admin endpoints
│   ├── admin/            # Admin panel pages
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── Header.tsx
│   ├── FilterSidebar.tsx
│   ├── FeaturedVideo.tsx
│   ├── SpecialOffers.tsx
│   └── ProductCard.tsx
├── lib/                  # Utility libraries
│   ├── prisma.ts         # Prisma client
│   └── auth.ts           # Auth configuration
├── prisma/
│   └── schema.prisma     # Database schema
└── types/                # TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database running
- npm or yarn package manager

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd /home/almamargaret/giftsphere
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your values:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/giftsphere?schema=public"
   NEXTAUTH_SECRET="run: openssl rand -base64 32"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev --name init

   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Create admin user**
   Run this script to create an admin user:
   ```bash
   npx ts-node scripts/create-admin.ts
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

The application uses the following main models:

- **User**: User accounts with role-based access (USER, ADMIN)
- **Product**: Products with pricing, images, categories
- **Category**: Product categories
- **CartItem**: Shopping cart items
- **Order**: Customer orders
- **OrderItem**: Individual order items
- **Video**: Featured videos
- **Offer**: Special offers and promotions

## API Endpoints

### Public Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/[...nextauth]` - Authentication
- `GET /api/products` - Get products (with filters)
- `GET /api/products/[id]` - Get single product

### Protected Endpoints (Require Login)
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add to cart
- `DELETE /api/cart` - Remove from cart

### Admin Endpoints (Require ADMIN role)
- `GET/POST/PUT/DELETE /api/admin/products` - Manage products
- `GET/POST/DELETE /api/admin/categories` - Manage categories
- `GET/DELETE /api/admin/users` - Manage users
- `GET/POST/DELETE /api/admin/videos` - Manage videos
- `GET/POST/DELETE /api/admin/offers` - Manage offers

## Admin Panel

Access the admin panel at `/admin` after logging in with an admin account.

**Default Admin Credentials:**
- Email: admin@giftsphere.com
- Password: admin123

The admin panel includes:
- Dashboard with analytics
- Product management
- Category management
- User management
- Order tracking
- Video management
- Offer management

## Scalability Features

1. **Database Indexing**: Properly indexed columns for fast queries
2. **Connection Pooling**: Prisma handles connection pooling
3. **Caching**: Ready for Redis integration
4. **Image Optimization**: Next.js Image component
5. **API Routes**: Serverless functions that scale automatically
6. **Type Safety**: Prevents runtime errors

## Production Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Database Hosting

Use services like:
- Supabase (PostgreSQL)
- Neon (Serverless PostgreSQL)
- Railway
- AWS RDS

## Next Steps

1. Add payment gateway integration (Razorpay/Stripe)
2. Implement order management system
3. Add product reviews and ratings
4. Implement wishlist functionality
5. Add email notifications
6. Set up image upload (Cloudinary/AWS S3)
7. Add analytics (Google Analytics)
8. Implement search functionality
9. Add bulk order discount system
10. Create mobile app with React Native

## Support

For issues or questions, please contact support@giftsphere.com

## License

This project is proprietary and confidential.
