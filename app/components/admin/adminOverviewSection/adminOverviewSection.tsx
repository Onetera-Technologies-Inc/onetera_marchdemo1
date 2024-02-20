import { Card, Timeline, Statistic, Row, Col } from "antd";

const AdminOverviewSection = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Activity Log" style={{ minHeight: "200px" }}>
            {/* <Timeline>
              <Timeline.Item>
                Applicant A56B7BZ92 for roofing permit application approved
              </Timeline.Item>
            </Timeline> */}
            <a href="#">See all</a>
          </Card>
        </Col>
        <Col span={8}>hh</Col>
        <Col span={8}>
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                {/* <Statistic
                  title="Average application processing time"
                  value={3}
                  suffix="days"
                />
                j */}
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                {/* <Statistic
                  title="Average incoming applications per day"
                  value={8}
                  suffix="applications"
                />
                p */}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* You can add more rows or cards as needed */}
    </>
  );
};

export default AdminOverviewSection;
