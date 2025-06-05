"use client";

import React, { useEffect } from "react";
import { Button, Table, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useAuthStore } from "@/stores/authStore";
import { useSession } from "next-auth/react";

const files = [
  {
    key: "1",
    name: "Document.pdf",
    type: "PDF",
    size: "1.2 MB",
    modified: "2025-06-04",
  },
  {
    key: "2",
    name: "Image.png",
    type: "Image",
    size: "3.4 MB",
    modified: "2025-06-01",
  },
];

const columns = [
  {
    title: "Tên tệp",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Loại",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Kích thước",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Chỉnh sửa gần nhất",
    dataIndex: "modified",
    key: "modified",
  },
];
export default function Dashboard() {
  const handleUpload = () => {
    message.success("Tải lên thành công (giả lập)");
  };

  return (
    <Content className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <Title level={3} className="!mb-0">
          Tệp của bạn
        </Title>
        <Upload showUploadList={false} customRequest={handleUpload}>
          <Button icon={<UploadOutlined />} type="primary">
            Tải lên
          </Button>
        </Upload>
      </div>

      <Table
        columns={columns}
        dataSource={files}
        pagination={{ pageSize: 5 }}
        bordered
        className="bg-white rounded-xl shadow"
      />
    </Content>
  );
}
