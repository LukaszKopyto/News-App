import styled from 'styled-components';

const Button = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  border: 0.2rem solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  box-shadow: -0.4rem 0.4rem 0 0 ${({ theme }) => theme.colors.shadow};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgColor};
  }
`;

export default Button;
