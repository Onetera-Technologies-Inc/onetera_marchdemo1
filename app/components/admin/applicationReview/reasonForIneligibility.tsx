import { Card } from "antd";

const ReasonForIneligibility = () => {
  return (
    <>
      <Card
        style={{ margin: "0 0 10px 0", padding: "0 2px 0 20px" }}
        styles={{ body: { padding: 0 } }}
      >
        <h4>Reasons for ineligibility</h4>
        <h5>Document is missing</h5>
        <ul>
          <li>Dimensions and specifications of the roofing materials</li>
          <li>Roof slope or pitch details.</li>
        </ul>
      </Card>
    </>
  );
};

export default ReasonForIneligibility;
