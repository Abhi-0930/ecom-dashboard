import AppLayout from '@/components/layout/AppLayout';
import InventoryAnalytics from '@/components/dashboard/InventoryAnalytics';

export default function InventoryPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        <InventoryAnalytics />
      </div>
    </AppLayout>
  );
}
