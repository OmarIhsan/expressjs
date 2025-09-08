# expressjs

A beginner-friendly Express.js server connected to a PostgreSQL database.

## Features
- Basic CRUD for products
- Products table: id, name, description, price, stock
- Data persists in PostgreSQL
- Code style: entry-level, with grammar mistakes for learning purposes

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your PostgreSQL database and update `.env` with your credentials.
3. Start the server:
   ```bash
   node express.js
   ```

## API Endpoints
- `GET /products` - Get all products
- `POST /products` - Add a product (body: `{ name, description, price, stock }`)
- `GET /products/:id` - Get product by id
- `DELETE /products/:id` - Delete product by id

## Notes
- This project is intentionally written with beginner mistakes for educational purposes.
- Contributions welcome!
