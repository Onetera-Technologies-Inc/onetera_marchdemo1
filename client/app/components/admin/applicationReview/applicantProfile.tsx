"use client";

import { unresolvedApplicationsData } from "@/app/constants/dataConstants";
import { Card, Descriptions, Button, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface ApplicationReviewProps {
  applicantId: string;
}

const ApplicationProfile: React.FC<ApplicationReviewProps> = ({
  applicantId,
}) => {
  const application = unresolvedApplicationsData.find(
    (app) => app.id === applicantId
  );

  const items = application
    ? [
        {
          label: "Name",
          content: application.name,
        },
        {
          label: "ID",
          content: application.id,
        },
        {
          label: "Submission Date",
          content: application.submissionDate,
        },
        {
          label: "Application Type",
          content: application.type,
        },
      ]
    : [];

  return (
    <Card
      style={{
        width: "100%",

        margin: "auto",
        marginBottom: "10px",
      }}
    >
      <Row>
        <Col span={2}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar size={26} icon={<UserOutlined />} />
          </div>
        </Col>
        <Col span={19}>
          <div style={{ fontWeight: "bold" }}>Christine Brooks</div>
          <Descriptions.Item label="ID">ID: A567BZ92</Descriptions.Item>
          <Row style={{ marginTop: "20px" }}>
            <Col span={12}>
              <div style={{ fontWeight: "bold" }}>Submission Date</div>
              <Descriptions.Item label="Submission Date">
                02-03-2024
              </Descriptions.Item>
            </Col>
            <Col span={12}>
              <div style={{ fontWeight: "bold" }}>Primary Language</div>
              <Descriptions.Item label="Primary Language">
                Armenian
              </Descriptions.Item>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col span={12}>
              <div style={{ fontWeight: "bold" }}>Application Type</div>
              <Descriptions.Item label="Application Type">
                Standard Roofing Permit
              </Descriptions.Item>
            </Col>
            <Col span={12}>
              <div style={{ fontWeight: "bold" }}>Address</div>
              <Descriptions.Item label="Address">
                130 Martin Drive, Glendale, CA 91020
              </Descriptions.Item>
            </Col>
          </Row>
        </Col>

        <Col span={3}>View profile</Col>
      </Row>
    </Card>
  );
};

export default ApplicationProfile;
