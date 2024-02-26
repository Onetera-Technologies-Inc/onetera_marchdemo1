import ApplicationReview from "@/app/components/admin/applicationReview/applicationReview";
import AdminNavbar from "@/app/components/navigation/adminNavbar/adminNavbar";

const ApplicantDetailsPage = ({
  params,
}: {
  params: { applicantDetailsPage: string };
}) => {
  const applicantId = params.applicantDetailsPage;

  return (
    <>
      <AdminNavbar />
      <ApplicationReview applicantId={applicantId} />
    </>
  );
};

export default ApplicantDetailsPage;
