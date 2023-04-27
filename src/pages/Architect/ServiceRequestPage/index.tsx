import { ServiceRequestContainer } from './style';
import TableComponent from '../../../shared/components/Table';

const columns = [
  {
    title: 'Cliente',
    dataIndex: 'customer',
    key: 'customer',
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
    <ServiceRequestContainer>
      <TableComponent columns={columns} data={undefined} />
    </ServiceRequestContainer>
  );
};

export default ServiceRequestPage;
