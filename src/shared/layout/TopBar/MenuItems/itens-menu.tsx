
import type { MenuProps } from 'antd';
import {DashboardOutlined,UserOutlined,LogoutOutlined} from '@ant-design/icons';

export const items: MenuProps['items'] = [
    {
      key: '/',
      label: "Dashboard",
      icon:( <DashboardOutlined />)
    },
    {
      key: '/user/account',
      label:"Minha Conta",
      icon:(<UserOutlined />)
    },
    {
      key: '/login',
      label:" Sair",
      icon:( <LogoutOutlined />)
    },
  ];