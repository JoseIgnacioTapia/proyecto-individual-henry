import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonPrimary = styled(Link)`
  text-decoration: none;
  background-color: var(--first-color-dark);
  width: 12rem;
  color: var(--white-color);
  font-size: 2rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  display: block;
  margin: 1rem auto;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--first-color);
  }
`;
