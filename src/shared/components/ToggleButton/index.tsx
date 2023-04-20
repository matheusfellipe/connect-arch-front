import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';

const ToggleButton: React.FC = () => (
  <Space direction="vertical">
    <Switch
      checkedChildren={
      <>
      <CheckOutlined />
      {" Farmácia Aberta"}
      </>}
      unCheckedChildren={
        <>
      <CloseOutlined />
      {" Farmácia Fechada"}
      </>}
      defaultChecked
    />
  </Space>
);

export default ToggleButton;