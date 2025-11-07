# GiftHub Setup Guide

This guide will help you set up and run the GiftHub e-commerce platform.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up PostgreSQL Database

You have several options:

#### Option A: Local PostgreSQL
Install PostgreSQL locally and create a database:
```bash
createdb giftsphere
```

#### Option B: Docker
Run PostgreSQL in Docker:
```bash
docker run --name giftsphere-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=giftsphere \
  -p 5432:5432 \
  -d postgres
```

#### Option C: Cloud Database (Recommended for Production)
Use a cloud PostgreSQL service:
- **Supabase** (Free tier available): https://supabase.com
- **Neon** (Serverless PostgreSQL): https://neon.tech
- **Railway**: https://railway.app

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` file:

```env
# Database URL
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/giftsphere?schema=public"

# NextAuth Secret (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET="your-generated-secret-here"

# NextAuth URL
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Set Up Database Schema

```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma migrate dev --name init
```

### 5. Create Admin User

```bash
npx ts-node scripts/create-admin.ts
```

This creates an admin account:
- Email: `admin@giftsphere.com`
- Password: `admin123`

### 6. Seed Sample Data (Optional)

```bash
npx ts-node scripts/seed.ts
```

This adds:
- 4 product categories
- 5 sample products
- 1 featured video
- 3 special offers

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Accessing the Application

### User Side
- **Home**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register

### Admin Panel
- **Admin Dashboard**: http://localhost:3000/admin
- **Login with**:
  - Email: `admin@giftsphere.com`
  - Password: `admin123`

### Admin Features
- Dashboard with analytics
- Product management (add/edit/delete)
- Category management
- User management
- Order tracking

## Database Management

### View Database in Prisma Studio
```bash
npx prisma studio
```
Opens at http://localhost:5555

### Reset Database
```bash
npx prisma migrate reset
```

### Update Database Schema
After editing `prisma/schema.prisma`:
```bash
npx prisma migrate dev --name your_migration_name
```

## Troubleshooting

### Database Connection Issues

1. **Check PostgreSQL is running**:
   ```bash
   pg_isready
   ```

2. **Verify DATABASE_URL** in `.env`:
   - Format: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public`
   - Example: `postgresql://postgres:postgres@localhost:5432/giftsphere?schema=public`

3. **Test connection**:
   ```bash
   npx prisma db pull
   ```

### Port Already in Use

If port 3000 is in use:
```bash
PORT=3001 npm run dev
```

### Prisma Client Issues

If you get Prisma client errors:
```bash
npx prisma generate
```

### NextAuth Secret Not Set

Generate a secret:
```bash
openssl rand -base64 32
```
Add it to `.env` as `NEXTAUTH_SECRET`

## Production Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Import your GitHub repository
   - Add environment variables:
     - `DATABASE_URL`
     - `NEXTAUTH_SECRET`
     - `NEXTAUTH_URL` (your production URL)
   - Deploy

3. **Set up Production Database**:
   - Use Supabase, Neon, or Railway
   - Copy the connection string to Vercel's `DATABASE_URL`
   - Run migrations:
     ```bash
     npx prisma migrate deploy
     ```

### Environment Variables for Production

```env
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
```

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Scaling Considerations

### Database Optimization
1. **Connection Pooling**: Already configured with Prisma
2. **Indexes**: Database schema includes indexes on frequently queried fields
3. **Query Optimization**: Use Prisma's select and include carefully

### Caching (Future Enhancement)
Add Redis for caching:
```bash
npm install redis
```

### Image Hosting
Integrate with:
- Cloudinary
- AWS S3
- Vercel Blob Storage

### Performance Monitoring
Add monitoring tools:
- Vercel Analytics
- Sentry for error tracking
- New Relic for APM

## Next Development Steps

1. **Payment Integration**:
   - Razorpay (India)
   - Stripe (Global)

2. **Email Notifications**:
   - SendGrid
   - Resend
   - AWS SES

3. **Image Upload**:
   - Cloudinary integration
   - AWS S3

4. **Advanced Search**:
   - Algolia
   - Elasticsearch

5. **Order Management**:
   - Complete order flow
   - Order tracking
   - Invoice generation

## Support

For help or questions:
- Check README.md for detailed documentation
- Review the code comments
- Check Prisma docs: https://www.prisma.io/docs
- Check Next.js docs: https://nextjs.org/docs

## Security Notes

1. **Change default admin password** after first login
2. **Use strong NEXTAUTH_SECRET** in production
3. **Enable SSL** for database connections in production
4. **Never commit** `.env` file to version control
5. **Use environment variables** for all secrets

## License

Proprietary and confidential.
