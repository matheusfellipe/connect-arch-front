import { MenuProps } from 'antd';
import { DashboardOutlined, ShoppingCartOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const customerItems: MenuItem[] = [
  { label: 'Arquitetos', key: '/', icon: <DashboardOutlined /> },

  {
    label: 'Serviços Solicitados',
    key: '/request',
    icon: <ShoppingCartOutlined />,
  },
];
