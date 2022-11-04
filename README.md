# E-Commerce Project using MERN
Project Live Link - [SUPERSHOP](https://supershop-ecommerce-website.herokuapp.com/)

## Features:
1. User Authentication (Signup, Login and Logout)
2. Home page with Overlay navbar and Featured Products
3. Product Listing Page
4. Sort and filter products
   - Filter using Minimum and Maximum Price Range
   - Filter by Categories
   - Filter by product rating
   - Clear all filters
5. Cart Management 
   - Add to cart 
   - Change items quantity in cart 
   - Remove from cart
7. Shipping Info
8. Order Summary of the ordered items
10. Stripe payment Integration
11. Orders page
12. Search bar to search product using product name
13. Pagination 

## Usage

- Clone the repository
```
git clone https://github.com/gk12/crud--operation.git
```
- Install required modules
  
```bash
npm install
```

- Create a new directory `config` in `backend` directory
- Create a new file `config.env` in `config` directory
- Add following VARIABLES in `config.env` or in production Environment Variables
  
```env
PORT = 4000

DB_URI = 'YOUR MONGO-DB URI'
DB_NAME = 'supershop'

NODE_ENV = 'dev'

JWT_SECRET = 'YOUR JWT SECRET'
JWT_EXPIRES_IN = 5d

COOKIE_EXPIRES_IN = 5

SMTP_FROM = 'Test <noreply@yourcompany.com>'

SENDGRID_API_KEY = 'YOUR SENDGRID API KEY'

# Cloudinary
CLOUDINARY_CLOUD_NAME = 'YOUR CLOUDINARY CLOUD NAME'
CLOUDINARY_API_KEY = 'YOUR CLOUDINARY API KEY'
CLOUDINARY_API_SECRET = 'YOUR CLOUDINARY API SECRET'

# URL
FRONTEND_URL = 'http://localhost:3000';

# STRIPE CONFIG
STRIPE_API_KEY = 'YOUR STRIPE API KEY'
STRIPE_SECRET_KEY = 'YOUR STRIPE SECRET KEY'
```

- Run the server

```bash
npm run dev
cd frontend
npm start
```
