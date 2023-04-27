export default interface IButton {
  id?: string;
  name: string | any;
  width?: string | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  typeButton?:
    | 'dashed'
    | 'primary'
    | 'default'
    | 'ghost'
    | 'link'
    | 'text'
    | undefined;
  disabled?: boolean;
  className?: string;
  size?: 'small' | 'middle' | 'large' | undefined;
  isLoading?: boolean;
  onClick?: any;
  style?: object;
  startIcon?: React.ReactNode;
  heigth?: string;
}
