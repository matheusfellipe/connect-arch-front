import { Checkbox, Form, Input, Space, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {
  BoxContainer,
  ButtonCustom,
  FormCustom,
  ParagraphCustom,
  TitleCustom,
} from '../style';
import { LogoCustom } from '../../../shared/assets/logo/style';
import {
  LoginRequest,
  useLoginMutation,
  useProtectedMutation,
} from '../../../redux/features/auth/auth';

import { Link, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [attemptAccess] = useProtectedMutation();

  const onFinish = async (values: any) => {
    try {
      const data = await login(values);

      if (data) {
        navigate('/'); // Redireciona para a página principal da aplicação
      } else {
        openNotification('topRight');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <BoxContainer>
        <BoxContainer>
          <div>
            <TitleCustom level={3}>Solicite um Arquiteto</TitleCustom>
            <Space direction="vertical" />
            <ParagraphCustom>
              Ainda não é um cliente ?{' '}
              <Link to="/register" replace>
                Registrar agora!
              </Link>
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
        <BoxContainer style={{ display: 'flex', flexDirection: 'column' }}>
          <LogoCustom />
          <ParagraphCustom>
            Quer ser um parceiro arquiteto ?{' '}
            <Link to="/register-architect" replace>
              Oferecer meus serviços!
            </Link>
          </ParagraphCustom>
        </BoxContainer>
      </BoxContainer>
    </>
  );
};

export default Login;
