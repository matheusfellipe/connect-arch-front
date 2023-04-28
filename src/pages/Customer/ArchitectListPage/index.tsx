import { useGetUserQuery } from '../../../redux/app/services/users/userApiSlice';
import TableComponent from '../../../shared/components/Table';
import { ArchitectListContainer } from './style';

const columns = [
  {
    title: 'Arquiteto',
    dataIndex: 'name',
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

const ArchitectListPage = () => {
  const { data } = useGetUserQuery();

  // const tableRow = data?.map((architect) => {
  //   return {
  //     name: architect.name,
  //     email: architect.email,
  //     phone: architect.phone,
  //     registry: architect.registry,
  //     specialty: architect.specialty,
  //   };
  // });
  return (
    <ArchitectListContainer>
      <TableComponent columns={columns} data={undefined} />
    </ArchitectListContainer>
  );
};

export default ArchitectListPage;
