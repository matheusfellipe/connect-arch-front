import { MenuProps } from 'antd';
import {
  MedicineBoxOutlined,
  UserOutlined,
  BarChartOutlined,
  PieChartOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const pharmaceuticalsItems: MenuItem[] = [
  { label: 'Dashboard', key: '/', icon: <DashboardOutlined /> },
  { label: 'Vendas', key: '/sale', icon: <DollarCircleOutlined /> },
  { label: 'Pedidos', key: '/order', icon: <ShoppingCartOutlined /> },
  {
    label: 'Produtos',
    key: 'sub1',
    icon: <MedicineBoxOutlined />,
    children: [
      { label: 'Meus Produtos', key: 'product/my' },
      { label: 'Produtos Vinculados', key: 'product/linked' },
    ],
  },
  { label: 'Financeiro', key: 'financial', icon: <BarChartOutlined /> },
  {
    label: 'Relatórios',
    key: 'sub2',
    icon: <PieChartOutlined />,
    children: [
      { label: 'Vendas', key: 'report/sale' },
      { label: 'Vendas Por Produto', key: 'report/sale/product' },
      { label: 'Produtos Mais Vendidos', key: 'report/product/sale' },
    ],
  },
  {
    label: 'Minha Conta',
    key: 'sub3',
    icon: <UserOutlined />,
    children: [
      { label: 'Meus Dados', key: 'user/account' },
      { label: 'Minha Empresa', key: 'user/company' },
      { label: 'Minha Carteira', key: 'user/wallet' },
      { label: 'Documentos', key: 'user/documents/all' },
      { label: 'Taxa de Entrega', key: '/drugstore_tax_delivery' },
    ],
  },
];
