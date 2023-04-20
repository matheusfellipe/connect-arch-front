import { Checkbox, Form, Input, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {
  BoxContainer,
  ButtonCustom,
  FormCustom,
  ParagraphCustom,
  TitleCustom,
} from '../style';
import { LogoCustom } from '../../../shared/assets/logo/style';
import { Link } from 'react-router-dom';

const Register = () => {
  const onFinish = (values: string) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <BoxContainer>
        <BoxContainer>
          <div>
            <TitleCustom level={3}>Seja bem vindo a TopFarm!</TitleCustom>
            <Space direction="vertical" />
            <ParagraphCustom>
              Já possui cadastro ?{' '}
              <Link to="/login" replace>
                Entrar na Loja!
              </Link>
            </ParagraphCustom>
            <Space direction="vertical" size={'middle'} />
            <FormCustom
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={() => onFinish}
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite o seu nome!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Nome completo"
                />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite o seu sobrenome!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="E-mail"
                />
              </Form.Item>
              <Form.Item
                name="cnpj"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite o seu e-mail!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="CNPJ"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite a sua senha!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <ButtonCustom
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Registrar
                </ButtonCustom>
              </Form.Item>
            </FormCustom>
          </div>
        </BoxContainer>
        <LogoCustom />
      </BoxContainer>
    </>
  );
};

export default Register;
