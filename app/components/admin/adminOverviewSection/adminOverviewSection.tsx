import { Card, Statistic, Row, Col } from "antd";
import ActivityLogScreen from "./activityLog/activityLog";
import { ArrowUpOutlined } from "@ant-design/icons";
import styles from "./adminOverviewSection.module.css";

const AdminOverviewSection = () => {
  return (
    <>
      <Row gutter={16}>
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
      </Row>
    </>
  );
};

export default AdminOverviewSection;
