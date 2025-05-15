import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, Users, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  iconColor?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, change, icon: Icon, iconColor = "text-primary" }) => (
  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className={`h-5 w-5 ${iconColor}`} />
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">{value}</div>
      {change && <p className="text-xs text-muted-foreground pt-1">{change}</p>}
    </CardContent>
  </Card>
);

const SalesSummary = () => {
  const summaryData: SummaryCardProps[] = [
    { title: "Total Revenue", value: "$125,830", change: "+15.2% from last month", icon: DollarSign, iconColor: "text-green-500" },
    { title: "Total Sales", value: "1,480", change: "+8.5% from last month", icon: TrendingUp, iconColor: "text-blue-500" },
    { title: "Products Sold", value: "3,200", change: "+5.0% from last month", icon: Package, iconColor: "text-orange-500" },
    { title: "Active Customers", value: "852", change: "+30 new this month", icon: Users, iconColor: "text-purple-500" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {summaryData.map((item) => (
        <SummaryCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default SalesSummary;
