import { ServicesOrderContainer } from './style';
import TableComponent from '../../../shared/components/Table';
import { useGetAllRequestServiceQuery } from '../../../redux/app/services/requestService/requestServiceApiSlice';

const columns = [
  {
    title: 'Cliente',
    dataIndex: 'customerName',
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

const ServicesOrderPage = () => {
  const { data } = useGetAllRequestServiceQuery();
  const tableRow = data?.map((serviceRequest) => {
    return {
      customerName: serviceRequest.customer.name,
      description: serviceRequest.description,
      status: serviceRequest.status,
    };
  });

  return (
    <ServicesOrderContainer>
      <TableComponent columns={columns} data={tableRow} />
    </ServicesOrderContainer>
  );
};

export default ServicesOrderPage;
