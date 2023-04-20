import type { MenuProps } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

export const items: MenuProps['items'] = [
  {
    key: '/login',
    label: ' Sair',
    icon: <LogoutOutlined />,
  },
];
