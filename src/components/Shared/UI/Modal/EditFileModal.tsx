'use client';

import React, { useEffect, useState } from 'react';
import { Modal, Input } from 'antd';

interface RenameModalProps {
  visible: boolean;
  currentName: string;
  onConfirm: (newName: string) => void;
  onCancel: () => void;
}

function EditFileModal({ visible, currentName, onConfirm, onCancel }: RenameModalProps) {
  const [newName, setNewName] = useState<string>(currentName);

  useEffect(() => {
    setNewName(currentName);
  }, [currentName, visible]);

  const handleOk = () => {
    const trimmed = newName.trim();
    if (trimmed) {
      onConfirm(trimmed);
    }
  };

  return (
    <Modal
      title='Đổi tên tệp'
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText='Lưu'
      cancelText='Hủy'
      centered
    >
      <Input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder='Nhập tên mới'
        autoFocus
      />
    </Modal>
  );
}
export default EditFileModal;
