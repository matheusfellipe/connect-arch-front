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

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { createContext } from 'react';

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be atleast 6 characters' }),
});

type ValidationSchema = z.infer<typeof validationSchema>;
type Props = {};

const Login = (props: Props) => {
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  const loginAsPharmaceutical = async (values: any) => {
    try {
      await login({
        email: 'user',
        password: 'pass',
      });
      navigate('/');
      () => openNotification;
    } catch (err) {
      console.log('err', err);
    }
  };

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
              onFinish={loginAsPharmaceutical}
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
