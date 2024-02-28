import { Card, Button, Row, Col, Badge, Typography, Space } from "antd";
import {
  EditOutlined,
  PhoneOutlined,
  MailOutlined,
  EllipsisOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

type RequestDocumentUploadProps = {
  setUserAgreedToUpload: (value: boolean) => void; // This matches the signature of a state setter function from useState
};

const RequestDocumentUpload: React.FC<RequestDocumentUploadProps> = ({
  setUserAgreedToUpload,
}) => {
  return (
    <Card>
      <Row gutter={16}>
        <Col span={6}>
          <Text strong>Citrus Crossing Senior Apartments</Text>
        </Col>
        <Col span={6}>
          <Text>Glendale</Text>
        </Col>
        <Col span={6}>
          <Text>02-04-2024</Text>
        </Col>
        <Col span={6}>
          <Badge status="error" text="Documents Requested" />
        </Col>
      </Row>
      <Row style={{ marginTop: "16px" }}>
        <Col span={24}>
          <Text>
            It looks like your application for Citrus Crossing Apartments
            requires you to submit documents, would you like to take action?
          </Text>
        </Col>
      </Row>
      <Row style={{ marginTop: "16px" }}>
        <Col span={24}>
          <Space>
            <Button>No</Button>
            <Button type="primary" onClick={() => setUserAgreedToUpload(true)}>
              Yes
            </Button>
          </Space>
        </Col>
      </Row>
      <Row style={{ marginTop: "16px" }}>
        <Col span={24}>
          <Space>
            <Button icon={<EditOutlined />} shape="circle" />
            <Button icon={<PhoneOutlined />} shape="circle" />
            <Button icon={<MailOutlined />} shape="circle" />
            <Button icon={<FileTextOutlined />} shape="circle" />
            <Button icon={<EllipsisOutlined />} shape="circle" />
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default RequestDocumentUpload;
