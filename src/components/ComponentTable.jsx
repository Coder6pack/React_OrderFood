import { Table } from "antd";
import React from "react";

export default function ComponentTable() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      phone: 32,
      address: "10 Downing Street",
      price: 0,
    },
  ];

  const columns = [
    {
      title: "Stt",
      dataIndex: "Stt",
      key: "Stt",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
