import AppLayout from '@/components/layout/AppLayout';
import CustomerAnalytics from '@/components/dashboard/CustomerAnalytics';

export default function CustomersPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        <CustomerAnalytics />
      </div>
    </AppLayout>
  );
}
