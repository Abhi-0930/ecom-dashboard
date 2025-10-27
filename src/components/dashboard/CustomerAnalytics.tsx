"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Area, AreaChart } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";
import { Users, UserPlus, TrendingUp, Heart, Star, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Customer Growth Data
const customerGrowthData = [
  { month: "Jan", newCustomers: 98, totalCustomers: 1250, activeCustomers: 1100, churnRate: 2.1 },
  { month: "Feb", newCustomers: 156, totalCustomers: 1406, activeCustomers: 1230, churnRate: 1.8 },
  { month: "Mar", newCustomers: 134, totalCustomers: 1540, activeCustomers: 1350, churnRate: 2.3 },
  { month: "Apr", newCustomers: 267, totalCustomers: 1807, activeCustomers: 1580, churnRate: 1.5 },
  { month: "May", newCustomers: 112, totalCustomers: 1919, activeCustomers: 1680, churnRate: 2.0 },
  { month: "Jun", newCustomers: 198, totalCustomers: 2117, activeCustomers: 1850, churnRate: 1.7 },
  { month: "Jul", newCustomers: 187, totalCustomers: 2304, activeCustomers: 2020, churnRate: 1.9 },
  { month: "Aug", newCustomers: 289, totalCustomers: 2593, activeCustomers: 2280, churnRate: 1.4 },
  { month: "Sep", newCustomers: 203, totalCustomers: 2796, activeCustomers: 2450, churnRate: 1.6 },
  { month: "Oct", newCustomers: 234, totalCustomers: 3030, activeCustomers: 2650, churnRate: 1.3 },
  { month: "Nov", newCustomers: 167, totalCustomers: 3197, activeCustomers: 2800, churnRate: 1.8 },
  { month: "Dec", newCustomers: 312, totalCustomers: 3509, activeCustomers: 3080, churnRate: 1.2 },
];

// Customer Segments
const customerSegments = [
  { name: "VIP Customers", value: 15, count: 526, revenue: 125000 },
  { name: "Regular Customers", value: 45, count: 1579, revenue: 89000 },
  { name: "New Customers", value: 25, count: 877, revenue: 45000 },
  { name: "At Risk", value: 10, count: 351, revenue: 12000 },
  { name: "Inactive", value: 5, count: 176, revenue: 2000 },
];

// Customer Satisfaction Data
const satisfactionData = [
  { month: "Jan", rating: 4.2, reviews: 45, complaints: 3 },
  { month: "Feb", rating: 4.3, reviews: 52, complaints: 2 },
  { month: "Mar", rating: 4.1, reviews: 48, complaints: 4 },
  { month: "Apr", rating: 4.4, reviews: 67, complaints: 1 },
  { month: "May", rating: 4.3, reviews: 58, complaints: 2 },
  { month: "Jun", rating: 4.5, reviews: 73, complaints: 1 },
  { month: "Jul", rating: 4.4, reviews: 69, complaints: 2 },
  { month: "Aug", rating: 4.6, reviews: 85, complaints: 1 },
  { month: "Sep", rating: 4.5, reviews: 78, complaints: 1 },
  { month: "Oct", rating: 4.7, reviews: 92, complaints: 0 },
  { month: "Nov", rating: 4.6, reviews: 88, complaints: 1 },
  { month: "Dec", rating: 4.8, reviews: 105, complaints: 0 },
];

// Top Customers
const topCustomers = [
  { 
    id: "1", 
    name: "Sarah Johnson", 
    email: "sarah.j@email.com", 
    totalSpent: 12500, 
    orders: 28, 
    lastOrder: "2024-01-15",
    segment: "VIP",
    avatar: "SJ"
  },
  { 
    id: "2", 
    name: "Michael Chen", 
    email: "m.chen@email.com", 
    totalSpent: 9800, 
    orders: 22, 
    lastOrder: "2024-01-12",
    segment: "VIP",
    avatar: "MC"
  },
  { 
    id: "3", 
    name: "Emily Rodriguez", 
    email: "emily.r@email.com", 
    totalSpent: 8750, 
    orders: 19, 
    lastOrder: "2024-01-10",
    segment: "VIP",
    avatar: "ER"
  },
  { 
    id: "4", 
    name: "David Wilson", 
    email: "d.wilson@email.com", 
    totalSpent: 7200, 
    orders: 16, 
    lastOrder: "2024-01-08",
    segment: "Regular",
    avatar: "DW"
  },
  { 
    id: "5", 
    name: "Lisa Thompson", 
    email: "lisa.t@email.com", 
    totalSpent: 6800, 
    orders: 15, 
    lastOrder: "2024-01-05",
    segment: "Regular",
    avatar: "LT"
  },
];

// Customer Support Metrics
const supportMetrics = [
  { category: "Response Time", value: 2.3, target: 2.0, unit: "hours" },
  { category: "Resolution Rate", value: 94.5, target: 95.0, unit: "%" },
  { category: "Customer Satisfaction", value: 4.6, target: 4.5, unit: "stars" },
  { category: "First Contact Resolution", value: 78.2, target: 80.0, unit: "%" },
];

const chartConfig = {
  newCustomers: {
    label: "New Customers",
    color: "hsl(var(--chart-1))", // Primary Blue
  },
  totalCustomers: {
    label: "Total Customers",
    color: "hsl(var(--chart-2))", // Accent Green
  },
  activeCustomers: {
    label: "Active Customers",
    color: "hsl(var(--chart-3))", // Orange
  },
  churnRate: {
    label: "Churn Rate",
    color: "hsl(var(--destructive))", // Red
  },
  rating: {
    label: "Rating",
    color: "hsl(var(--chart-1))", // Primary Blue
  },
  reviews: {
    label: "Reviews",
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

const CustomerAnalytics = () => {
  const totalCustomers = customerGrowthData[customerGrowthData.length - 1].totalCustomers;
  const newCustomersThisMonth = customerGrowthData[customerGrowthData.length - 1].newCustomers;
  const activeCustomers = customerGrowthData[customerGrowthData.length - 1].activeCustomers;
  const avgChurnRate = customerGrowthData.reduce((sum, item) => sum + item.churnRate, 0) / customerGrowthData.length;
  const avgSatisfaction = satisfactionData.reduce((sum, item) => sum + item.rating, 0) / satisfactionData.length;

  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                +12.5% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newCustomersThisMonth}</div>
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
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCustomers.toLocaleString()}</div>
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
            <CardTitle className="text-sm font-medium">Avg Satisfaction</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgSatisfaction.toFixed(1)}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.3 from last month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Growth */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
            <CardDescription>New customers and total customer base over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={customerGrowthData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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
                    dataKey="totalCustomers" 
                    stackId="1"
                    stroke="var(--color-totalCustomers)" 
                    fill="var(--color-totalCustomers)"
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="newCustomers" 
                    stackId="2"
                    stroke="var(--color-newCustomers)" 
                    fill="var(--color-newCustomers)"
                    fillOpacity={0.8}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Customer Segments */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Customer Segments</CardTitle>
            <CardDescription>Distribution of customers by segment</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerSegments}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {customerSegments.map((entry, index) => (
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

      {/* Customer Satisfaction Trend */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Customer Satisfaction Trends</CardTitle>
          <CardDescription>Average rating and review volume over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={satisfactionData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={8} 
                  fontSize={12}
                />
                <YAxis 
                  domain={[3.5, 5.0]}
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
                  dataKey="rating" 
                  stroke="var(--color-rating)" 
                  strokeWidth={3}
                  dot={{ fill: "var(--color-rating)", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "var(--color-rating)", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Top Customers Table */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Top Customers</CardTitle>
          <CardDescription>Highest value customers by total spending</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Segment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {customer.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>${customer.totalSpent.toLocaleString()}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={customer.segment === "VIP" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {customer.segment}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Support Metrics */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Customer Support Metrics</CardTitle>
          <CardDescription>Key performance indicators for customer support</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportMetrics.map((metric) => (
              <div key={metric.category} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold mb-1">
                  {metric.value}{metric.unit === "stars" ? "" : metric.unit}
                </div>
                <div className="text-sm text-muted-foreground mb-2">{metric.category}</div>
                <div className="text-xs">
                  Target: {metric.target}{metric.unit === "stars" ? "" : metric.unit}
                </div>
                <div className={`text-xs mt-1 ${
                  metric.value >= metric.target ? "text-green-600" : "text-red-600"
                }`}>
                  {metric.value >= metric.target ? "✓ On Target" : "⚠ Below Target"}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerAnalytics;
