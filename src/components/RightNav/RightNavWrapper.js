import styled from 'styled-components';

const RightNavWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 1.8rem 1rem;

    &:hover {
      font-weight: 800;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 30rem;
    padding-top: 5.6rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    li {
      color: ${({ theme }) => theme.colors.shadow};
      padding: 2.8rem 3rem;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 800;
      }
    }
  }
`;

export default RightNavWrapper;
