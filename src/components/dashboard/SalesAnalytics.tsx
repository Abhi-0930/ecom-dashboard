"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users } from "lucide-react";

// Sales Performance Data
const salesData = [
  { month: "Jan", revenue: 18600, orders: 124, customers: 98 },
  { month: "Feb", revenue: 30500, orders: 203, customers: 156 },
  { month: "Mar", revenue: 23700, orders: 158, customers: 134 },
  { month: "Apr", revenue: 48300, orders: 322, customers: 267 },
  { month: "May", revenue: 20900, orders: 139, customers: 112 },
  { month: "Jun", revenue: 41200, orders: 275, customers: 198 },
  { month: "Jul", revenue: 35800, orders: 239, customers: 187 },
  { month: "Aug", revenue: 52000, orders: 347, customers: 289 },
  { month: "Sep", revenue: 39000, orders: 260, customers: 203 },
  { month: "Oct", revenue: 45000, orders: 300, customers: 234 },
  { month: "Nov", revenue: 32000, orders: 213, customers: 167 },
  { month: "Dec", revenue: 58000, orders: 387, customers: 312 },
];

// Revenue by Product Category
const categoryData = [
  { name: "Electronics", value: 35, revenue: 125000 },
  { name: "Clothing", value: 28, revenue: 98000 },
  { name: "Home & Garden", value: 20, revenue: 72000 },
  { name: "Sports", value: 12, revenue: 42000 },
  { name: "Books", value: 5, revenue: 18000 },
];

// Top Performing Products
const topProducts = [
  { name: "Wireless Headphones Pro", sales: 1250, revenue: 18750 },
  { name: "Smart Fitness Watch", sales: 980, revenue: 14700 },
  { name: "Ergonomic Office Chair", sales: 750, revenue: 11250 },
  { name: "Bluetooth Speaker", sales: 680, revenue: 10200 },
  { name: "Gaming Keyboard", sales: 520, revenue: 7800 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))", // Primary Blue
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--chart-2))", // Accent Green
  },
  customers: {
    label: "Customers",
    color: "hsl(var(--chart-3))", // Orange
  },
} satisfies ChartConfig;

const COLORS = [
  "hsl(var(--chart-1))", // Primary Blue
  "hsl(var(--chart-2))", // Accent Green
  "hsl(var(--chart-3))", // Orange
  "hsl(var(--chart-4))", // Lighter Blue
  "hsl(var(--chart-5))", // Lighter Green
];

const SalesAnalytics = () => {
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);
  const totalCustomers = salesData.reduce((sum, item) => sum + item.customers, 0);
  const avgOrderValue = totalRevenue / totalOrders;

  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.2% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCustomers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15.3% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${avgOrderValue.toFixed(0)}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2.1% from last month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Performance Chart */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
            <CardDescription>Monthly revenue, orders, and customer trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    tickLine={false} 
                    axisLine={false} 
                    tickMargin={8} 
                    fontSize={12}
                  />
                  <YAxis 
                    tickFormatter={(value) => `$${value / 1000}k`}
                    tickLine={false} 
                    axisLine={false} 
                    tickMargin={8} 
                    fontSize={12}
                  />
                  <Tooltip
                    content={<ChartTooltipContent />} 
                  />
                  <Legend content={<ChartLegendContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="var(--color-revenue)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-revenue)", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "var(--color-revenue)", strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="var(--color-orders)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-orders)", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "var(--color-orders)", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Revenue by Category */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Revenue by Category</CardTitle>
            <CardDescription>Distribution of sales across product categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [`${value}%`, name]}
                    content={<ChartTooltipContent />}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Products Table */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Top Performing Products</CardTitle>
          <CardDescription>Best-selling products by revenue and units sold</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales.toLocaleString()} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">${product.revenue.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesAnalytics;
