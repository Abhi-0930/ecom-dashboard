# E-commerce Dashboard

A modern, professional e-commerce analytics dashboard built with Next.js, featuring comprehensive sales, inventory, and customer relationship management tools.

## 🚀 Quick Start

1. **Add your Gemini API key to `.env`**
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

2. **Install dependencies**
   ```bash
   npm i
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:9002
   ```

## 📊 Features

### Sales Analytics (`/sales`)
- **Revenue & Orders Tracking** - Monthly performance trends
- **Product Category Analysis** - Revenue distribution by category
- **Top Performing Products** - Best sellers with revenue data
- **Key Metrics Dashboard** - Total revenue, orders, customers, AOV

### Inventory Management (`/inventory`)
- **Stock Level Monitoring** - Real-time inventory tracking
- **Low Stock Alerts** - Critical items requiring restocking
- **Turnover Rate Analysis** - Product movement insights
- **Category Distribution** - Stock levels across product categories

### Customer Relationship Management (`/customers`)
- **Customer Growth Tracking** - New vs total customer trends
- **Customer Segmentation** - VIP, Regular, New, At Risk, Inactive
- **Satisfaction Monitoring** - Rating trends and review analysis
- **Top Customers** - Highest value customers with spending data
- **Support Metrics** - Response time, resolution rates, satisfaction scores

### AI-Powered Features
- **Trend Forecaster** - AI predictions for trending products
- **Smart Analytics** - Automated insights and recommendations

## 🎨 Design Features

- **Professional UI** - Clean, modern interface with smooth animations
- **Consistent Color Palette** - Cool blue (#2E9AFE) and green (#4CAF50) theme
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Interactive Charts** - Line, Bar, Area, and Pie charts with tooltips
- **Real-time Data** - Live updates and trend indicators

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Chart components
- **Genkit** - AI integration
- **Firebase** - Backend services

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── sales/             # Sales analytics page
│   ├── inventory/         # Inventory management page
│   └── customers/         # CRM page
├── components/
│   ├── dashboard/         # Analytics components
│   ├── layout/           # App layout components
│   └── ui/               # Reusable UI components
└── ai/                   # AI integration files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run genkit:dev` - Start AI development server

## 📝 Getting Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and paste it in your `.env` file

## 🎯 Key Pages

- **Dashboard**: `/` - Overview of all metrics
- **Sales**: `/sales` - Comprehensive sales analytics
- **Inventory**: `/inventory` - Stock management and alerts
- **Customers**: `/customers` - CRM and customer insights
- **Trends**: `/trends` - AI-powered trend forecasting

---

**Ready to explore your e-commerce data?** Just add your API key and run `npm run dev`! 🚀
