import { Form, Input, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import InputMask from 'react-input-mask';

import {
  BoxContainer,
  ButtonCustom,
  FormCustom,
  ParagraphCustom,
  TitleCustom,
} from '../style';
import { LogoCustom } from '../../../shared/assets/logo/style';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [architect, setArchitect] = useState(false);

  const onFinish = (values: string) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <BoxContainer>
        <BoxContainer>
          <div>
            <TitleCustom level={3}>Seja bem vindo a Archi Connect!</TitleCustom>
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
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite o seu email!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="E-mail"
                />
              </Form.Item>
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite o seu gênero',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Gênero"
                />
              </Form.Item>
              <Form.Item
                name="age"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite a sua idade',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Idade"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Telefone"
                style={{
                  display: 'inline-block',
                  marginBottom: '5px',
                  marginRight: '15px',
                  width: '49%',
                }}
                labelCol={{ span: 24 }}
                rules={[{ required: true }]}
              >
                <InputMask mask="(99) 9999-9999" id="phone" name="phone" />
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
