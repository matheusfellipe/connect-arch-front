import { Checkbox, Form, Input, Space, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {
  BoxContainer,
  ButtonCustom,
  FormCustom,
  ParagraphCustom,
  PasswordForgot,
  TitleCustom,
} from '../style';
import { LogoCustom } from '../../../shared/assets/logo/style';
import {
  useLoginMutation,
  useProtectedMutation,
} from '../../../redux/features/auth/auth';
import { selectIsAuthenticated } from '../../../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { createContext } from 'react';

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const Context = createContext({ name: 'Default' });

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [attemptAccess] = useProtectedMutation();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <BoxContainer>
        <BoxContainer>
          <div>
            <TitleCustom level={3}>Farmácia Virtual</TitleCustom>
            <Space direction="vertical" />
            <ParagraphCustom>
              Não é um parceiro TopFarm ? <a href="">Registrar agora!</a>
            </ParagraphCustom>
            <Space direction="vertical" size={'middle'} />
            <FormCustom
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Por favor digite seu e-mail!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="E-mail"
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
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Lembrar</Checkbox>
                </Form.Item>

                <PasswordForgot className="login-form-forgot" href="">
                  Esqueci a senha
                </PasswordForgot>
              </Form.Item>

              <Form.Item>
                <ButtonCustom
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
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

export default Login;
