import AdminOverviewSection from "@/app/components/admin/adminOverviewSection/adminOverviewSection";
import AdminNavbar from "@/app/components/navigation/adminNavbar/adminNavbar";
import styles from "./adminLandingPage.module.css";
import AdminTables from "@/app/components/admin/admintables/adminTables";
import ResolvedApplications from "@/app/components/admin/admintables/resolvedapplications";
import { unresolvedApplicationsData } from "@/app/constants/dataConstants";

const AdminWelcomePage = () => {
  return (
    <div>
      <AdminNavbar />
      <div>
        <AdminOverviewSection />
      </div>
      <section className={styles.adminLandingPageContainer}>
        <div>
          <h4>Unresolved Applications</h4>
          <AdminTables data={unresolvedApplicationsData} />
        </div>
        <div>
          <h4>Resolved Applications</h4>
          <ResolvedApplications />
        </div>
      </section>
    </div>
  );
};

export default AdminWelcomePage;
