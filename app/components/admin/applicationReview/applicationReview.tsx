import { Col, Row } from "antd";
import ReasonForIneligibility from "./reasonForIneligibility";
import ApplicationProfile from "./applicantProfile";
import AdditionalApplicantDetails from "./additionalApplicantDetails";
import AdminChatInterface from "./adminChatInterface/adminChatInterface";

interface ApplicationReviewProps {
  applicantId: string;
}

const ApplicationReview: React.FC<ApplicationReviewProps> = ({
  applicantId,
}) => {
  return (
    <>
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Application Review</h3>
        <Row gutter={20}>
          <Col span={10}>
            <ReasonForIneligibility />
            <ApplicationProfile applicantId={applicantId} />
            <AdditionalApplicantDetails />
          </Col>
          <Col span={14}>
            <AdminChatInterface />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ApplicationReview;
