import React from "react";
import { Table, Button, Space, Typography, Badge, Row, Col } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  FileTextOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const dataSource = [
  {
    key: "1",
    unitName: "Citrus Crossing Senior Apartments",
    city: "Glendale",
    dateSubmitted: "02-04-2024",
    status: <Badge status="error" text="Documents Requested" />,
  },
  // ... add other data rows as needed
];

const columns = [
  {
    title: "UNIT NAME",
    dataIndex: "unitName",
    key: "unitName",
  },
  {
    title: "CITY",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "DATE SUBMITTED",
    dataIndex: "dateSubmitted",
    key: "dateSubmitted",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "ACTIONS",
    key: "actions",
    render: () => (
      <Space>
        <Button icon={<PhoneOutlined />} shape="circle" />
        <Button icon={<MailOutlined />} shape="circle" />
        <Button icon={<FileTextOutlined />} shape="circle" />
        <Button icon={<EllipsisOutlined />} shape="circle" />
      </Space>
    ),
  },
];

type RequestDocumentUploadProps = {
  setUserAgreedToUpload: (value: boolean) => void;
};

const DocumentRequestTable = ({
  setUserAgreedToUpload,
}: RequestDocumentUploadProps) => {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <div style={{ marginTop: "16px" }}>
        <Text>
          It looks like your application for Citrus Crossing Apartments requires
          you to submit documents, would you like to take action?
        </Text>
        <div style={{ marginTop: "16px" }}>
          <Row gutter={16}>
            <Col>
              <Button style={{ width: "100%" }}>No</Button>
            </Col>
            <Col>
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={() => {
                  console.log("Yes button clicked, setting state to true");
                  setUserAgreedToUpload(true);
                }}
              >
                Yes
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DocumentRequestTable;
