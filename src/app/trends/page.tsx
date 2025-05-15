import AppLayout from '@/components/layout/AppLayout';
import TrendForecaster from '@/components/dashboard/TrendForecaster'; // Re-using the existing component

export default function TrendsPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
        {/* You can add more content specific to this page if needed, 
            or just feature the TrendForecaster component */}
        <TrendForecaster />
      </div>
    </AppLayout>
  );
}
