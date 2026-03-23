# E-Commerce Store - JavaScript Frameworks CA

A fully functional online shop built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project demonstrates modern web development practices including API integration, state management, responsive design, and comprehensive testing.

## 🚀 Features

- **Product Catalog**: Browse products with images, prices, discounts, and ratings
- **Product Details**: View detailed product information, reviews, and tags
- **Shopping Cart**: Add/remove items, adjust quantities, and view total costs
- **Search & Sort**: Dynamic search functionality with multiple sorting options
- **Checkout Flow**: Complete checkout process with success confirmation
- **Contact Form**: Validated contact form with TypeScript-based validation
- **Toast Notifications**: Real-time feedback for user interactions
- **Responsive Design**: Fully responsive layout for all device sizes
- **TypeScript**: Strict type checking throughout the application
- **Testing**: Comprehensive tests using React Testing Library

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Toast Notifications**: React Hot Toast
- **API**: Noroff Online Shop API
- **Testing**: React Testing Library & Jest

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd javascript-frameworks-ca
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout success page
│   ├── contact/           # Contact form page
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
├── lib/                   # Utility functions and helpers
│   ├── api.ts            # API integration
│   ├── store.ts          # State management
│   └── types.ts          # TypeScript interfaces
└── public/               # Static assets
```

## 🔗 API Documentation

This project uses the Noroff Online Shop API:
- Documentation: https://docs.noroff.dev/docs/v2/basic/online-shop
- Base URL: `https://v2.api.noroff.dev/online-shop`

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📦 Build

Create a production build:
```bash
npm run build
```

## 🚀 Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform supporting Next.js

## 🤖 AI Usage

GitHub Copilot was used as an assistant during the development of this project, including generating example approaches, helping structure parts of the implementation, and supporting layout and UI consistency decisions.

## 👨‍💻 Author

Daniel Strandheim

## 📄 License

This project is part of the Noroff JavaScript Frameworks Course Assignment.
