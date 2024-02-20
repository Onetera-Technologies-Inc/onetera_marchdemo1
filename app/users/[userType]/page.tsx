import AdminWelcomePage from "@/app/containers/landingPage/adminLanding";
import ResidentLandingPage from "@/app/resident/page";

const UserTypePage = ({ params }: { params: { userType: string } }) => {
  return (
    <>
      {params.userType == "admin" ? (
        <AdminWelcomePage />
      ) : (
        <ResidentLandingPage />
      )}
    </>
  );
};

export default UserTypePage;
