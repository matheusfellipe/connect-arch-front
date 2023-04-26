import InputMasked from 'react-input-mask';
import IInputMask from './interface/IInputMask';
import { Input as InputAntd } from 'antd';
import { useState } from 'react';
import { Label } from '../Input/style';
import { useEffect } from 'react';

export default function InputMask({
  type,
  name,
  value,
  onChange,
  id,
  label,
  size,
  required,
  disabled,
  className,
  placeholder,
  error,
  width,
  helperText,
  icon,
  suffix,
  prefix,
  addonAfter,
  mask,
  maskPlaceholder,
}: IInputMask) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div style={{ width: '100%', maxWidth: width ? width : '100%' }}>
      {label && <p>{label}</p>}
      <InputMasked
        maskPlaceholder={maskPlaceholder}
        id={id}
        name={name}
        mask={mask}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (onChange) onChange(e);
        }}
        disabled={disabled}
        className={className}
        placeholder={placeholder}
      >
        <InputAntd
          size={size || 'middle'}
          type={type}
          name={name}
          status={error ? 'error' : undefined}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          className={className}
          suffix={suffix || icon}
          prefix={prefix}
          style={{ borderRadius: '5px' }}
          addonAfter={addonAfter}
        />
      </InputMasked>
      {error && <Label>{helperText}</Label>}
    </div>
  );
}
