import React from 'react';
import { Modal } from 'antd';

interface CreatePostProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateForm: React.FC<CreatePostProps> = (props) => {
  const { modalVisible, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title="新建规则"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default CreateForm;
