import styled from 'styled-components';

const Container = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  background: #34495e;
  color: var(--black-color);
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  font-size: inherit;
  transition: all 0.2s ease-in;

  img {
    max-width: 100%;
    vertical-align: top;
  }

  figcaption {
    background-color: var(--white-color);
    padding: 25px;
  }

  h3 {
    margin: 0 0 15px;
    text-transform: uppercase;
    font-weight: 800;
  }

  h5 {
    margin: 0 0 15px;
    font-weight: 200;
    font-style: italic;
  }

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;

function Card({ id, image, name, temperament, weight }) {
  return (
    <Container>
      <img src={image} alt={name} />
      <figcaption>
        <h3>{name}</h3>
        <h5>{temperament}</h5>
        <span>{weight} kg ⚖</span>
      </figcaption>
    </Container>
  );
}

export default Card;
