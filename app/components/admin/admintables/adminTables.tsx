"use client";

import { Application } from "@/app/constants/interfaces";
import { Table, Tag, Space, Button } from "antd";
import { useRouter } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";

interface AdminTablesProps {
  data: Application[];
}

const AdminTables = ({ data }: AdminTablesProps) => {
  const router = useRouter();

  const onRowClick = (id: string) => {
    router.push(`/applicantDetails/${id}`);
  };

  const getTagColor = (status: any) => {
    switch (status) {
      case "pending approval":
        return "gold";
      case "missing documentation":
        return "volcano";
      case "approved":
        return "green";
      case "rejected":
        return "red";
      default:
        return "default";
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: Application, b: Application) => a.name.localeCompare(b.name),
    },
    {
      title: "Ineligibility Reason",
      dataIndex: "reason",
      key: "reason",
      onFilter: (value: any, record: { name: string | any[] }) =>
        record.name.includes(value),
    },
    {
      title: "Date",
      dataIndex: "submissionDate",
      key: "submissionDate",
      sorter: (a: Application, b: Application) =>
        a.submissionDate.localeCompare(b.submissionDate),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status: any[]) => (
        <>
          {status.map((tag) => {
            const color = getTagColor(tag.toLowerCase());
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (_: any, record: Application) => (
        <Space size="middle">
          <Button type="primary">Review</Button>
          <Button icon={<MenuOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              onRowClick(record.id);
            },
          };
        }}
        pagination={{ pageSize: 10 }}
        columns={columns}
        dataSource={data}
        // footer={() => <h6>Table Item Count: {data.length}</h6>}
      />
    </>
  );
};

export default AdminTables;
