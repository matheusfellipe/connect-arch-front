import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/topfarmlogo.svg';

export default interface Props {
  small?: boolean;
}

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 3px;
 `;

export const LogoCustom = styled(Logo)<Props>`
    width: ${(props) => (props.small ? '100px' : '300px')};
    height: ${(props) => (props.small ? '100px' : '300px')};
 `;
