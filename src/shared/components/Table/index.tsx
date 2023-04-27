import { Table } from 'antd';
import ITable from './interface';

export default function TableComponent({
  rowKey,
  columns,
  data,
  pagination,
  title,
  loading,
  summary,
}: ITable) {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      title={title}
      loading={loading}
      rowKey={rowKey || '_id'}
      style={{ overflowX: 'auto', background: 'white', width: '100%' }}
      summary={summary}
    />
  );
}
