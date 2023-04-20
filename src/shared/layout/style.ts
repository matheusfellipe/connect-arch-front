import styled from 'styled-components';
import { Layout as AntLayout } from 'antd';
import { backgroundColor} from '../ui/var';

const { Content } = AntLayout;

export const LayoutCustom = styled(AntLayout)`
    min-height: 100vh;
`;

export const ContentCustom = styled(Content)`
    margin: 15px 0;
    min-height: 280;
    background: ${backgroundColor};
`;
