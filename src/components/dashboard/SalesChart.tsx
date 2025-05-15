"use client";

import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { month: "Jan", revenue: 1860, expenses: 800 },
  { month: "Feb", revenue: 3050, expenses: 1200 },
  { month: "Mar", revenue: 2370, expenses: 1000 },
  { month: "Apr", revenue: 4830, expenses: 1500 },
  { month: "May", revenue: 2090, expenses: 900 },
  { month: "Jun", revenue: 4120, expenses: 1300 },
  { month: "Jul", revenue: 3580, expenses: 1100 },
  { month: "Aug", revenue: 5200, expenses: 1600 },
  { month: "Sep", revenue: 3900, expenses: 1400 },
  { month: "Oct", revenue: 4500, expenses: 1700 },
  { month: "Nov", revenue: 3200, expenses: 1150 },
  { month: "Dec", revenue: 5800, expenses: 1900 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;


const SalesChart = () => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Sales Performance</CardTitle>
        <CardDescription>Monthly Revenue and Expenses Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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
                cursor={<Rectangle fill="hsl(var(--muted))" opacity={0.3} />}
                content={<ChartTooltipContent />} 
              />
              <Legend content={<ChartLegendContent />} />
              <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
