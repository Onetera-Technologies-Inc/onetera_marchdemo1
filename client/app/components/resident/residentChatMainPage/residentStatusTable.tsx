// import { TableDataItem } from "@/app/constants/interfaces";
// import { Table } from "antd";

// interface ResidentStatusTableProps {
//   tableData: TableDataItem[];
// }

// const ResidentStatusTable: React.FC<ResidentStatusTableProps> = ({
//   tableData,
// }) => {
//   if (!tableData || tableData.length === 0) {
//     return <p></p>;
//   }

//   console.log(tableData);

//   const columns = Object.keys(tableData[0]).map((key) => ({
//     title: key,
//     dataIndex: key,
//     key: key,
//   }));

//   return (
//     <div>
//       <Table
//         columns={columns}
//         dataSource={tableData}
//         pagination={false}
//         rowKey="Property Name"
//       />
//     </div>
//   );
// };

// export default ResidentStatusTable;

import { TableDataItem } from "@/app/constants/interfaces";
import { Card, Button, Row, Col, Tag } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
interface ResidentStatusTableProps {
  tableData: TableDataItem[];
}

const ResidentStatusTable: React.FC<ResidentStatusTableProps> = ({
  tableData,
}) => {
  if (!tableData || tableData.length === 0) {
    return <p></p>;
  }

  function getTagColor(status: string) {
    switch (status) {
      case "Eligible":
        return "green";
      case "Pending Review":
        return "orange";
      case "Documents Missing":
        return "red";
      default:
        return "default";
    }
  }

  return (
    <div>
      {tableData.length > 0 &&
        tableData?.map((dataItem) => {
          return (
            <div>
              <Card
                styles={{ body: { padding: 0 } }}
                style={{ margin: "6px 0 0 0" }}
              >
                <Row gutter={5}>
                  <Col span={4}>
                    <img
                      src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Col>
                  <Col span={14}>
                    <Row>
                      <h5>{dataItem?.propertyName}</h5>
                    </Row>
                    <Row style={{ color: "gray" }}>
                      <Col span={8}>City</Col>
                      <Col span={8}>Submission Date</Col>
                      <Col span={8}>Status</Col>
                    </Row>
                    <Row>
                      <Col span={8}>{dataItem?.city}</Col>
                      <Col span={8}>{dataItem?.submissionDate}</Col>
                      <Col span={8}>
                        <Tag color={getTagColor(dataItem?.status)}>
                          {dataItem?.status}
                        </Tag>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Button type="link" icon={<FileTextOutlined />}>
                          View application
                        </Button>
                      </Col>
                      <Col span={8}>
                        <Button type="link" icon={<PhoneOutlined />}>
                          Call (628) 628-3760
                        </Button>
                      </Col>
                      <Col span={8}>
                        <Button type="link" icon={<MailOutlined />}>
                          Email
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  {dataItem?.status === "Eligible" ? (
                    <Col
                      span={6}
                      style={{ backgroundColor: "#f4eeee", padding: "20px" }}
                    >
                      <Row style={{ color: "gray" }}>Waitlist information</Row>
                      <Row>
                        <b style={{ marginRight: "3px" }}>
                          {dataItem?.waitlistPosition}
                        </b>{" "}
                        out of
                        <b style={{ marginLeft: "3px" }}>
                          {dataItem?.waitlistSlots}
                        </b>
                      </Row>
                      <Row style={{ color: "gray" }}>
                        500 waitlist slots | est. 12 months wait
                      </Row>
                    </Col>
                  ) : (
                    <Col
                      span={6}
                      style={{ backgroundColor: "#f4eeee", padding: "20px" }}
                    >
                      <Row style={{ color: "gray" }}>Waitlist information</Row>
                      <Row>
                        <b style={{ marginRight: "3px" }}>
                          {dataItem?.availableUnits}
                        </b>{" "}
                        available units
                      </Row>
                      <Row style={{ color: "gray" }}>
                        500 waitlist slots | lottery on March 17th
                      </Row>
                    </Col>
                  )}
                </Row>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default ResidentStatusTable;
