import { ServicesRequestedContainer } from './style';
import TableComponent from '../../../shared/components/Table';
import { useGetAllRequestServiceQuery } from '../../../redux/app/services/requestService/requestServiceApiSlice';

const columns = [
  {
    title: 'Arquiteto',
    dataIndex: 'architectName',
    key: 'architect',
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
  const { data } = useGetAllRequestServiceQuery();
  console.log(data);
  const tableRow = data?.map((serviceRequest) => {
    return {
      architectName: serviceRequest.architect.name,
      description: serviceRequest.description,
      status: serviceRequest.status,
    };
  });
  return (
    <ServicesRequestedContainer>
      <TableComponent columns={columns} data={tableRow} />
    </ServicesRequestedContainer>
  );
};

export default ServicesRequestedPage;
