"use client";

import { Layout } from "antd";

const { Content } = Layout;

export default function PlatformLandingPage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to Onetera</h1>
      </Content>
    </Layout>
  );
}
