import StatsCard from "@/components/dashboard/StatsCard";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return null;
  if (!isSignedIn) return <RedirectToSignIn redirectUrl="/dashboard" />;

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Welcome {user?.firstName}</h1>

      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Bookings" value="132" />
        <StatsCard title="Completed Pujas" value="89" />
        <StatsCard title="Pending Pujas" value="43" />
      </div>
    </DashboardLayout>
  );
}

// function StatCard({ title, value }: { title: string; value: string }) {
//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-all duration-300">
//       <h3 className="text-gray-600">{title}</h3>
//       <p className="text-3xl font-bold mt-2 text-gray-600">{value}</p>
//     </div>
//   );
// }
