// eslint-disable-next-line no-useless-escape
import { Rule } from 'antd/lib/form';
export const validatePhone = (
  rule: Rule,
  value: string,
  callback: (error?: string) => void,
) => {
  // eslint-disable-next-line no-useless-escape
  const phoneRegex = /^\(\d{2}\)\s*\d{4,5}\-\d{4}$/;
  if (!phoneRegex.test(value)) {
    callback(
      'Por favor, insira um número de telefone válido no formato (99) 9999-9999',
    );
  } else {
    callback();
  }
};
