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
      <Row>
        <Col span={10}>
          <ReasonForIneligibility />
          <ApplicationProfile applicantId={applicantId} />
          <AdditionalApplicantDetails />
        </Col>
        <Col span={14}>
          <AdminChatInterface />
        </Col>
      </Row>
    </>
  );
};

export default ApplicationReview;
