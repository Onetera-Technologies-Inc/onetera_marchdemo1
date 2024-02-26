import AdminLayout from "@/app/components/admin/adminLayout/adminLayout";
import AdminWelcomePage from "@/app/containers/landingPage/adminLandingPage/adminLanding";
import ResidentLandingPage from "@/app/resident/page";

const UserTypePage = ({ params }: { params: { userType: string } }) => {
  return (
    <>
      {params.userType == "admin" ? (
        <AdminLayout>
          <></>
        </AdminLayout>
      ) : (
        <ResidentLandingPage />
      )}
    </>
  );
};

export default UserTypePage;
