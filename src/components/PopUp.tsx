//create pop-up component for file delete confirmation
import React from "react";
import { Modal } from "antd";

interface PopUpProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const PopUp: React.FC<PopUpProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      title="Xác nhận xóa tệp"
      open={visible}
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Xóa"
      okButtonProps={{ danger: true }}
      cancelText="Hủy bỏ"
      centered
    >
      <p>
        Bạn có muốn xóa file này không?
      </p>
    </Modal>
  );
};

export default PopUp;
