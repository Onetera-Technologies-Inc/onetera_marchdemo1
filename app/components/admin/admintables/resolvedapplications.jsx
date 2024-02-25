"use client";

import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import {
  EllipsisOutlined,
  SyncOutlined,
  SettingOutlined
} from '@ant-design/icons';

const ResolvedApplications = () => {
  const dataSource = [
    {
      key: '1',
      id: '00001',
      name: 'Malik Johnson',
      lastUpdated: '02-04-2024',
      date: '02-04-2024',
      type: 'Parking Permit',
      status: 'pending documents',
    },
    // ...more data
  ];

  const getStatusTag = (status) => {
    let color = 'default';
    switch (status) {
      case 'pending documents':
        color = 'gold';
        break;
      case 'approved':
        color = 'green';
        break;
      case 'denied':
        color = 'red';
        break;
      default:
        color = 'default';
    }
    return <Tag color={color}>{status.toUpperCase()}</Tag>;
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'LAST UPDATED',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
    },
    {
      title: 'DATE',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'TYPE',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'STATUS',
      key: 'status',
      dataIndex: 'status',
      render: (status) => getStatusTag(status),
    },
    {
      title: 'ACTIONS',
      key: 'actions',
      render: () => (
        <Space size="middle">
          <Button icon={<EllipsisOutlined />} />
          <Button icon={<SyncOutlined />} />
          <Button icon={<SettingOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  );
};

export default ResolvedApplications;
