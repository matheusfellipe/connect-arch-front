import type { TablePaginationConfig } from 'antd/es/table';

export default interface ITable {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] | undefined;
  pagination?: false | undefined | TablePaginationConfig;
  title?: any;
  loading?: boolean;
  rowKey?: string;
  summary?: any;
}
