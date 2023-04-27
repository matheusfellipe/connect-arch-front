import { notification } from 'antd';
import { INotification } from './interface/INotification';

export const openNotificationWithIcon = (
  { type, message, description, duration, placement }: INotification,
  api: any,
) => {
  notification.open({
    type,
    message,
    description,
    duration,
    placement,
  });
};
