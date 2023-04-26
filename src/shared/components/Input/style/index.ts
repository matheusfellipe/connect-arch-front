import styled from 'styled-components';

interface IBoxInput {
  maxWidth?: string;
  margin?: string;
  minWidth?: string;
}

export const Label = styled.p`
	color: red;
`;
export const BoxInput = styled.div<IBoxInput>`
	width: 100%;
	${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth};`}
	${(props) => props.margin && `margin: ${props.margin};`}
`;
