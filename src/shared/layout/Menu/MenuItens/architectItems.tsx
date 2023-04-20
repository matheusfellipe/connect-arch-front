import { MenuProps } from 'antd';
import { DashboardOutlined, ShoppingCartOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const admItems: MenuItem[] = [
  { label: 'Dashboard', key: '/', icon: <DashboardOutlined /> },
  { label: 'Solicitações', key: '/order', icon: <ShoppingCartOutlined /> },
];
