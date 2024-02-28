import AdminOverviewSection from "@/app/components/admin/adminOverviewSection/adminOverviewSection";
import AdminNavbar from "@/app/components/navigation/adminNavbar/adminNavbar";
import ResidentOverviewSection from "@/app/components/resident/residentOverviewSection/residentOverviewSection";

const ResidentWelcomePage = () => {
  return (
    <div>
      <AdminNavbar />
      <div>
        <ResidentOverviewSection />
      </div>
    </div>
  );
};

export default ResidentWelcomePage;
