import { Form, Input, InputNumber, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import InputMask from 'react-input-mask';
import { RegisterContainer } from './style';
import { LogoCustom } from '../../../shared/assets/logo/style';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAddNewUserMutation } from '../../../redux/app/services/users/userApiSlice';
import {
  FormCustom,
  ParagraphCustom,
  ButtonCustom,
  TitleCustom,
} from '../style';

const Register = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [register] = useAddNewUserMutation();

  const onFinish = async (values: any) => {
    const input = { roleId: state.roleId, ...values };

    try {
      const data = await register(input);

      if (data) {
        navigate('/login');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <RegisterContainer>
        <RegisterContainer>
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
              onFinish={onFinish}
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
                <InputNumber
                  id="age"
                  name="age"
                  placeholder="Idade"
                  style={{
                    height: '35px',
                    width: '100%',
                    borderRadius: '7px',
                    border: '1px solid #d9d9d9',
                    padding: '0 11px',
                  }}
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: 'Por favor digite seu telefone' },
                ]}
              >
                <InputMask
                  mask="(99) 99999-9999"
                  id="phone"
                  name="phone"
                  placeholder="Telefone"
                  style={{
                    height: '35px',
                    width: '100%',
                    borderRadius: '7px',
                    border: '1px solid #d9d9d9',
                    padding: '0 11px',
                  }}
                />
              </Form.Item>
              {state && state.isArchitect ? (
                <>
                  <Form.Item
                    name="registry"
                    rules={[
                      {
                        required: true,
                        message: 'Por favor digite o seu registro CAU',
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Registro CAU"
                    />
                  </Form.Item>
                  <Form.Item
                    name="specialty"
                    rules={[
                      {
                        required: true,
                        message: 'Por favor digite a sua especialidade',
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Especialidade"
                    />
                  </Form.Item>
                </>
              ) : (
                ''
              )}
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
        </RegisterContainer>
        <LogoCustom />
      </RegisterContainer>
    </>
  );
};

export default Register;
