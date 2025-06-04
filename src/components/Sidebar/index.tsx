"use client";

import React from "react";
import { Layout, Menu } from "antd";
import {
  FileOutlined,
  ShareAltOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <FileOutlined />,
    label: "Tất cả tệp",
  },
  {
    key: "2",
    icon: <ShareAltOutlined />,
    label: "Đã chia sẻ",
  },
  {
    key: "3",
    icon: <DeleteOutlined />,
    label: "Thùng rác",
  },
];

export default function Sidebar() {
  return (
    <Sider breakpoint="lg" collapsedWidth="0" className="bg-white">
      <div className="p-4 text-center font-bold text-lg text-blue-600">
        File Manager
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} items={menuItems} />
    </Sider>
  );
}
