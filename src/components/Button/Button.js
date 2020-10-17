import styled from 'styled-components';
import { colors } from 'utils/colors';

const { primary, shadow, bgColor } = colors;

const Button = styled.a`
  color: ${primary};
  text-decoration: none;
  font-weight: 600;
  border: 0.2rem solid ${primary};
  padding: 0.5rem 1rem;
  box-shadow: -0.4rem 0.4rem 0 0 ${shadow};

  &:hover {
    background: ${primary};
    color: ${bgColor};
  }
`;

export default Button;
