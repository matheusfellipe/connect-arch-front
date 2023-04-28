import { ServicesRequestedContainer } from './style';
import TableComponent from '../../../shared/components/Table';

const columns = [
  {
    title: 'Arquiteto',
    dataIndex: 'architec',
    key: 'architec',
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const ServicesRequestedPage = () => {
  return (
    <ServicesRequestedContainer>
      <TableComponent columns={columns} data={undefined} />
    </ServicesRequestedContainer>
  );
};

export default ServicesRequestedPage;
