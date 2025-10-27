import AppLayout from '@/components/layout/AppLayout';
import SalesAnalytics from '@/components/dashboard/SalesAnalytics';

export default function SalesAnalyticsPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        <SalesAnalytics />
      </div>
    </AppLayout>
  );
}
