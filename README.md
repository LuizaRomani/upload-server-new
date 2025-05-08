# Upload Server

A robust backend service for handling image uploads with Cloudflare R2 storage integration.

## Features

- Image upload with size and format validation
- File storage using Cloudflare R2 (S3-compatible)
- PostgreSQL database integration with Drizzle ORM
- RESTful API with Swagger documentation
- Type-safe API with Zod validation
- Error handling with Either pattern
- Docker support

## Prerequisites

- Node.js 18+
- PostgreSQL
- Cloudflare R2 account and credentials

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3333
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_Access_Key_ID=your_access_key
CLOUDFLARE_Secret_Access_Key=your_secret_key
CLOUDFLARE_BUCKET=your_bucket_name
CLOUDFLARE_URL=your_r2_url
```

## API Documentation

Once the server is running, you can access the Swagger documentation at:
```
http://localhost:3333/docs
```

### Available Endpoints

- `POST /uploads` - Upload an image
  - Supports: JPG, JPEG, PNG, WebP
  - Max file size: 2MB
  - Content-Type: multipart/form-data

- `GET /uploads` - List uploaded files
  - Query parameters:
    - searchQuery (optional)
    - sortBy (optional, default: createdAt)
    - sortDirection (optional, default: desc)
    - page (optional, default: 1)
    - pageSize (optional, default: 20)
