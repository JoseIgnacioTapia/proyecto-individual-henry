import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: var(--second-color);
  height: 2.5rem;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding-top: 0.3rem;

    a {
      text-decoration: none;
      color: var(--black-color);
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in;

      &:hover {
        color: var(--first-color);
        border-bottom: 2px solid var(--black-color);
      }
    }

    .current {
      li {
        border-bottom: 2px solid var(--white-color);
      }
    }
  }
`;
