import { Checkbox, Form, Input, Space, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { LoginContainer } from './style';
import { LogoCustom } from '../../../shared/assets/logo/style';

import { Link, useNavigate } from 'react-router-dom';

import {
  ROLE,
  useLoginMutation,
} from '../../../redux/app/services/auth/authApiSlice';
import {
  ButtonCustom,
  FormCustom,
  ParagraphCustom,
  TitleCustom,
} from '../style';
import { openNotificationWithIcon } from '../../../shared/components/Notification/NotificationComponent';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/features/auth/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const user = useSelector(selectCurrentUser);
  // const [attemptAccess] = useProtectedMutation();

  const onFinish = async (values: any) => {
    const api = notification;
    try {
      const data = await login(values);

      if (data) {
        openNotificationWithIcon(
          {
            type: 'success',
            description: 'Login Realizado com Sucesso',
            message: 'Você está logado no sistema',
            duration: 2,
            placement: 'topRight',
          },
          api,
        );
        user && user.role == ROLE.CUSTOMER
          ? navigate('/')
          : navigate('/request-services');
      }
    } catch (error) {
      openNotificationWithIcon(
        {
          type: 'error',
          description: 'Algo deu Errado!',
          message: error as string,
          duration: 2,
          placement: 'topRight',
        },
        api,
      );
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginContainer>
          <div>
            <TitleCustom level={3}>Solicite um Arquiteto</TitleCustom>
            <Space direction="vertical" />
            <ParagraphCustom>
              Ainda não é um cliente ?{' '}
              <Link
                to="/register"
                replace
                state={{ isArchitect: false, roleId: ROLE.CUSTOMER }}
              >
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
        </LoginContainer>
        <LoginContainer style={{ display: 'flex', flexDirection: 'column' }}>
          <LogoCustom />
          <ParagraphCustom>
            Quer ser um parceiro arquiteto ?{' '}
            <Link
              to="/register"
              state={{ isArchitect: true, roleId: ROLE.ARCHITECT }}
              replace
            >
              Oferecer meus serviços!
            </Link>
          </ParagraphCustom>
        </LoginContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
