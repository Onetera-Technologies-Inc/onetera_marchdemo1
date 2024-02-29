import { Button, Space, Table, Tag } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const applicationData = [
  {
    key: "1",
    unitName: "Citrus Crossing Senior Apartments",
    city: "Glendale",
    dateSubmitted: "02-04-2024",
    status: "Documents Requested",
  },
  // ... other entries
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
    key: "status",
    dataIndex: "status",
    render: (status: string) => {
      let color = "geekblue";
      if (status === "Documents Requested") color = "volcano";
      if (status === "Under Review") color = "cyan";
      if (status === "Waitlisted") color = "purple";
      if (status === "Pending Verification") color = "green";
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Actions",
    key: "action",
    render: (_: any) => (
      <Space size="middle">
        <Button icon={<PhoneOutlined />} shape="circle" />
        <Button icon={<MailOutlined />} shape="circle" />
        <Button icon={<EllipsisOutlined />} shape="circle" />
      </Space>
    ),
  },
];

const ResidentStatusTable = () => (
  <div>
    Hi Jane, here are your current affordable housing applications with their
    statuses.
    <Table columns={columns} dataSource={applicationData} pagination={false} />
  </div>
);

export default ResidentStatusTable;
