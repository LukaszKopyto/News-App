import styled from 'styled-components';
import { colors } from 'utils/colors';
import { breakpoints } from 'utils/breakpoints';

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
    margin: 0 15px 15px;
    & h3 {
      color: ${colors.primary};
      margin-top: 0;
    }
    & span:first-of-type {
      color: ${colors.primary};
      border: 2px solid ${colors.primary};
      padding: 5px 10px;
      margin-right: 10px;
      text-transform: uppercase;
      font-weight: 600;
    }
    & span:nth-child(2) {
      color: ${colors.primary};
      font-weight: 600;
      display: inline-block;
      margin-top: 15px;
    }
  }

  @media ${breakpoints.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default ArticleWrapper;
