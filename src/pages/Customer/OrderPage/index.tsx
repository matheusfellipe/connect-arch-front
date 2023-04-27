import { OrderServiceContainer } from './style';
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

const ServiceRequestPage = () => {
  return (
    <OrderServiceContainer>
      <TableComponent columns={columns} data={undefined} />
    </OrderServiceContainer>
  );
};

export default ServiceRequestPage;
