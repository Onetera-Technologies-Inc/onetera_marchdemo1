import AdminOverviewSection from "@/app/components/admin/adminOverviewSection/adminOverviewSection";
import AdminNavbar from "@/app/components/navigation/adminNavbar/adminNavbar";
import styles from "./adminLandingPage.module.css";

const AdminWelcomePage = () => {
  return (
    <div>
      <AdminNavbar />
      <section className={styles.adminLandingPageContainer}>
        <h3>Overview</h3>
        <div>
          <AdminOverviewSection />
        </div>
        <div>
          <h4>Unresolved Applications</h4>
        </div>
        <div>
          <h4>Resolved Applications</h4>
        </div>
      </section>
    </div>
  );
};

export default AdminWelcomePage;
