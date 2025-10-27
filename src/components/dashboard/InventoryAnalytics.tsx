"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Area, AreaChart } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";
import { Package, AlertTriangle, TrendingUp, TrendingDown, ShoppingCart, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Inventory Status Data
const inventoryData = [
  { month: "Jan", totalStock: 1250, lowStock: 45, outOfStock: 8, turnover: 2.3 },
  { month: "Feb", totalStock: 1180, lowStock: 52, outOfStock: 12, turnover: 2.1 },
  { month: "Mar", totalStock: 1320, lowStock: 38, outOfStock: 6, turnover: 2.5 },
  { month: "Apr", totalStock: 1450, lowStock: 28, outOfStock: 4, turnover: 2.8 },
  { month: "May", totalStock: 1380, lowStock: 35, outOfStock: 7, turnover: 2.6 },
  { month: "Jun", totalStock: 1520, lowStock: 22, outOfStock: 3, turnover: 3.1 },
  { month: "Jul", totalStock: 1480, lowStock: 25, outOfStock: 5, turnover: 2.9 },
  { month: "Aug", totalStock: 1650, lowStock: 18, outOfStock: 2, turnover: 3.3 },
  { month: "Sep", totalStock: 1580, lowStock: 30, outOfStock: 6, turnover: 3.0 },
  { month: "Oct", totalStock: 1720, lowStock: 15, outOfStock: 1, turnover: 3.4 },
  { month: "Nov", totalStock: 1680, lowStock: 20, outOfStock: 3, turnover: 3.2 },
  { month: "Dec", totalStock: 1850, lowStock: 12, outOfStock: 1, turnover: 3.6 },
];

// Stock Levels by Category
const categoryStockData = [
  { name: "Electronics", value: 45, stock: 850, lowStock: 12, outOfStock: 2 },
  { name: "Clothing", value: 30, stock: 560, lowStock: 8, outOfStock: 1 },
  { name: "Home & Garden", value: 15, stock: 280, lowStock: 5, outOfStock: 0 },
  { name: "Sports", value: 7, stock: 130, lowStock: 3, outOfStock: 1 },
  { name: "Books", value: 3, stock: 60, lowStock: 2, outOfStock: 0 },
];

// Low Stock Items
const lowStockItems = [
  { id: "1", name: "Wireless Headphones Pro", sku: "WHP-001", currentStock: 5, minStock: 20, category: "Electronics", lastRestocked: "2024-01-15" },
  { id: "2", name: "Gaming Mouse RGB", sku: "GMR-002", currentStock: 8, minStock: 25, category: "Electronics", lastRestocked: "2024-01-10" },
  { id: "3", name: "Yoga Mat Premium", sku: "YMP-003", currentStock: 3, minStock: 15, category: "Sports", lastRestocked: "2024-01-08" },
  { id: "4", name: "Coffee Maker Deluxe", sku: "CMD-004", currentStock: 7, minStock: 30, category: "Home & Garden", lastRestocked: "2024-01-12" },
  { id: "5", name: "Running Shoes Pro", sku: "RSP-005", currentStock: 4, minStock: 18, category: "Sports", lastRestocked: "2024-01-05" },
];

// Top Moving Products
const topMovingProducts = [
  { name: "Wireless Headphones Pro", unitsSold: 1250, turnoverRate: 4.2, revenue: 18750 },
  { name: "Smart Fitness Watch", unitsSold: 980, turnoverRate: 3.8, revenue: 14700 },
  { name: "Ergonomic Office Chair", unitsSold: 750, turnoverRate: 3.5, revenue: 11250 },
  { name: "Bluetooth Speaker", unitsSold: 680, turnoverRate: 3.2, revenue: 10200 },
  { name: "Gaming Keyboard", unitsSold: 520, turnoverRate: 2.9, revenue: 7800 },
];

const chartConfig = {
  totalStock: {
    label: "Total Stock",
    color: "hsl(var(--chart-1))", // Primary Blue
  },
  lowStock: {
    label: "Low Stock",
    color: "hsl(var(--chart-3))", // Orange
  },
  outOfStock: {
    label: "Out of Stock",
    color: "hsl(var(--destructive))", // Red
  },
  turnover: {
    label: "Turnover Rate",
    color: "hsl(var(--chart-2))", // Accent Green
  },
} satisfies ChartConfig;

const COLORS = [
  "hsl(var(--chart-1))", // Primary Blue
  "hsl(var(--chart-2))", // Accent Green
  "hsl(var(--chart-3))", // Orange
  "hsl(var(--chart-4))", // Lighter Blue
  "hsl(var(--chart-5))", // Lighter Green
];

const InventoryAnalytics = () => {
  const totalStock = inventoryData.reduce((sum, item) => sum + item.totalStock, 0);
  const totalLowStock = inventoryData.reduce((sum, item) => sum + item.lowStock, 0);
  const totalOutOfStock = inventoryData.reduce((sum, item) => sum + item.outOfStock, 0);
  const avgTurnover = inventoryData.reduce((sum, item) => sum + item.turnover, 0) / inventoryData.length;

  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Stock</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStock.toLocaleString()}</div>
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
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLowStock}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -15.3% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOutOfStock}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -25.0% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Turnover Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgTurnover.toFixed(1)}x</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Trends */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Inventory Trends</CardTitle>
            <CardDescription>Stock levels and turnover rate over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={inventoryData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    tickLine={false} 
                    axisLine={false} 
                    tickMargin={8} 
                    fontSize={12}
                  />
                  <YAxis 
                    tickLine={false} 
                    axisLine={false} 
                    tickMargin={8} 
                    fontSize={12}
                  />
                  <Tooltip
                    content={<ChartTooltipContent />} 
                  />
                  <Legend content={<ChartLegendContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="totalStock" 
                    stackId="1"
                    stroke="var(--color-totalStock)" 
                    fill="var(--color-totalStock)"
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="lowStock" 
                    stackId="2"
                    stroke="var(--color-lowStock)" 
                    fill="var(--color-lowStock)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Stock Distribution by Category */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Stock Distribution by Category</CardTitle>
            <CardDescription>Inventory levels across product categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryStockData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryStockData.map((entry, index) => (
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

      {/* Low Stock Alert Table */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Low Stock Alerts</CardTitle>
          <CardDescription>Items requiring immediate restocking</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Min Stock</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lowStockItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.currentStock}</TableCell>
                  <TableCell>{item.minStock}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.lastRestocked}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={item.currentStock < item.minStock * 0.5 ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {item.currentStock < item.minStock * 0.5 ? "Critical" : "Low"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Top Moving Products */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Top Moving Products</CardTitle>
          <CardDescription>Products with highest turnover rates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topMovingProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.unitsSold.toLocaleString()} units sold</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="font-semibold text-lg">{product.turnoverRate}x</p>
                    <p className="text-sm text-muted-foreground">Turnover</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">${product.revenue.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryAnalytics;
