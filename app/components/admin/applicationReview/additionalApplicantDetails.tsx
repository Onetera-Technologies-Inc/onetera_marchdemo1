import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const text = `
 hey hello!!
`;

const AdditionalApplicantDetails: React.FC = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "General Information",
      children: <div>{text}</div>,
    },
    {
      key: "2",
      label: "Property Details",
      children: <div>{text}</div>,
    },
    {
      key: "3",
      label: "Documents",
      children: <div>{text}</div>,
    },
    {
      key: "4",
      label: "Eligibility Criteria",
      children: <div>{text}</div>,
    },
  ];

  return (
    <>
      <Collapse bordered={false} expandIconPosition="end" items={items} />
    </>
  );
};

export default AdditionalApplicantDetails;
