import AdminLayout from "@/app/components/admin/adminLayout/adminLayout";
import AdminNavbar from "@/app/components/navigation/adminNavbar/adminNavbar";
import { Col, Row } from "antd";

const ApplicantDetailsPage = ({
  params,
}: {
  params: { applicantDetailsPage: string };
}) => {
  const applicantId = params.applicantDetailsPage;

  return (
    <>
      <AdminNavbar />
      <h3>Application Review</h3>
      <Row>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>
    </>
  );
};

export default ApplicantDetailsPage;
