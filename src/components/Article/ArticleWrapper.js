import styled from 'styled-components';

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  box-shadow: 0 4.6px 2.2px rgba(0, 0, 75, 0.02), 0 11px 5.3px rgba(0, 0, 75, 0.028),
    0 20.7px 10px rgba(0, 0, 75, 0.035), 0 36.9px 17.9px rgba(0, 0, 75, 0.042),
    0 68.9px 33.4px rgba(0, 0, 75, 0.05), 0 165px 80px rgba(0, 0, 75, 0.07);

  & img {
    width: 100%;
    height: auto;
  }

  & div {
    flex: 1;
    margin: 0 1.5rem 1.5rem;

    & h3 {
      color: ${({ theme }) => theme.colors.primary};
      margin-top: 0;
    }

    & p {
      margin-bottom: 2rem;
    }

    & span:first-of-type {
      color: white;
      background: ${({ theme }) => theme.colors.shadow};
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      text-transform: uppercase;
      font-weight: 600;
    }

    & span:nth-child(2) {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      display: inline-block;
      margin-top: 1.5rem;
    }

    & div:last-of-type {
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      top: -0.4rem;
      position: relative;
    }
  }

  & div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  @media ${({ theme }) => theme.breakpoints.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    & div:nth-child(1) {
      max-width: 35rem;
    }
  }
`;

export default ArticleWrapper;
