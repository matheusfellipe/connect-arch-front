import styled from 'styled-components';
import { Form, Button, Typography } from 'antd';

const { Paragraph, Title } = Typography;

export const FormCustom = styled(Form)`
display: flex;
flex-direction: column;

`;

export const PasswordForgot = styled.a`
 float: right;
`;

export const ButtonCustom = styled(Button)`
background-color: #D30032;
width: 100%;
`;

export const TitleCustom = styled(Title)`
    
`;

export const ParagraphCustom = styled(Paragraph)`
    color: #808080;
`;
