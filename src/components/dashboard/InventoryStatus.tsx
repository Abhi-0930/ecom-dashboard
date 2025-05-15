import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
}

const inventoryData: InventoryItem[] = [
  { id: "1", name: "Ergonomic Mouse Pro", sku: "EMP-001", stock: 125, status: "In Stock" },
  { id: "2", name: "Mechanical Keyboard Lite", sku: "MKL-002", stock: 48, status: "Low Stock" },
  { id: "3", name: "4K Ultra HD Monitor", sku: "4KM-003", stock: 0, status: "Out of Stock" },
  { id: "4", name: "Wireless Headset X", sku: "WHX-004", stock: 230, status: "In Stock" },
  { id: "5", name: "Standing Desk Converter", sku: "SDC-005", stock: 15, status: "Low Stock" },
  { id: "6", name: "Laptop Stand Aluminium", sku: "LSA-006", stock: 88, status: "In Stock" },
  { id: "7", name: "Webcam 1080p", sku: "WC1-007", stock: 3, status: "Low Stock" },
];

const InventoryStatus = () => {
  const getStatusVariant = (status: InventoryItem["status"]): "default" | "secondary" | "destructive" => {
    switch (status) {
      case "In Stock":
        return "default"; // Will use primary color from theme, or we can use explicit green
      case "Low Stock":
        return "secondary"; // Will use secondary, maybe orange/yellow
      case "Out of Stock":
        return "destructive";
      default:
        return "default";
    }
  };

  const getStatusColorClass = (status: InventoryItem["status"]): string => {
    switch (status) {
      case "In Stock":
        return "bg-green-500 hover:bg-green-600 text-white";
      case "Low Stock":
        return "bg-yellow-500 hover:bg-yellow-600 text-black";
      case "Out of Stock":
        return "bg-red-500 hover:bg-red-600 text-white";
      default:
        return "bg-primary";
    }
  }

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader>
        <CardTitle>Inventory Status</CardTitle>
        <CardDescription>Current stock levels for key products.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Stock</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.sku}</div>
                  </TableCell>
                  <TableCell className="text-right">{item.stock}</TableCell>
                  <TableCell className="text-right">
                    <Badge className={cn(getStatusColorClass(item.status), "text-xs")}>{item.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default InventoryStatus;
