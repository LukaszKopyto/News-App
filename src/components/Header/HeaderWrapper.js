import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  height: 8rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.shadow};
  margin-bottom: 5rem;
  box-shadow: 0 4.6px 2.2px rgba(0, 0, 75, 0.02), 0 11px 5.3px rgba(0, 0, 75, 0.028),
    0 20.7px 10px rgba(0, 0, 75, 0.035), 0 36.9px 17.9px rgba(0, 0, 75, 0.042),
    0 68.9px 33.4px rgba(0, 0, 75, 0.05), 0 165px 80px rgba(0, 0, 75, 0.07);

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & > div:nth-child(1) {
    width: 85vw;
    max-width: 140rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1 {
      text-transform: uppercase;
    }
  }
`;

export default HeaderWrapper;
