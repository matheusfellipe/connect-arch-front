export interface INotification {
  message: string;
  description: string;
  type: 'success' | 'info' | 'warning' | 'error';
  duration: number;
  placement: any;
}
