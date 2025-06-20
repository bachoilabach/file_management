'use client';

import React, { useState } from 'react';
import { Dropdown, MenuProps, Space } from 'antd';
import { EditOutlined, DeleteOutlined, ShareAltOutlined, MoreOutlined } from '@ant-design/icons';
import PopUp from '@/components/PopUp';
import { notify } from '@/lib/toast';
import { deleteFile, renameFile } from '@/pages/api/file';
import { useFileStore } from '@/stores/fileStore';
import EditFileModal from '../Modal/EditFileModal';

interface Props {
  fileId: string;
  fileName: string;
}

export default function DropDownCustom({ fileId, fileName }: Props) {
  const { removeFile, updateFileName } = useFileStore();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showRename, setShowRename] = useState(false);

  const handleConfirmDelete = async () => {
    try {
      await deleteFile(fileId);
      removeFile(fileId);
      notify.success('Đã xóa file thành công');
    } catch (error) {
      notify.error(error);
    } finally {
      setShowConfirm(false);
    }
  };

  const handleRenameConfirm = async (newName: string) => {
    try {
      await renameFile(fileId, newName);
      updateFileName(fileId, newName);
      notify.success('Đã đổi tên thành công');
    } catch (error) {
      notify.error(error);
    } finally {
      setShowRename(false);
    }
  };

  const items: MenuProps['items'] = [
    {
      key: 'share',
      label: 'Chia sẻ',
      icon: <ShareAltOutlined />,
      onClick: () => {
        notify.info('Tính năng chia sẻ chưa được hỗ trợ');
      },
    },
    {
      key: 'rename',
      label: 'Đổi tên',
      icon: <EditOutlined />,
      onClick: () => setShowRename(true),
    },
    {
      key: 'delete',
      label: 'Xóa',
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => setShowConfirm(true),
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
        <Space className='text-gray-600 hover:text-black text-lg cursor-pointer'>
          <MoreOutlined />
        </Space>
      </Dropdown>

      <PopUp
        visible={showConfirm}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
      />

      <EditFileModal
        visible={showRename}
        currentName={fileName}
        onConfirm={handleRenameConfirm}
        onCancel={() => setShowRename(false)}
      />
    </>
  );
}
