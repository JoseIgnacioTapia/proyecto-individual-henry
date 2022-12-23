import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllDogs } from '../../redux/action.js';
import { Nav } from './Nav.js';

function Navbar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getAllDogs());
  };

  return (
    <div>
      <Nav>
        <ul>
          <NavLink to="/dogs" activeClassName="current" onClick={handleClick}>
            <li>Principal</li>
          </NavLink>

          <NavLink to="/create" activeClassName="current">
            <li>Formulario</li>
          </NavLink>
        </ul>
      </Nav>
    </div>
  );
}

export default Navbar;
