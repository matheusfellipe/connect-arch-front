import IButton from './interface';
import { ButtonCustom } from '../../../pages/Auth/style';
export default function ButtonComponent({
  name,
  id,
  disabled,
  style,
  onClick,
  className,
  size,
  isLoading,
  startIcon,
  type,
  typeButton,
}: IButton) {
  return (
    <ButtonCustom
      id={id}
      type={typeButton || 'default'}
      htmlType={type}
      disabled={disabled}
      size={size}
      loading={isLoading}
      style={style}
      className={className}
      onClick={onClick}
      icon={startIcon}
    >
      {name}
    </ButtonCustom>
  );
}
