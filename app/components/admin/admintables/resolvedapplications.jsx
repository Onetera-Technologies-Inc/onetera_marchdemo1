"use client";

import React from 'react';
import { Table,  Space, Button } from 'antd';
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
    },
    // ...more data
  ];


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
