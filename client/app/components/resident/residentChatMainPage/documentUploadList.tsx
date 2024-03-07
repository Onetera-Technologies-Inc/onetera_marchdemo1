import { Card, List, Typography } from "antd";
import { FilePdfOutlined, FileJpgOutlined } from "@ant-design/icons";

const { Text } = Typography;

const DocumentUploadList = () => {
  const documentList = [
    { name: "Your two most recent paystubs", icon: <FilePdfOutlined /> },
    { name: "A picture of your drivers license", icon: <FileJpgOutlined /> },
  ];

  const formatList = ["PDF", "JPG", "PNG", "SVG"];

  return (
    <Card bordered={false}>
      <Text strong>
        Great! You are missing the following documents from your application and
        must submit them in order for your application to be eligible.
      </Text>
      <List
        dataSource={documentList}
        renderItem={(item) => (
          <List.Item>
            {item.icon}
            {item.name}
          </List.Item>
        )}
      />
      <Text>
        Please submit these documents in the following formats:{" "}
        {formatList.join(", ")}.
      </Text>
    </Card>
  );
};

export default DocumentUploadList;
