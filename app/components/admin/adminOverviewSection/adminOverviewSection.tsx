import { Card, Statistic, Row, Col } from "antd";

const AdminOverviewSection = () => {
  return (
    <>
      {/* <Row gutter={16}>
        <Col span={8}>
          <Card title="Activity Log" className={styles.cardContainer}>
            <div className={styles.cardContent}>
              <ActivityLogScreen />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Application Status Distribution"
            className={styles.cardContainer}
          >
            <div className={styles.cardContent}>
              Doughnut chart illustrating the distribution of approved, denied,
              and pending applications
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.cardContainer}>
            <Card bordered={false}>
              <div className={styles.cardContent}>
                <div className={styles.statisticTitle}>
                  Average application processing time
                </div>
                <Statistic
                  value={3}
                  precision={0}
                  valueStyle={{ color: "#3f8600" }}
                  suffix="days"
                />
                <div>1.8% Up from last month</div>
              </div>
            </Card>
            <br />
            <Card bordered={false}>
              <div className={styles.cardContent}>
                <div className={styles.statisticTitle}>
                  Average incoming applications per day
                </div>
                <Statistic
                  value={8}
                  precision={0}
                  valueStyle={{ color: "#3f8600" }}
                  suffix="applications"
                />
                <div>1.8% Up from last month</div>
              </div>
            </Card>
          </Card>
        </Col>
      </Row> */}
      <div style={{ background: "#333C4E", padding: "30px" }}>
        <Row gutter={16} justify="space-around" align="middle">
          <Col span={8}>
            <div style={{ color: "white" }}>
              <h1 style={{ color: "white" }}>Admin Dashboard</h1>
            </div>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Need Review"
                value={6}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Pending Documents"
                value={2}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Applications Today"
                value={14}
                valueStyle={{ color: "#234abc" }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminOverviewSection;
