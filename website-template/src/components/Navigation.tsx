import { Link } from 'react-router-dom';

import st from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={st.nav}>
      <ul className={st.ul}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/posts'}>Posts</Link>
        </li>
        <li>
          <Link to={'/createpost'}>Create New Post</Link>
        </li>
        <li>
          <Link to={'/photos'}>Photos</Link>
        </li>
        <li>
          <Link to={'/todos'}>Todos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
