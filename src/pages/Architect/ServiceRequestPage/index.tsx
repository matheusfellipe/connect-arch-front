import { ServiceRequestContainer } from './style';
import TableComponent from '../../../shared/components/Table';
import { useGetAllRequestServiceQuery } from '../../../redux/app/services/requestService/requestServiceApiSlice';

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
  const { data } = useGetAllRequestServiceQuery();
  console.log(data);
  return (
    <ServiceRequestContainer>
      <TableComponent columns={columns} data={undefined} />
    </ServiceRequestContainer>
  );
};

export default ServiceRequestPage;
