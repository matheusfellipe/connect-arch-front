import React from 'react';
import { Button, Space } from 'antd';

interface Props {
  name: string;
}

const ArcButton: React.FC<Props> = ({ name }: Props) => (
  <Space wrap>
    <Button type="primary">${name}</Button>
  </Space>
);

export default ArcButton;
