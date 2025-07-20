A real-time dashboard for monitoring stock prices and cryptocurrency exchange rates, built with Next.js, React, TypeScript, and Tailwind CSS.

stock-crypto-dashboard/
├── app/                   # Next.js App Router
│   ├── components/        # Shared UI components (Navbar, Footer, etc.)
│   ├── stocks/            # Stock dashboard pages & logic
│   ├── crypto/            # Crypto dashboard pages & logic (NOT IMPLEMENTED CURRENTLY)
│   ├── layout.tsx         # Application layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── styles/                # Global styles (Tailwind CSS)
├── .env.local             # Environment variables (not committed)
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies & scripts
└── README.md 

## Features

- **Live Stock Prices**: Fetches stock data from Polygon.io (daily aggregates).
- **Real-Time Crypto Rates**: Retrieves cryptocurrency exchange rates from CoinAPI.
- **Interactive Charts**: Visualize data with Chart.js.
- **Responsive UI**: Styled with Tailwind CSS.
- **Server-Side Rendering**: Powered by Next.js App Router.

## Tech Stack

- **Framework**: Next.js
- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js
- **APIs**: Polygon.io, CoinAPI

## Prerequisites

- Node.js v16+ installed
- npm, yarn, or pnpm

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stock-crypto-dashboard.git
   cd stock-crypto-dashboard

2. 
npm install
# or
yarn install
# or
pnpm install

3. Create a .env.local file in the project root and add: 
STOCK_KEY=your_polygon_api_key_here

4. Start The Server: 
(npm run dev
# or
yarn dev)