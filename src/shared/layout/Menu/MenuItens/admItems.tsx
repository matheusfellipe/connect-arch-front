import { MenuProps } from 'antd';
import {
  ShareAltOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  SolutionOutlined,
  SettingOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const admItems: MenuItem[] = [
  { label: 'Dashboard', key: '/', icon: <DashboardOutlined /> },
  { label: 'Pedidos', key: '/order', icon: <ShoppingCartOutlined /> },
  { label: 'Farmácias', key: '/drugstore', icon: <ShopOutlined /> },
  { label: 'Clientes', key: '/customer', icon: <SolutionOutlined /> },
  {
    label: 'Marketing',
    key: 'sub1',
    icon: <ShareAltOutlined />,
    children: [
      { label: 'Campanhas', key: 'marketing/all_campaigns' },
      { label: 'Perfis de Clientes', key: 'marketing/customer_profiles' },
    ],
  },
  {
    label: 'Configurações',
    key: 'sub2',
    icon: <SettingOutlined />,
    children: [
      { label: 'Termos', key: 'term' },
      { label: 'Categorias', key: 'product_category' },
      { label: 'Produtos', key: 'products' },
      { label: 'Usuários', key: 'users' },
      { label: 'Marcas', key: 'brands' },
      { label: 'Departamentos', key: 'departments' },
      { label: 'Sintomas', key: 'symptoms' },
      { label: 'Seções', key: 'section' },
      { label: 'Laboratórios', key: 'laboratory' },
    ],
  },
  { label: 'Erros', key: '/errors', icon: <ExclamationCircleOutlined /> },
  { label: 'Minha Conta', key: '/admin/account', icon: <UserOutlined /> },
];
