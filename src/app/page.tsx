import AppLayout from '@/components/layout/AppLayout';
import SalesSummary from '@/components/dashboard/SalesSummary';
import SalesChart from '@/components/dashboard/SalesChart';
import InventoryStatus from '@/components/dashboard/InventoryStatus';
import TrendForecaster from '@/components/dashboard/TrendForecaster';

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        <SalesSummary />
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div className="lg:col-span-1">
            <InventoryStatus />
          </div>
        </div>
        
        <TrendForecaster />
      </div>
    </AppLayout>
  );
}
