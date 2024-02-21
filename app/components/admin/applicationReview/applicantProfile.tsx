"use client";

import { unresolvedApplicationsData } from "@/app/constants/dataConstants";
import { Card, Descriptions, Button } from "antd";

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
    <Card>
      <Descriptions title="User Info" layout="vertical">
        {items.map((item, index) => (
          <Descriptions.Item label={item.label} key={index}>
            {item.content}
          </Descriptions.Item>
        ))}
      </Descriptions>
      <div style={{ textAlign: "right", marginTop: 16 }}>
        <Button type="primary">View profile</Button>
      </div>
    </Card>
  );
};

export default ApplicationProfile;
