import React from "react";
import { Button, Space } from "antd";

export default function ComponentButton() {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Button style={{ color: "blue", float: "right" }}>Add</Button>
    </Space>
  );
}
