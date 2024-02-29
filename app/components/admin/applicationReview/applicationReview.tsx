import { Button, Col, Row } from "antd";
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
      {/* <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          paddingBottom: "50px",
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
        <Button
          type="primary"
          style={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
          }}
        >
          Submit
        </Button>
      </div> */}
      <div
        style={{
          margin: "40px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          paddingBottom: "50px",
        }}
      >
        <h3>Application Review</h3>
        <Row gutter={20} style={{ height: "70vh" }}>
          <Col span={10}>
            <div>
              <ApplicationProfile applicantId={applicantId} />
            </div>
            <div>
              <ReasonForIneligibility />
            </div>
            <div>
              <AdditionalApplicantDetails />
            </div>
          </Col>
          <Col span={14}>
            <div>
              <AdminChatInterface />
            </div>
          </Col>
        </Row>
      </div>
      <Button
        type="primary"
        style={{
          position: "absolute",
          right: "60px",
          bottom: "20px",
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default ApplicationReview;
