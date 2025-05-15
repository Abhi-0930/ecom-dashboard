import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function InventoryPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Inventory Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Inventory details, stock levels, and management tools will be displayed here. This is a placeholder page.
            </p>
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden border border-dashed border-border">
              <Image 
                src="https://placehold.co/1200x675.png" 
                alt="Inventory Placeholder" 
                layout="fill"
                objectFit="cover"
                data-ai-hint="warehouse shelves"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <p className="text-white text-2xl font-semibold">Inventory Management Interface Coming Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
