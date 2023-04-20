import { Header } from 'antd/es/layout/layout';
import { secondaryColor } from '../../ui/var';
import styled from 'styled-components';

export const HeaderCustom = styled(Header)`
    display: flex;
    justify-content: space-between;
    padding: 0;
    background: ${secondaryColor};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
