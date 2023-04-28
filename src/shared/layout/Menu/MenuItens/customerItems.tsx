import { MenuProps } from 'antd';
import { DashboardOutlined, ShoppingCartOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const customerItems: MenuItem[] = [
  { label: 'Arquitetos', key: '/architects', icon: <DashboardOutlined /> },

  {
    label: 'Serviços Solicitados',
    key: '/services-requested',
    icon: <ShoppingCartOutlined />,
  },
];
