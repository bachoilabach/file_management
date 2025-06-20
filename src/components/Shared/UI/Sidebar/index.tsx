'use client';

import React, { memo, useCallback, useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { FileOutlined, ShareAltOutlined, DeleteOutlined, LogoutOutlined } from '@ant-design/icons';
import { signOut } from 'next-auth/react';
import classNames from 'classnames';

const { Sider } = Layout;

const menuItems = [
  {
    key: '1',
    icon: <FileOutlined />,
    label: 'Tất cả tệp',
  },
  {
    key: '2',
    icon: <ShareAltOutlined />,
    label: 'Đã chia sẻ',
  },
  {
    key: '3',
    icon: <DeleteOutlined />,
    label: 'Thùng rác',
  },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const handleSignOut = useCallback(() => {
    signOut({ callbackUrl: '/login' });
  }, []);

  return (
    <Sider
      collapsible
      breakpoint='lg'
      collapsedWidth={80}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      onBreakpoint={(broken) => setCollapsed(broken)}
      width={240}
      className='bg-white max-h-screen shadow-lg transition-all duration-300'
      style={{ borderRight: 'none' }}
    >
      <div className='flex flex-col h-full'>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          items={menuItems}
          className='flex-grow bg-transparent custom-menu'
          style={{ borderRight: 'none' }}
        />

        <div className='p-4 mt-auto justify-center'>
          <Button
            icon={<LogoutOutlined />}
            onClick={handleSignOut}
            danger
            block={!collapsed}
            className={classNames({
              'w-full': collapsed,
              'justify-center': collapsed,
              'flex items-center': true,
            })}
          >
            {!collapsed && 'Đăng xuất'}
          </Button>
        </div>
      </div>
    </Sider>
  );
}

export default memo(Sidebar);
