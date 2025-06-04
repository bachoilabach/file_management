import React from "react";
import { Avatar, Button, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";

export default function DashboardHeader() {
  return (
    <Header className="bg-white px-6 flex justify-between items-center shadow">
      <Space>
        <Avatar icon={<UserOutlined />} />
        <span>Xin chào, Người dùng</span>
      </Space>
      <Button icon={<LogoutOutlined />} danger>
        Đăng xuất
      </Button>
    </Header>
  );
}
