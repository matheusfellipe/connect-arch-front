import { MenuProps } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const architectItems: MenuItem[] = [
  {
    label: 'Serviços Solicitados',
    key: '/request-services',
    icon: <ShoppingCartOutlined />,
  },
];
