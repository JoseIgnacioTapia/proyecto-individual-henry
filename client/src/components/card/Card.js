import styled from 'styled-components';

const Container = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 10px auto;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  height: 390px;
  background: #34495e;
  color: var(--black-color);
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  font-size: inherit;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.2s ease-in;

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    vertical-align: top;
  }

  figcaption {
    background-color: var(--white-color);
    padding: 25px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  h3 {
    margin: 0 0 15px;
    text-transform: uppercase;
    font-weight: 800;
  }

  p {
    color: var(--black-color);
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
        <p style={{ lineClamp: 2 }}>{temperament}</p>
        <span>{weight} kg ⚖</span>
      </figcaption>
    </Container>
  );
}

export default Card;
