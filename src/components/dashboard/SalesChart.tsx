"use client";

import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { month: "Jan", revenue: 18600, expenses: 8000 },
  { month: "Feb", revenue: 30500, expenses: 12000 },
  { month: "Mar", revenue: 23700, expenses: 10000 },
  { month: "Apr", revenue: 48300, expenses: 15000 },
  { month: "May", revenue: 20900, expenses: 9000 },
  { month: "Jun", revenue: 41200, expenses: 13000 },
  { month: "Jul", revenue: 35800, expenses: 11000 },
  { month: "Aug", revenue: 52000, expenses: 16000 },
  { month: "Sep", revenue: 39000, expenses: 14000 },
  { month: "Oct", revenue: 45000, expenses: 17000 },
  { month: "Nov", revenue: 32000, expenses: 11500 },
  { month: "Dec", revenue: 58000, expenses: 19000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))", // Primary Blue
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))", // Accent Green
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
