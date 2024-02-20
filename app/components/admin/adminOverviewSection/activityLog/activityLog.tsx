"use client";

import React from "react";
import { Divider, Typography } from "antd";

const { Text } = Typography;

const ActivityLogScreen = () => {
  const todayLog = [
    "Application A12 for roofing permit approved",
    "Application A12 for roofing permit approved",
  ];
  const yesterdayLog = ["Application A12 for roofing permit approved"];
  return (
    <>
      <Text type="secondary">Today</Text>
      <ul>
        {todayLog.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Divider></Divider>
      <Text type="secondary">Today</Text>
      <ul>
        {yesterdayLog.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ActivityLogScreen;
