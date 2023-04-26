import React from 'react';

export default interface IInputMask {
  id: string;
  label?: string;
  size?: 'small' | 'middle' | 'large';
  type?: string;
  name: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: boolean;
  width?: string;
  formikField?: boolean;
  helperText?: React.ReactNode;
  mask: string | (string | RegExp)[];
  icon?: React.ReactNode;
  suffix?: string;
  margin?: string;
  prefix?: string;
  minWidth?: string;
  addonAfter?: React.ReactNode;
  maskPlaceholder?: string | null | undefined;
}
