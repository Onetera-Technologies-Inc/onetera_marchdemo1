import { Table, Tag } from "antd";
import { Key } from "react";

const applicationData = [
  {
    key: "1",
    unitName: "Citrus Crossing Senior Apartments",
    city: "Glendale",
    dateSubmitted: "02-04-2024",
    status: "Documents Requested",
    actions: "...", // replace with actual action components or functions
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
    title: "ACTIONS",
    dataIndex: "actions",
    key: "actions",
    // Add components or functions for the actions
  },
];

const ResidentStatusTable = () => (
  <div>
    <h2>
      Hi Jane, here are your current affordable housing applications with their
      statuses.
    </h2>
    <Table columns={columns} dataSource={applicationData} pagination={false} />
  </div>
);

export default ResidentStatusTable;
