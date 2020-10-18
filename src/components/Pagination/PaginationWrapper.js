import styled from 'styled-components';

const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto 5rem;

  & .active {
    font-weight: 600;
    background: ${({ theme }) => theme.colors.primary};
    & li {
      color: ${({ theme }) => theme.colors.shadow};
    }
  }

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  & li {
    list-style: none;
    padding: 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default PaginationWrapper;
