import TableComponent from '../../shared/components/Table';
import { CustomerHomeContainer } from './style';

const columns = [
  {
    title: 'Arquiteto',
    dataIndex: 'architect',
    key: 'architect',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },

  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
  },

  {
    title: 'CAU',
    dataIndex: 'registry',
    key: 'registry',
  },

  {
    title: 'Especialidade',
    dataIndex: 'specialty',
    key: 'specialty',
  },
];

const CustomerHomePage = () => {
  return (
    <CustomerHomeContainer>
      <TableComponent columns={columns} data={undefined} />
    </CustomerHomeContainer>
  );
};

export default CustomerHomePage;
