"use client";

import { Application } from "@/app/constants/interfaces";
import { Table, Tag, Space, Button } from "antd";
import { useRouter } from "next/navigation";

interface AdminTablesProps {
  data: Application[];
}

const AdminTables = ({ data }: AdminTablesProps) => {
  const router = useRouter();

  const onRowClick = (id: string) => {
    router.push(`/applicantDetails/${id}`);
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
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Submission Date",
      dataIndex: "submissionDate",
      key: "submissionDate",
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
      render: (_: any, { status }: { status: string[] }) => (
        <>
          {status.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "missing documentation") {
              color = "volcano";
            }
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
      title: "Action",
      key: "action",
      render: (_: any, record: Application) => (
        <Space size="middle">
          <Button type="primary">Review</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      onRow={(record) => {
        return {
          onClick: () => {
            onRowClick(record.id);
          },
        };
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default AdminTables;
